import { Building2 } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { EmpresaRelacionada } from "@/types/consultation";
import { Badge } from "@/components/ui/badge";

interface CompaniesSectionProps {
  empresas?: EmpresaRelacionada[];
}

export const CompaniesSection = ({ empresas }: CompaniesSectionProps) => {
  const isEmpty = !empresas || empresas.length === 0;

  const formatCNPJ = (cnpj?: string) => {
    if (!cnpj) return undefined;
    const cleaned = cnpj.replace(/\D/g, "");
    return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  };

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const getSituacaoVariant = (situacao?: string) => {
    if (!situacao) return "secondary";
    const lower = situacao.toLowerCase();
    if (lower.includes("ativa") || lower.includes("ativo")) return "default";
    if (lower.includes("baixada") || lower.includes("inativa")) return "destructive";
    return "secondary";
  };

  return (
    <SectionCard
      title="Empresas Relacionadas"
      icon={Building2}
      isEmpty={isEmpty}
      emptyMessage="Nenhuma empresa relacionada encontrada"
    >
      {empresas && (
        <div className="space-y-4">
          {empresas.map((empresa, index) => (
            <div
              key={index}
              className={`${index > 0 ? "pt-4 border-t border-divider" : ""}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-semibold text-foreground block">
                    {empresa.razaoSocial || empresa.nomeFantasia || "Empresa não identificada"}
                  </span>
                  {empresa.nomeFantasia && empresa.razaoSocial && (
                    <span className="text-sm text-muted-foreground">{empresa.nomeFantasia}</span>
                  )}
                </div>
                {empresa.situacao && (
                  <Badge variant={getSituacaoVariant(empresa.situacao)}>
                    {empresa.situacao}
                  </Badge>
                )}
              </div>
              <DataGrid columns={4}>
                <DataField label="CNPJ" value={formatCNPJ(empresa.cnpj)} />
                <DataField label="Cargo" value={empresa.cargo} />
                <DataField label="Participação" value={empresa.participacao} />
                <DataField label="Data Entrada" value={formatDate(empresa.dataEntrada)} />
                {empresa.dataSaida && (
                  <DataField label="Data Saída" value={formatDate(empresa.dataSaida)} />
                )}
              </DataGrid>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
};
