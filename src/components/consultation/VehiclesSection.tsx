import { Car } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { Veiculo } from "@/types/consultation";

interface VehiclesSectionProps {
  placas?: Veiculo[];
}

export const VehiclesSection = ({ placas }: VehiclesSectionProps) => {
  const isEmpty = !placas || placas.length === 0;

  return (
    <SectionCard
      title="Veículos"
      icon={Car}
      isEmpty={isEmpty}
      emptyMessage="Nenhum veículo encontrado"
    >
      {placas && (
        <div className="space-y-5">
          {placas.map((veiculo, index) => (
            <div
              key={index}
              className={`${index > 0 ? "pt-5 border-t border-divider" : ""}`}
            >
              <div className="flex items-start gap-5">
                {/* Fotos do veículo */}
                {veiculo.fotosCarro && veiculo.fotosCarro.length > 0 && (
                  <div className="flex-shrink-0 flex flex-wrap gap-2 max-w-[300px]">
                    {veiculo.fotosCarro.map((foto, fotoIndex) => (
                      <img
                        key={fotoIndex}
                        src={foto}
                        alt={`Foto ${fotoIndex + 1} do veículo ${veiculo.placa}`}
                        className="w-20 h-14 object-cover rounded-lg border border-border shadow-sm print:w-16 print:h-12"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-bold text-lg text-foreground print:text-base">
                        {veiculo.modelo}
                      </span>
                      {veiculo.placa && (
                        <span className="ml-3 text-sm font-mono bg-muted px-2.5 py-1 rounded font-semibold">
                          {veiculo.placa}
                        </span>
                      )}
                    </div>
                  </div>
                  <DataGrid columns={4}>
                    <DataField label="Renavam" value={veiculo.renavam?.toString()} />
                    <DataField label="Chassi" value={veiculo.chassi} />
                    <DataField 
                      label="Ano Fab./Mod." 
                      value={veiculo.anoFab && veiculo.anoModelo ? `${veiculo.anoFab}/${veiculo.anoModelo}` : undefined} 
                    />
                    <DataField label="Combustível" value={veiculo.combustivel} />
                  </DataGrid>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
};
