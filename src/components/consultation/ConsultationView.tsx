import { 
  MapPin, Phone, Mail, Briefcase, Building2, AlertTriangle, 
  Syringe, Gift, ShoppingBag, Car, Wifi
} from "lucide-react";
import { ConsultationHeader } from "./ConsultationHeader";
import { PersonalDataSection } from "./PersonalDataSection";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";

import { LeakedCredentialsSection } from "./LeakedCredentialsSection";
import { RelatedByAddressSection } from "./RelatedByAddressSection";
import { OnlinePurchasesSection } from "./OnlinePurchasesSection";
import { PropensitiesSection } from "./PropensitiesSection";
import { VehiclesSection } from "./VehiclesSection";
import { PlansSection } from "./PlansSection";
import { ConsultaAPIResponse } from "@/types/consultation";

interface ConsultationViewProps {
  data: ConsultaAPIResponse;
}

export const ConsultationView = ({ data }: ConsultationViewProps) => {
  const response = data.SERVICE_RESPONSE;
  if (!response) return null;

  const formatDate = (date?: string | null) => {
    if (!date) return undefined;
    try {
      if (date.includes('/')) return date;
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const formatCurrency = (value?: string) => {
    if (!value) return undefined;
    const num = parseFloat(value);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  };

  return (
    <div className="min-h-screen bg-background p-6 print:p-0 print:bg-white">
      <div className="w-[210mm] mx-auto">
        <ConsultationHeader 
          title="Consulta Cadastral"
          subtitle="Relatório completo"
          cadastral={response.cadastral}
          fotos={response.fotos}
        />

        <div className="space-y-3 print:space-y-2">
          <PersonalDataSection data={response.cadastral} />

          {/* Credenciais Vazadas */}
          <LeakedCredentialsSection credenciais={response.credenciaisVazadas} />

          {/* Endereços */}
          {response.enderecos && response.enderecos.length > 0 && (
            <SectionCard title="Endereços" icon={MapPin} count={response.enderecos.length}>
              <div className="space-y-2">
                {response.enderecos.slice(0, 4).map((end, i) => (
                  <div key={i} className={`flex items-start gap-2 ${i > 0 ? 'pt-2 border-t border-divider' : ''}`}>
                    <span className="text-[10px] font-medium bg-muted px-1.5 py-0.5 rounded mt-0.5">
                      {end.classificacao || '—'}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        {end.endereco || end.logradouro}, {end.numero}{end.complemento ? ` - ${end.complemento}` : ''}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {end.bairro} • {end.cidade}/{end.uf} • CEP: {end.cep}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Telefones e Emails */}
          <div className="grid grid-cols-2 gap-3 print:gap-2">
            {response.telefones && response.telefones.length > 0 && (
              <SectionCard title="Telefones" icon={Phone} count={response.telefones.length}>
                <div className="space-y-1">
                  {response.telefones.slice(0, 8).map((tel, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-divider last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{tel.telefone}</span>
                        <span className="text-[10px] text-muted-foreground">{tel.data}</span>
                      </div>
                      <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded">
                        {tel.classificacao}
                      </span>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
            {response.emails && response.emails.length > 0 && (
              <SectionCard title="E-mails" icon={Mail} count={response.emails.length}>
                <div className="space-y-1">
                  {response.emails.map((email, i) => (
                    <div key={i} className="py-1 border-b border-divider last:border-0">
                      <p className="text-sm break-all">{email.email}</p>
                      <span className="text-[10px] text-muted-foreground">{email.avaliacao}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
          </div>

          {/* Veículos */}
          <VehiclesSection placas={response.placas} />

          {/* Planos e Serviços */}
          <PlansSection planos={response.planos} />

          {/* Relacionados por Endereço */}
          <RelatedByAddressSection relacionados={response.relacionadosPorEndereco} />

          {/* Empregos */}
          {response.empregos && response.empregos.length > 0 && (
            <SectionCard title="Histórico de Empregos" icon={Briefcase} count={response.empregos.length}>
              <div className="space-y-2">
                {response.empregos.map((emp, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-2 border-t border-divider' : ''}`}>
                    <h4 className="font-medium text-sm">{emp.razao_social}</h4>
                    {emp.descricao_cbo && <p className="text-xs text-muted-foreground">{emp.descricao_cbo}</p>}
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-0.5 text-xs text-muted-foreground">
                      <span>Admissão: {formatDate(emp.data_admissao) || '—'}</span>
                      <span>Demissão: {formatDate(emp.data_demissao) || 'Atual'}</span>
                      {emp.salario && emp.salario !== 'R$ 0,00' && (
                        <span className="font-medium">{emp.salario}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Sociedades */}
          {response.sociedades && response.sociedades.length > 0 && (
            <SectionCard title="Sociedades" icon={Building2} count={response.sociedades.length}>
              <div className="space-y-2">
                {response.sociedades.map((soc, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-2 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-sm">{soc.razao_social}</h4>
                        <p className="text-xs text-muted-foreground">CNPJ: {soc.cnpj}</p>
                      </div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        soc.situacao_cadastral === 'ATIVA' 
                          ? 'bg-green-50 text-green-700' 
                          : 'bg-amber-50 text-amber-700'
                      }`}>
                        {soc.situacao_cadastral}
                      </span>
                    </div>
                    <div className="flex gap-4 mt-0.5 text-xs text-muted-foreground">
                      <span>{soc.qualificacao_socio_descricao}</span>
                      <span>Entrada: {soc.dt_entrada}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* MEI Detalhado */}
          {response.meiDetalhado && response.meiDetalhado.length > 0 && (
            <SectionCard title="MEI" icon={ShoppingBag} count={response.meiDetalhado.length}>
              <div className="space-y-2">
                {response.meiDetalhado.map((mei, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-2 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-sm">{mei.razaoSocial}</h4>
                        <p className="text-xs text-muted-foreground">CNPJ: {mei.cnpj}</p>
                        <p className="text-xs text-muted-foreground">{mei.descricaoCnaePrincipal}</p>
                      </div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        mei.situacaoCadastral === 'ATIVA' 
                          ? 'bg-green-50 text-green-700' 
                          : 'bg-red-50 text-red-700'
                      }`}>
                        {mei.situacaoCadastral}
                      </span>
                    </div>
                    {mei.descricaoMotivoSituacao && (
                      <p className="text-[10px] text-muted-foreground mt-0.5">{mei.descricaoMotivoSituacao}</p>
                    )}
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Dívida Ativa */}
          {response.dividaAtiva && response.dividaAtiva.length > 0 && (
            <SectionCard title="Dívida Ativa" icon={AlertTriangle} count={response.dividaAtiva.length}>
              <div className="space-y-2">
                {response.dividaAtiva.map((div, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-2 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{div.receita_principal}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{div.situacao_inscricao}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          Inscrição: {formatDate(div.data_inscricao)} • {div.indicador_ajuizado === 'NAO' ? 'Não Ajuizado' : 'Ajuizado'}
                        </p>
                      </div>
                      <span className="text-base font-bold text-red-600 ml-4">{formatCurrency(div.valor_consolidado)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Compras Online */}
          <OnlinePurchasesSection compras={response.comprasOnline} />

          {/* Propensões */}
          <PropensitiesSection propensoes={response.propensoes} />

          {/* Benefícios e Vacinas */}
          <div className="grid grid-cols-2 gap-3 print:gap-2">
            {response.beneficiosAuxilios && response.beneficiosAuxilios.length > 0 && (
              <SectionCard title="Benefícios/Auxílios" icon={Gift} count={response.beneficiosAuxilios.length}>
                {response.beneficiosAuxilios.map((b, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{b.tipo_beneficio}</p>
                      <p className="text-xs text-muted-foreground">{b.mes_inicio} - {b.mes_fim}</p>
                      <p className="text-[10px] text-muted-foreground">{b.municipio}/{b.uf}</p>
                    </div>
                    <span className="font-bold">{formatCurrency(b.valorTotalRecebido)}</span>
                  </div>
                ))}
              </SectionCard>
            )}
            {response.vacinas && response.vacinas.length > 0 && (
              <SectionCard title="Vacinas" icon={Syringe} count={response.vacinas.length}>
                {response.vacinas.map((v, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-1.5 mt-1.5 border-t border-divider' : ''}`}>
                    <p className="text-sm font-medium">{v.vacina_nome}</p>
                    <p className="text-xs text-muted-foreground">{v.vacina_dose} • {formatDate(v.vacina_dt_aplicacao)}</p>
                    <p className="text-[10px] text-muted-foreground">{v.estab_nome_fantasia}</p>
                  </div>
                ))}
              </SectionCard>
            )}
          </div>
        </div>

        <footer className="mt-6 pt-3 border-t border-divider text-center text-xs text-muted-foreground print:mt-4">
          <p>Documento gerado automaticamente • Informações confidenciais</p>
        </footer>
      </div>
    </div>
  );
};
