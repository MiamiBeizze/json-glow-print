import { FileText } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { RAIS } from "@/types/consultation";

interface RAISSectionProps {
  rais?: RAIS[];
}

export const RAISSection = ({ rais }: RAISSectionProps) => {
  if (!rais || rais.length === 0) return null;

  const formatDate = (date?: string | null) => {
    if (!date) return undefined;
    try {
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const formatCNPJ = (cnpj?: number) => {
    if (!cnpj) return undefined;
    const str = cnpj.toString().padStart(14, '0');
    return str.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  };

  return (
    <SectionCard title="Histórico RAIS" icon={FileText} count={rais.length}>
      <div className="space-y-4">
        {rais.map((r, i) => (
          <div key={i} className={`${i > 0 ? 'pt-4 border-t border-divider' : ''}`}>
            <h4 className="font-semibold text-base mb-2">
              {r.razao_social || r.nome_fantasia}
            </h4>
            <DataGrid columns={4}>
              <DataField label="CNPJ" value={formatCNPJ(r.cnpj)} size="sm" />
              <DataField label="Ano Base" value={r.ano_base?.toString()} size="sm" />
              <DataField label="Admissão" value={formatDate(r.admissao)} size="sm" />
              <DataField label="Demissão" value={formatDate(r.demissao_tratada)} size="sm" />
            </DataGrid>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
