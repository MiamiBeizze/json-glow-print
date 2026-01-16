import { CreditCard } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { RGDetalhado } from "@/types/consultation";

interface RGsSectionProps {
  rgs?: RGDetalhado[];
}

export const RGsSection = ({ rgs }: RGsSectionProps) => {
  if (!rgs || rgs.length === 0) return null;

  const formatDate = (timestamp?: string) => {
    if (!timestamp) return undefined;
    try {
      const num = parseInt(timestamp);
      if (!isNaN(num)) {
        return new Date(num).toLocaleDateString("pt-BR");
      }
      return timestamp;
    } catch {
      return timestamp;
    }
  };

  return (
    <SectionCard title="RGs Detalhados" icon={CreditCard} count={rgs.length}>
      <div className="space-y-4">
        {rgs.map((rg, i) => (
          <div key={i} className={`${i > 0 ? 'pt-4 border-t border-divider' : ''}`}>
            <DataGrid columns={4}>
              <DataField label="Número RG" value={rg.rg} highlight size="sm" />
              <DataField label="Órgão Emissor" value={rg.orgaorg} size="sm" />
              <DataField label="UF" value={rg.ufrg} size="sm" />
              <DataField label="Data Emissão" value={formatDate(rg.emissaorg)} size="sm" />
            </DataGrid>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
