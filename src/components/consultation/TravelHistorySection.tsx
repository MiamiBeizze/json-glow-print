import { Plane, MapPin, Calendar } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { Viagem } from "@/types/consultation";

interface TravelHistorySectionProps {
  viagens?: Viagem[];
}

export const TravelHistorySection = ({ viagens }: TravelHistorySectionProps) => {
  if (!viagens || viagens.length === 0) return null;

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      if (date.includes('/')) return date;
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  return (
    <SectionCard title="Histórico de Viagens" icon={Plane} count={viagens.length}>
      <div className="space-y-4">
        {viagens.map((viagem, i) => (
          <div 
            key={i} 
            className={`p-4 bg-secondary/30 rounded-lg border border-border/50`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{viagem.origem || '—'}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-semibold text-primary">{viagem.destino}</span>
                  </div>
                  {viagem.companhia && (
                    <p className="text-sm text-muted-foreground">{viagem.companhia}</p>
                  )}
                </div>
              </div>
              {viagem.status && (
                <Badge 
                  variant={
                    viagem.status === 'REALIZADA' ? 'success' : 
                    viagem.status === 'CANCELADA' ? 'danger' : 
                    'info'
                  } 
                  size="sm"
                >
                  {viagem.status}
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {viagem.dataIda && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Ida: {formatDate(viagem.dataIda)}</span>
                </div>
              )}
              {viagem.dataVolta && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Volta: {formatDate(viagem.dataVolta)}</span>
                </div>
              )}
              {viagem.tipoViagem && (
                <span className="bg-muted px-2 py-0.5 rounded text-xs">{viagem.tipoViagem}</span>
              )}
              {viagem.localizador && (
                <span className="font-mono text-xs bg-muted px-2 py-0.5 rounded">
                  Loc: {viagem.localizador}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
