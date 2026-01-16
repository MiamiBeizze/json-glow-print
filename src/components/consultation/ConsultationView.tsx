import { 
  MapPin, Phone, Mail, Briefcase, Building2, AlertTriangle, 
  Syringe, Gift, ShoppingBag, Users
} from "lucide-react";
import { ConsultationHeader } from "./ConsultationHeader";
import { PersonalDataSection } from "./PersonalDataSection";
import { SectionCard } from "./SectionCard";

import { LeakedCredentialsSection } from "./LeakedCredentialsSection";
import { RelatedByAddressSection } from "./RelatedByAddressSection";
import { OnlinePurchasesSection } from "./OnlinePurchasesSection";
import { PropensitiesSection } from "./PropensitiesSection";
import { VehiclesSection } from "./VehiclesSection";
import { PlansSection } from "./PlansSection";
import { ProfessionsSection } from "./ProfessionsSection";
import { RAISSection } from "./RAISSection";
import { EducationSection } from "./EducationSection";
import { ParentsSection } from "./ParentsSection";
import { RGsSection } from "./RGsSection";
import { FamilyTree } from "./FamilyTree";
import { PixKeysSection } from "./PixKeysSection";
import { BankAccountsSection } from "./BankAccountsSection";
import { TravelHistorySection } from "./TravelHistorySection";
import { DocumentsGallerySection } from "./DocumentsGallerySection";
import { ProcessesSection } from "./ProcessesSection";
import { CNHSection } from "./CNHSection";
import { AircraftSection } from "./AircraftSection";
import { EducationLinkedInSection } from "./EducationLinkedInSection";
import { FinancialDataSection } from "./FinancialDataSection";
import { HealthPlansSection } from "./HealthPlansSection";
import { PropertyEnergySection } from "./PropertyEnergySection";
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

  // Combine fotos and extraFotos
  const allFotos = [
    ...(response.fotos || []),
    ...(response.extraFotos || [])
  ];

  return (
    <div className="min-h-screen bg-background p-6 print:p-0 print:bg-white">
      <div className="w-[210mm] mx-auto consultation-content">
        <ConsultationHeader 
          title="Consulta Cadastral"
          subtitle="Relatório completo"
          cadastral={response.cadastral}
          fotos={allFotos}
        />

        <div className="space-y-4 print:space-y-3">
          {/* Dados Pessoais */}
          <PersonalDataSection data={response.cadastral} />

          {/* Credenciais Vazadas */}
          <LeakedCredentialsSection credenciais={response.credenciaisVazadas} />

          {/* Níveis de Escolaridade (se tiver mais de um) */}
          {response.escolaridade && response.escolaridade.length > 1 && (
            <EducationSection escolaridade={response.escolaridade} />
          )}

          {/* Profissões */}
          <ProfessionsSection profissoes={response.profissoes} />

          {/* RGs Detalhados */}
          <RGsSection rgs={response.rgs} />

          {/* Parentes/Família */}
          {response.parentes && response.parentes.length > 0 && (
            <SectionCard title="Árvore Familiar" icon={Users} count={response.parentes.length}>
              <FamilyTree 
                parentes={response.parentes}
                genitores={response.genitores}
                maeName={response.cadastral?.mae?.nome}
                paiName={response.cadastral?.pai?.nome}
              />
            </SectionCard>
          )}

          {/* Endereços */}
          {response.enderecos && response.enderecos.length > 0 && (
            <SectionCard title="Endereços" icon={MapPin} count={response.enderecos.length}>
              <div className="space-y-3">
                {response.enderecos.map((end, i) => (
                  <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <span className="text-xs font-semibold bg-muted px-2 py-1 rounded mt-0.5">
                      {end.classificacao || '—'}
                    </span>
                    <div className="flex-1">
                      <p className="text-base text-foreground font-medium print:text-sm">
                        {end.endereco || end.logradouro}, {end.numero}{end.complemento ? ` - ${end.complemento}` : ''}
                      </p>
                      <p className="text-sm text-muted-foreground print:text-xs">
                        {end.bairro} • {end.cidade}/{end.uf} • CEP: {end.cep}
                      </p>
                      {end.dataInformacao && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Atualizado: {formatDate(end.dataInformacao)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Telefones e Emails */}
          <div className="grid grid-cols-2 gap-4 print:gap-3">
            {response.telefones && response.telefones.length > 0 && (
              <SectionCard title="Telefones" icon={Phone} count={response.telefones.length}>
                <div className="space-y-2">
                  {response.telefones.slice(0, 12).map((tel, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-divider last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-base font-medium print:text-sm">{tel.telefone}</span>
                        {tel.data && tel.data !== 'Data Inválida' && (
                          <span className="text-xs text-muted-foreground">{tel.data}</span>
                        )}
                      </div>
                      {tel.classificacao && (
                        <span className="text-xs font-semibold bg-muted px-2 py-0.5 rounded">
                          {tel.classificacao}
                        </span>
                      )}
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
                      <p className="text-sm font-medium break-all print:text-xs">{email.email}</p>
                      <span className="text-xs text-muted-foreground">{email.avaliacao}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
          </div>

          {/* CNH */}
          <CNHSection cnh={response.cnh} />

          {/* Veículos */}
          <VehiclesSection placas={response.placas || response.veiculos} />

          {/* Aeronaves e Drones */}
          <AircraftSection aeronaves={response.aeronaves} drones={response.drones} />

          {/* Planos e Serviços */}
          <PlansSection planos={response.planos} />

          {/* Relacionados por Endereço */}
          <RelatedByAddressSection relacionados={response.relacionadosPorEndereco} />

          {/* Empregos */}
          {response.empregos && response.empregos.length > 0 && (
            <SectionCard title="Histórico de Empregos" icon={Briefcase} count={response.empregos.length}>
              <div className="space-y-3">
                {response.empregos.map((emp, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-base print:text-sm">{emp.razao_social}</h4>
                        {emp.nome_fantasia && (
                          <p className="text-sm text-muted-foreground">{emp.nome_fantasia}</p>
                        )}
                        {emp.descricao_cbo && (
                          <p className="text-sm text-primary font-medium">{emp.descricao_cbo}</p>
                        )}
                      </div>
                      {emp.salario && emp.salario !== 'R$ 0,00' && (
                        <span className="font-bold text-success">{emp.salario}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground print:text-xs">
                      <span>Admissão: {formatDate(emp.data_admissao) || '—'}</span>
                      <span>Demissão: {formatDate(emp.data_demissao) || 'Atual'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* RAIS */}
          <RAISSection rais={response.rais} />

          {/* Sociedades */}
          {response.sociedades && response.sociedades.length > 0 && (
            <SectionCard title="Sociedades" icon={Building2} count={response.sociedades.length}>
              <div className="space-y-3">
                {response.sociedades.map((soc, i) => (
                  <div key={i} className={`${i > 0 ? 'pt-3 border-t border-divider' : ''}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-base print:text-sm">{soc.razao_social}</h4>
                        <p className="text-sm text-muted-foreground">CNPJ: {soc.cnpj}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        soc.situacao_cadastral === 'ATIVA' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {soc.situacao_cadastral}
                      </span>
                    </div>
                    <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
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
                        <h4 className="font-semibold text-base print:text-sm">{mei.razaoSocial}</h4>
                        <p className="text-sm text-muted-foreground">CNPJ: {mei.cnpj}</p>
                        <p className="text-sm text-muted-foreground">{mei.descricaoCnaePrincipal}</p>
                        {mei.dataAbertura && (
                          <p className="text-xs text-muted-foreground mt-1">Abertura: {mei.dataAbertura}</p>
                        )}
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        mei.situacaoCadastral === 'ATIVA' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {mei.situacaoCadastral}
                      </span>
                    </div>
                    {mei.descricaoMotivoSituacao && (
                      <p className="text-xs text-muted-foreground mt-1">{mei.descricaoMotivoSituacao}</p>
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
                        <p className="text-base font-semibold print:text-sm">{div.receita_principal}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">{div.situacao_inscricao}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Inscrição: {formatDate(div.data_inscricao)} • {div.indicador_ajuizado === 'NAO' ? 'Não Ajuizado' : 'Ajuizado'}
                        </p>
                      </div>
                      <span className="text-xl font-bold text-red-600 ml-4 print:text-lg">{formatCurrency(div.valor_consolidado)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Processos Judiciais */}
          <ProcessesSection 
            processos={response.processos}
            vinculosPorProcessos={response.vinculosPorProcessos}
          />

          {/* Compras Online */}
          <OnlinePurchasesSection compras={response.comprasOnline} />

          {/* Propensões */}
          <PropensitiesSection propensoes={response.propensoes} />

          {/* Benefícios e Vacinas */}
          <div className="grid grid-cols-2 gap-4 print:gap-3">
            {response.beneficiosAuxilios && response.beneficiosAuxilios.length > 0 && (
              <SectionCard title="Benefícios/Auxílios" icon={Gift} count={response.beneficiosAuxilios.length}>
                <div className="space-y-3">
                  {response.beneficiosAuxilios.map((b, i) => (
                    <div key={i} className={`flex justify-between items-center ${i > 0 ? 'pt-2 border-t border-divider' : ''}`}>
                      <div>
                        <p className="text-base font-semibold print:text-sm">{b.tipo_beneficio}</p>
                        <p className="text-sm text-muted-foreground">{b.mes_inicio} - {b.mes_fim}</p>
                        <p className="text-xs text-muted-foreground">{b.municipio}/{b.uf}</p>
                        {b.enquadramento && (
                          <span className="text-xs bg-muted px-1.5 py-0.5 rounded">{b.enquadramento}</span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-green-600">{formatCurrency(b.valorTotalRecebido)}</span>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
            {response.vacinas && response.vacinas.length > 0 && (
              <SectionCard title="Vacinas" icon={Syringe} count={response.vacinas.length}>
                <div className="space-y-2">
                  {response.vacinas.map((v, i) => (
                    <div key={i} className={`${i > 0 ? 'pt-2 border-t border-divider' : ''}`}>
                      <p className="text-sm font-semibold print:text-xs">{v.vacina_nome}</p>
                      <p className="text-xs text-muted-foreground">
                        {v.vacina_dose} • {formatDate(v.vacina_dt_aplicacao)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {v.vacina_fabricante} • Lote: {v.vacina_lote}
                      </p>
                      <p className="text-xs text-muted-foreground">{v.estab_nome_fantasia}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
          </div>

          {/* Educação e LinkedIn */}
          <EducationLinkedInSection 
            linkedin={response.linkedin}
            universitarios={response.universitarios}
            sisu={response.sisu}
            prouni={response.prouni}
          />

          {/* Dados Financeiros (IRPF, PPE, Empréstimos) */}
          <FinancialDataSection 
            irpf={response.irpf}
            ppe={response.ppe}
            emprestimos={response.emprestimos}
          />

          {/* Planos de Saúde e CCF */}
          <HealthPlansSection 
            planosSaude={response.planosSaude}
            ccf={response.ccf}
          />

          {/* Imóveis SP e Energia */}
          <PropertyEnergySection 
            imoveisSp={response.imoveisSp}
            energias={response.energias}
          />

          {/* Chaves PIX */}
          <PixKeysSection chavesPix={response.chavesPix} />

          {/* Contas Bancárias */}
          <BankAccountsSection contasBancos={response.contasBancos} />
          <TravelHistorySection viagens={response.viagens} />

          {/* Fotos e Documentos */}
          <DocumentsGallerySection 
            fotos={response.fotos}
            extraFotos={response.extraFotos}
            docsBase64={response.docsBase64}
          />
        </div>

        <footer className="mt-8 pt-4 border-t border-divider text-center text-sm text-muted-foreground print:mt-4">
          <p>Documento gerado automaticamente • Informações confidenciais</p>
          {data.DATE && (
            <p className="text-xs mt-1">
              Data da consulta: {formatDate(data.DATE)} • Serviço: {data.SERVICE}
            </p>
          )}
        </footer>
      </div>
    </div>
  );
};
