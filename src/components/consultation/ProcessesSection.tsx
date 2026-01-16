import { Scale, User, FileText } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { Processo, VinculoProcesso } from "@/types/consultation";

interface ProcessesSectionProps {
  processos?: Processo[];
  vinculosPorProcessos?: VinculoProcesso[];
}

export const ProcessesSection = ({ processos, vinculosPorProcessos }: ProcessesSectionProps) => {
  const hasProcessos = processos && processos.length > 0;
  const hasVinculos = vinculosPorProcessos && vinculosPorProcessos.length > 0;
  
  if (!hasProcessos && !hasVinculos) return null;

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      if (date.includes('/')) return date;
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const getPoloVariant = (polo?: string): "success" | "danger" | "warning" | "info" | "neutral" => {
    const poloLower = polo?.toLowerCase() || '';
    if (poloLower.includes('autor') || poloLower.includes('requerente') || poloLower.includes('ativo')) {
      return 'info';
    }
    if (poloLower.includes('réu') || poloLower.includes('reu') || poloLower.includes('requerido') || poloLower.includes('passivo')) {
      return 'danger';
    }
    return 'neutral';
  };

  const getSituacaoVariant = (situacao?: string): "success" | "danger" | "warning" | "info" | "neutral" => {
    const sitLower = situacao?.toLowerCase() || '';
    if (sitLower.includes('arquivado') || sitLower.includes('baixado') || sitLower.includes('encerrado')) {
      return 'neutral';
    }
    if (sitLower.includes('ativo') || sitLower.includes('andamento') || sitLower.includes('tramitando')) {
      return 'warning';
    }
    if (sitLower.includes('suspenso')) {
      return 'info';
    }
    return 'neutral';
  };

  return (
    <SectionCard 
      title="Processos Judiciais" 
      icon={Scale} 
      count={(processos?.length || 0) + (vinculosPorProcessos?.length || 0)}
      variant="warning"
    >
      <div className="space-y-6">
        {/* Processos */}
        {hasProcessos && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Processos ({processos.length})
            </h4>
            <div className="space-y-4">
              {processos.map((processo, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-sm font-bold text-primary">
                          {processo.numero}
                        </span>
                        {processo.polo && (
                          <Badge variant={getPoloVariant(processo.polo)} size="sm">
                            {processo.polo}
                          </Badge>
                        )}
                      </div>
                      {processo.tribunal && (
                        <p className="text-sm text-muted-foreground mt-1">{processo.tribunal}</p>
                      )}
                    </div>
                    {processo.situacao && (
                      <Badge variant={getSituacaoVariant(processo.situacao)} size="sm">
                        {processo.situacao}
                      </Badge>
                    )}
                  </div>
                  
                  <DataGrid columns={3}>
                    <DataField label="Vara" value={processo.vara} size="sm" />
                    <DataField label="Classe" value={processo.classe} size="sm" />
                    <DataField label="Distribuição" value={formatDate(processo.dataDistribuicao)} size="sm" />
                  </DataGrid>
                  
                  {processo.assunto && (
                    <div className="mt-3 pt-3 border-t border-divider">
                      <p className="text-xs text-muted-foreground uppercase font-medium mb-1">Assunto</p>
                      <p className="text-sm text-foreground">{processo.assunto}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vínculos por Processos */}
        {hasVinculos && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <User className="w-4 h-4" /> Vínculos Processuais ({vinculosPorProcessos.length})
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {vinculosPorProcessos.map((vinculo, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="p-2 bg-muted rounded-lg">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {vinculo.nome || 'Nome não informado'}
                    </p>
                    {vinculo.documento && (
                      <p className="text-xs text-muted-foreground font-mono">
                        {vinculo.documento}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      {vinculo.tipo && (
                        <span className="text-xs bg-muted px-1.5 py-0.5 rounded">
                          {vinculo.tipo}
                        </span>
                      )}
                      {vinculo.polo && (
                        <Badge variant={getPoloVariant(vinculo.polo)} size="sm">
                          {vinculo.polo}
                        </Badge>
                      )}
                    </div>
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
