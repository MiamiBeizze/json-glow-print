import { Plane, Radio } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { Aeronave, Drone } from "@/types/consultation";

interface AircraftSectionProps {
  aeronaves?: Aeronave[];
  drones?: Drone[];
}

export const AircraftSection = ({ aeronaves, drones }: AircraftSectionProps) => {
  const hasAeronaves = aeronaves && aeronaves.length > 0;
  const hasDrones = drones && drones.length > 0;
  
  if (!hasAeronaves && !hasDrones) return null;

  const getSituacaoVariant = (situacao?: string): "success" | "danger" | "warning" | "info" | "neutral" => {
    const sitLower = situacao?.toLowerCase() || '';
    if (sitLower.includes('ativo') || sitLower.includes('regular') || sitLower.includes('normal')) {
      return 'success';
    }
    if (sitLower.includes('cancelado') || sitLower.includes('irregular')) {
      return 'danger';
    }
    if (sitLower.includes('suspenso') || sitLower.includes('pendente')) {
      return 'warning';
    }
    return 'neutral';
  };

  return (
    <SectionCard 
      title="Aeronaves e Drones" 
      icon={Plane}
      count={(aeronaves?.length || 0) + (drones?.length || 0)}
    >
      <div className="space-y-6">
        {/* Aeronaves */}
        {hasAeronaves && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Plane className="w-4 h-4" /> Aeronaves ({aeronaves.length})
            </h4>
            <div className="space-y-4">
              {aeronaves.map((aeronave, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Plane className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">{aeronave.modelo}</p>
                        <p className="text-sm text-muted-foreground">{aeronave.fabricante}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-sm font-bold bg-muted px-2 py-1 rounded">
                        {aeronave.matricula}
                      </span>
                      {aeronave.situacao && (
                        <div className="mt-2">
                          <Badge variant={getSituacaoVariant(aeronave.situacao)} size="sm">
                            {aeronave.situacao}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <DataGrid columns={4}>
                    <DataField label="Ano Fabricação" value={aeronave.anoFabricacao} size="sm" />
                    <DataField label="Categoria" value={aeronave.categoria} size="sm" />
                    <DataField label="Proprietário" value={aeronave.proprietario} size="sm" />
                    <DataField label="Operador" value={aeronave.operador} size="sm" />
                  </DataGrid>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Drones */}
        {hasDrones && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Radio className="w-4 h-4" /> Drones/RPAS ({drones.length})
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {drones.map((drone, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <Radio className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{drone.modelo}</p>
                        <p className="text-xs text-muted-foreground">{drone.fabricante}</p>
                      </div>
                    </div>
                    {drone.situacao && (
                      <Badge variant={getSituacaoVariant(drone.situacao)} size="sm">
                        {drone.situacao}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    {drone.numero && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Registro:</span>
                        <span className="font-mono font-medium">{drone.numero}</span>
                      </div>
                    )}
                    {drone.numeroSerie && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Nº Série:</span>
                        <span className="font-mono text-xs">{drone.numeroSerie}</span>
                      </div>
                    )}
                    {drone.peso && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Peso:</span>
                        <span>{drone.peso}</span>
                      </div>
                    )}
                    {drone.categoria && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Categoria:</span>
                        <span>{drone.categoria}</span>
                      </div>
                    )}
                    {drone.dataRegistro && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Registro:</span>
                        <span>{drone.dataRegistro}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionCard>
  );
};
