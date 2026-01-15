import { 
  MapPin, Phone, Mail, Briefcase, Building2, Users, AlertTriangle, 
  Syringe, Gift, ShoppingBag
} from "lucide-react";
import { ConsultationHeader } from "./ConsultationHeader";
import { PersonalDataSection } from "./PersonalDataSection";
import { SectionCard } from "./SectionCard";
import { DataGrid } from "./DataGrid";
import { Badge } from "./Badge";
import { FamilyTree } from "./FamilyTree";
import { LeakedCredentialsSection } from "./LeakedCredentialsSection";
import { RelatedByAddressSection } from "./RelatedByAddressSection";
import { OnlinePurchasesSection } from "./OnlinePurchasesSection";
import { PropensitiesSection } from "./PropensitiesSection";
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

        <div className="space-y-4 print:space-y-3">
          <PersonalDataSection data={response.cadastral} />

          {/* Credenciais Vazadas */}
          <LeakedCredentialsSection credenciais={response.credenciaisVazadas} />

          {/* Endereços */}
          {response.enderecos && response.enderecos.length > 0 && (
            <SectionCard title="Endereços" icon={MapPin} count={response.enderecos.length}>
              <div className="space-y-3">
                {response.enderecos.slice(0, 4).map((end, i) => (
                  <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <Badge variant={end.classificacao === 'A' || end.classificacao === 'A+' ? 'success' : end.classificacao === 'B' ? 'info' : 'neutral'} size="sm">
                      {end.classificacao || '—'}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {end.endereco || end.logradouro}, {end.numero}{end.complemento ? ` - ${end.complemento}` : ''}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {end.bairro} • {end.cidade}/{end.uf} • CEP: {end.cep}
                      </p>
                      {end.fonte && <p className="text-[10px] text-muted-foreground mt-0.5">Fonte: {end.fonte}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Telefones e Emails */}
          <div className="grid grid-cols-2 gap-4">
            {response.telefones && response.telefones.length > 0 && (
              <SectionCard title="Telefones" icon={Phone} count={response.telefones.length}>
                <div className="space-y-2">
                  {response.telefones.slice(0, 6).map((tel, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-divider last:border-0">
                      <div>
                        <span className="text-sm font-medium">{tel.telefone}</span>
                        <span className="text-[10px] text-muted-foreground ml-2">{tel.data}</span>
                      </div>
                      <Badge variant={tel.classificacao?.startsWith('A') ? 'success' : tel.classificacao?.startsWith('B') ? 'info' : 'neutral'} size="sm">
                        {tel.classificacao}
                      </Badge>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
            {response.emails && response.emails.length > 0 && (
              <SectionCard title="E-mails" icon={Mail} count={response.emails.length}>
                <div className="space-y-2">
                  {response.emails.map((email, i) => (
                    <div key={i} className="py-1.5 border-b border-divider last:border-0">
                      <p className="text-sm font-medium break-all">{email.email}</p>
                      <Badge variant={email.avaliacao?.includes('OTIMO') ? 'success' : 'info'} size="sm">
                        {email.avaliacao}
                      </Badge>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
          </div>

          {/* Árvore Genealógica / Parentes */}
          {response.parentes && response.parentes.length > 0 && (
            <SectionCard title="Árvore Genealógica / Vínculos" icon={Users} count={response.parentes.length}>
              <FamilyTree 
                parentes={response.parentes}
                genitores={response.genitores}
                maeName={response.cadastral?.mae?.nome}
                paiName={response.cadastral?.pai?.nome}
              />
            </SectionCard>
          )}

          {/* Relacionados por Endereço */}
          <RelatedByAddressSection relacionados={response.relacionadosPorEndereco} />

          {/* Empregos */}
          {response.empregos && response.empregos.length > 0 && (
            <SectionCard title="Histórico de Empregos" icon={Briefcase} count={response.empregos.length}>
              <div className="space-y-3">
                {response.empregos.map((emp, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <h4 className="font-semibold text-sm">{emp.razao_social}</h4>
                    <p className="text-xs text-muted-foreground">{emp.descricao_cbo}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs">
                      <span>Admissão: {formatDate(emp.data_admissao) || '—'}</span>
                      <span>Demissão: {formatDate(emp.data_demissao) || 'Atual'}</span>
                      {emp.salario && emp.salario !== 'R$ 0,00' && (
                        <span className="font-medium text-success">{emp.salario}</span>
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
              <div className="space-y-3">
                {response.sociedades.map((soc, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-sm">{soc.razao_social}</h4>
                        <p className="text-xs text-muted-foreground">CNPJ: {soc.cnpj}</p>
                      </div>
                      <Badge variant={soc.situacao_cadastral === 'ATIVA' ? 'success' : 'warning'} size="sm">
                        {soc.situacao_cadastral}
                      </Badge>
                    </div>
                    <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
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
              <div className="space-y-3">
                {response.meiDetalhado.map((mei, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-sm">{mei.razaoSocial}</h4>
                        <p className="text-xs text-muted-foreground">CNPJ: {mei.cnpj}</p>
                        <p className="text-xs text-muted-foreground">{mei.descricaoCnaePrincipal}</p>
                      </div>
                      <Badge variant={mei.situacaoCadastral === 'ATIVA' ? 'success' : 'danger'} size="sm">
                        {mei.situacaoCadastral}
                      </Badge>
                    </div>
                    {mei.descricaoMotivoSituacao && (
                      <p className="text-[10px] text-muted-foreground mt-1">{mei.descricaoMotivoSituacao}</p>
                    )}
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Dívida Ativa */}
          {response.dividaAtiva && response.dividaAtiva.length > 0 && (
            <SectionCard title="Dívida Ativa" icon={AlertTriangle} count={response.dividaAtiva.length} variant="danger">
              <div className="space-y-3">
                {response.dividaAtiva.map((div, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{div.receita_principal}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{div.situacao_inscricao}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">
                          Inscrição: {formatDate(div.data_inscricao)} • {div.indicador_ajuizado === 'NAO' ? 'Não Ajuizado' : 'Ajuizado'}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-destructive ml-4">{formatCurrency(div.valor_consolidado)}</span>
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
          <div className="grid grid-cols-2 gap-4">
            {response.beneficiosAuxilios && response.beneficiosAuxilios.length > 0 && (
              <SectionCard title="Benefícios/Auxílios" icon={Gift} count={response.beneficiosAuxilios.length}>
                {response.beneficiosAuxilios.map((b, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{b.tipo_beneficio}</p>
                      <p className="text-xs text-muted-foreground">{b.mes_inicio} - {b.mes_fim}</p>
                      <p className="text-[10px] text-muted-foreground">{b.municipio}/{b.uf}</p>
                    </div>
                    <span className="font-bold text-success">{formatCurrency(b.valorTotalRecebido)}</span>
                  </div>
                ))}
              </SectionCard>
            )}
            {response.vacinas && response.vacinas.length > 0 && (
              <SectionCard title="Vacinas" icon={Syringe} count={response.vacinas.length}>
                {response.vacinas.map((v, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-2 mt-2 border-t border-divider' : ''}`}>
                    <p className="text-sm font-medium">{v.vacina_nome}</p>
                    <p className="text-xs text-muted-foreground">{v.vacina_dose} • {formatDate(v.vacina_dt_aplicacao)}</p>
                    <p className="text-[10px] text-muted-foreground">{v.estab_nome_fantasia}</p>
                  </div>
                ))}
              </SectionCard>
            )}
          </div>
        </div>

        <footer className="mt-8 pt-4 border-t border-divider text-center text-sm text-muted-foreground print:mt-4">
          <p>Documento gerado automaticamente • Informações confidenciais</p>
        </footer>
      </div>
    </div>
  );
};
