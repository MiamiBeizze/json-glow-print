import { Scale } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { Processo } from "@/types/consultation";
import { Badge } from "@/components/ui/badge";

interface ProcessesSectionProps {
  processos?: Processo[];
}

export const ProcessesSection = ({ processos }: ProcessesSectionProps) => {
  const isEmpty = !processos || processos.length === 0;

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const getPoloVariant = (polo?: string) => {
    if (!polo) return "secondary";
    const lower = polo.toLowerCase();
    if (lower.includes("ativo") || lower.includes("autor")) return "default";
    if (lower.includes("passivo") || lower.includes("réu")) return "destructive";
    return "secondary";
  };

  return (
    <SectionCard
      title="Processos"
      icon={Scale}
      isEmpty={isEmpty}
      emptyMessage="Nenhum processo encontrado"
    >
      {processos && (
        <div className="space-y-4">
          {processos.map((processo, index) => (
            <div
              key={index}
              className={`${index > 0 ? "pt-4 border-t border-divider" : ""}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">
                    {processo.numero || "Número não informado"}
                  </span>
                  {processo.tribunal && (
                    <span className="ml-2 text-sm text-muted-foreground">{processo.tribunal}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  {processo.polo && (
                    <Badge variant={getPoloVariant(processo.polo)}>
                      {processo.polo}
                    </Badge>
                  )}
                  {processo.situacao && (
                    <Badge variant="outline">{processo.situacao}</Badge>
                  )}
                </div>
              </div>
              <DataGrid columns={3}>
                <DataField label="Vara" value={processo.vara} />
                <DataField label="Classe" value={processo.classe} />
                <DataField label="Assunto" value={processo.assunto} />
                <DataField label="Data Distribuição" value={formatDate(processo.dataDistribuicao)} />
              </DataGrid>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
};
