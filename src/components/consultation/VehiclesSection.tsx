import { Car } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { Veiculo } from "@/types/consultation";
import { Badge } from "@/components/ui/badge";

interface VehiclesSectionProps {
  veiculos?: Veiculo[];
}

export const VehiclesSection = ({ veiculos }: VehiclesSectionProps) => {
  const isEmpty = !veiculos || veiculos.length === 0;

  const getSituacaoVariant = (situacao?: string) => {
    if (!situacao) return "secondary";
    const lower = situacao.toLowerCase();
    if (lower.includes("regular") || lower.includes("ativo")) return "default";
    if (lower.includes("baixado") || lower.includes("inativo")) return "destructive";
    return "secondary";
  };

  return (
    <SectionCard
      title="Veículos"
      icon={Car}
      isEmpty={isEmpty}
      emptyMessage="Nenhum veículo encontrado"
    >
      {veiculos && (
        <div className="space-y-4">
          {veiculos.map((veiculo, index) => (
            <div
              key={index}
              className={`${index > 0 ? "pt-4 border-t border-divider" : ""}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-semibold text-foreground">
                    {veiculo.marca} {veiculo.modelo}
                  </span>
                  {veiculo.placa && (
                    <span className="ml-2 text-sm font-mono bg-muted px-2 py-0.5 rounded">
                      {veiculo.placa}
                    </span>
                  )}
                </div>
                {veiculo.situacao && (
                  <Badge variant={getSituacaoVariant(veiculo.situacao)}>
                    {veiculo.situacao}
                  </Badge>
                )}
              </div>
              <DataGrid columns={4}>
                <DataField label="Renavam" value={veiculo.renavam} />
                <DataField label="Chassi" value={veiculo.chassi} />
                <DataField label="Ano Fab./Mod." value={veiculo.anoFabricacao && veiculo.anoModelo ? `${veiculo.anoFabricacao}/${veiculo.anoModelo}` : undefined} />
                <DataField label="Cor" value={veiculo.cor} />
                <DataField label="Combustível" value={veiculo.combustivel} />
              </DataGrid>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
};
