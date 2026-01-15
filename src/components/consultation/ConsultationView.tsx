import { 
  Shield, 
  Heart, 
  Zap, 
  Plane,
  Link2,
  CreditCard
} from "lucide-react";
import { ConsultationHeader } from "./ConsultationHeader";
import { PersonalDataSection } from "./PersonalDataSection";
import { ContactsSection } from "./ContactsSection";
import { VehiclesSection } from "./VehiclesSection";
import { CompaniesSection } from "./CompaniesSection";
import { ProcessesSection } from "./ProcessesSection";
import { GenericListSection } from "./GenericListSection";
import { ConsultaResult, Vazamento, PlanoSaude, Energia, Aeronave, VinculoProcesso, CIN } from "@/types/consultation";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";

interface ConsultationViewProps {
  data: ConsultaResult;
}

export const ConsultationView = ({ data }: ConsultationViewProps) => {
  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const hasCIN = data.cin && Object.keys(data.cin).length > 0;

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 print:p-0 print:bg-white">
      <div className="max-w-[210mm] mx-auto">
        <ConsultationHeader 
          title="Consulta Cadastral"
          subtitle="Relatório completo de informações cadastrais"
        />

        <div className="space-y-4 print:space-y-3">
          {/* Dados Pessoais */}
          <PersonalDataSection data={data.dadosPessoais} />

          {/* CIN */}
          {hasCIN && (
            <SectionCard title="Carteira de Identidade Nacional (CIN)" icon={CreditCard}>
              <DataGrid columns={3}>
                <DataField label="Número" value={(data.cin as CIN).numero} />
                <DataField label="Data de Emissão" value={formatDate((data.cin as CIN).dataEmissao)} />
                <DataField label="Órgão Emissor" value={(data.cin as CIN).orgaoEmissor} />
              </DataGrid>
            </SectionCard>
          )}

          {/* Contatos */}
          <ContactsSection contatos={data.contatos} />

          {/* Veículos */}
          <VehiclesSection veiculos={data.veiculos} />

          {/* Empresas Relacionadas */}
          <CompaniesSection empresas={data.empresasRelacionadas} />

          {/* Processos */}
          <ProcessesSection processos={data.processos} />

          {/* Vínculos por Processos */}
          <GenericListSection<VinculoProcesso>
            title="Vínculos por Processos"
            icon={Link2}
            items={data.vinculosPorProcessos}
            emptyMessage="Nenhum vínculo por processo encontrado"
            renderItem={(item) => ({
              fields: [
                { label: "Nome", value: item.nome },
                { label: "Documento", value: item.documento },
                { label: "Tipo", value: item.tipo },
                { label: "Polo", value: item.polo },
              ],
            })}
          />

          {/* Planos de Saúde */}
          <GenericListSection<PlanoSaude>
            title="Planos de Saúde"
            icon={Heart}
            items={data.planosSaude}
            emptyMessage="Nenhum plano de saúde encontrado"
            renderItem={(item) => ({
              title: item.operadora,
              fields: [
                { label: "Plano", value: item.plano },
                { label: "Nº Carteira", value: item.numeroCarteira },
                { label: "Data Adesão", value: formatDate(item.dataAdesao) },
                { label: "Situação", value: item.situacao },
              ],
            })}
          />

          {/* Energia */}
          <GenericListSection<Energia>
            title="Energia"
            icon={Zap}
            items={data.energias}
            emptyMessage="Nenhum registro de energia encontrado"
            renderItem={(item) => ({
              title: item.fornecedor,
              fields: [
                { label: "Nº Instalação", value: item.numeroInstalacao },
                { label: "Endereço", value: item.endereco },
                { label: "Situação", value: item.situacao },
              ],
            })}
          />

          {/* Aeronaves */}
          <GenericListSection<Aeronave>
            title="Aeronaves"
            icon={Plane}
            items={data.aeronaves}
            emptyMessage="Nenhuma aeronave encontrada"
            renderItem={(item) => ({
              title: `${item.fabricante || ""} ${item.modelo || ""}`.trim() || undefined,
              fields: [
                { label: "Matrícula", value: item.matricula },
                { label: "Fabricante", value: item.fabricante },
                { label: "Modelo", value: item.modelo },
                { label: "Ano Fabricação", value: item.anoFabricacao },
                { label: "Situação", value: item.situacao },
              ],
            })}
          />

          {/* Vazamentos */}
          <GenericListSection<Vazamento>
            title="Vazamentos de Dados"
            icon={Shield}
            items={data.vazamentos}
            emptyMessage="Nenhum vazamento de dados registrado"
            renderItem={(item) => ({
              title: item.fonte,
              fields: [
                { label: "Fonte", value: item.fonte },
                { label: "Data", value: formatDate(item.data) },
                { label: "Tipo", value: item.tipo },
                { label: "Dados Expostos", value: item.dados?.join(", ") },
              ],
            })}
          />
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-divider text-center text-sm text-muted-foreground print:mt-4">
          <p>Documento gerado automaticamente para fins de consulta cadastral.</p>
          <p className="mt-1">As informações aqui contidas são confidenciais.</p>
        </footer>
      </div>
    </div>
  );
};
