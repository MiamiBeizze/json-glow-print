import { 
  MapPin, Phone, Mail, Briefcase, Building2, Users, AlertTriangle, 
  Syringe, Gift, CreditCard, ShoppingCart, UserCheck
} from "lucide-react";
import { ConsultationHeader } from "./ConsultationHeader";
import { PersonalDataSection } from "./PersonalDataSection";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { Badge } from "./Badge";
import { PersonCard } from "./PersonCard";
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
    <div className="min-h-screen bg-background p-4 md:p-6 print:p-0 print:bg-white">
      <div className="max-w-[210mm] mx-auto">
        <ConsultationHeader 
          title="Consulta Cadastral"
          subtitle="Relatório completo"
          cadastral={response.cadastral}
          fotos={response.fotos}
        />

        <div className="space-y-4 print:space-y-3">
          <PersonalDataSection data={response.cadastral} />

          {/* Endereços */}
          {response.enderecos && response.enderecos.length > 0 && (
            <SectionCard title="Endereços" icon={MapPin} count={response.enderecos.length}>
              <div className="space-y-3">
                {response.enderecos.slice(0, 3).map((end, i) => (
                  <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <Badge variant={end.classificacao === 'A' || end.classificacao === 'A+' ? 'success' : 'neutral'} size="sm">
                      {end.classificacao || '—'}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {response.telefones && response.telefones.length > 0 && (
              <SectionCard title="Telefones" icon={Phone} count={response.telefones.length}>
                <div className="space-y-2">
                  {response.telefones.slice(0, 5).map((tel, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-divider last:border-0">
                      <span className="text-sm font-medium">{tel.telefone}</span>
                      <Badge variant={tel.classificacao?.startsWith('A') ? 'success' : 'neutral'} size="sm">
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
                      <p className="text-xs text-muted-foreground">{email.avaliacao}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
          </div>

          {/* Empregos */}
          {response.empregos && response.empregos.length > 0 && (
            <SectionCard title="Histórico de Empregos" icon={Briefcase} count={response.empregos.length}>
              <div className="space-y-3">
                {response.empregos.map((emp, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <h4 className="font-semibold text-sm">{emp.razao_social}</h4>
                    <p className="text-xs text-muted-foreground">{emp.descricao_cbo}</p>
                    <div className="flex gap-4 mt-1 text-xs">
                      <span>Admissão: {formatDate(emp.data_admissao) || '—'}</span>
                      <span>Demissão: {formatDate(emp.data_demissao) || 'Atual'}</span>
                      {emp.salario && <span className="font-medium text-success">{emp.salario}</span>}
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

          {/* Parentes */}
          {response.parentes && response.parentes.length > 0 && (
            <SectionCard title="Vínculos / Parentes" icon={Users} count={response.parentes.length}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {response.parentes.map((p, i) => (
                  <PersonCard 
                    key={i}
                    nome={p.nome}
                    cpf={p.cpfParente}
                    foto={p.foto}
                    idade={p.idade}
                    grau={p.grau}
                    renda={p.renda}
                    compact
                  />
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
                      <div>
                        <p className="text-sm font-medium">{div.receita_principal}</p>
                        <p className="text-xs text-muted-foreground">{div.situacao_inscricao}</p>
                      </div>
                      <span className="text-lg font-bold text-destructive">{formatCurrency(div.valor_consolidado)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Benefícios e Vacinas em grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {response.beneficiosAuxilios && response.beneficiosAuxilios.length > 0 && (
              <SectionCard title="Benefícios/Auxílios" icon={Gift} count={response.beneficiosAuxilios.length}>
                {response.beneficiosAuxilios.map((b, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{b.tipo_beneficio}</p>
                      <p className="text-xs text-muted-foreground">{b.mes_inicio} - {b.mes_fim}</p>
                    </div>
                    <span className="font-bold text-success">{formatCurrency(b.valorTotalRecebido)}</span>
                  </div>
                ))}
              </SectionCard>
            )}
            {response.vacinas && response.vacinas.length > 0 && (
              <SectionCard title="Vacinas" icon={Syringe} count={response.vacinas.length}>
                {response.vacinas.map((v, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium">{v.vacina_nome}</p>
                    <p className="text-xs text-muted-foreground">{v.vacina_dose} • {formatDate(v.vacina_dt_aplicacao)}</p>
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
