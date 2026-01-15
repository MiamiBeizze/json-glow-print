import { User, CheckCircle, XCircle } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { DadosPessoais } from "@/types/consultation";

interface PersonalDataSectionProps {
  data?: DadosPessoais;
}

export const PersonalDataSection = ({ data }: PersonalDataSectionProps) => {
  const isEmpty = !data || Object.keys(data).length === 0;

  const formatCPF = (cpf?: string) => {
    if (!cpf) return undefined;
    const cleaned = cpf.replace(/\D/g, "");
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const getSituacaoColor = (situacao?: string) => {
    if (!situacao) return "text-empty-state";
    const lower = situacao.toLowerCase();
    if (lower.includes("regular")) return "text-success";
    return "text-destructive";
  };

  return (
    <SectionCard
      title="Dados Pessoais"
      icon={User}
      isEmpty={isEmpty}
      emptyMessage="Dados pessoais não disponíveis"
    >
      {data && (
        <>
          <div className="mb-4 pb-4 border-b border-divider">
            <h3 className="text-lg font-bold text-foreground">{data.nome || "Nome não informado"}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium text-muted-foreground">
                CPF: {formatCPF(data.cpf) || "Não informado"}
              </span>
              {data.situacaoCadastral && (
                <span className={`flex items-center gap-1 text-xs font-medium ${getSituacaoColor(data.situacaoCadastral)}`}>
                  {data.situacaoCadastral.toLowerCase().includes("regular") ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <XCircle className="w-3 h-3" />
                  )}
                  {data.situacaoCadastral}
                </span>
              )}
            </div>
          </div>
          <DataGrid columns={3}>
            <DataField label="Data de Nascimento" value={formatDate(data.dataNascimento)} />
            <DataField label="Idade" value={data.idade ? `${data.idade} anos` : undefined} />
            <DataField label="Sexo" value={data.sexo} />
            <DataField label="Nome da Mãe" value={data.nomeMae} />
            <DataField label="Nome do Pai" value={data.nomePai} />
            <DataField label="Data de Inscrição" value={formatDate(data.dataInscricao)} />
          </DataGrid>
        </>
      )}
    </SectionCard>
  );
};
