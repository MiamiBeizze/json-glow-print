import { CreditCard, Car, AlertTriangle, CheckCircle } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { CNH } from "@/types/consultation";

interface CNHSectionProps {
  cnh?: CNH;
}

export const CNHSection = ({ cnh }: CNHSectionProps) => {
  // Check if CNH has any meaningful data
  if (!cnh || Object.keys(cnh).length === 0) return null;
  
  // Check if it's an empty object or has no relevant fields
  const hasData = cnh.numero || cnh.registro || cnh.categoria;
  if (!hasData) return null;

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      if (date.includes('/')) return date;
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const isExpired = () => {
    if (!cnh.dataValidade) return false;
    try {
      const validade = new Date(cnh.dataValidade);
      return validade < new Date();
    } catch {
      return false;
    }
  };

  const expired = isExpired();

  return (
    <SectionCard 
      title="CNH - Carteira Nacional de Habilitação" 
      icon={Car}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase font-medium">Número do Registro</p>
            <p className="text-xl font-bold font-mono text-primary">{cnh.registro || cnh.numero || '—'}</p>
          </div>
          <div className="ml-auto">
            {cnh.situacao && (
              <Badge 
                variant={cnh.situacao.toLowerCase().includes('regular') ? 'success' : 'danger'}
              >
                {cnh.situacao.toLowerCase().includes('regular') ? (
                  <><CheckCircle className="w-3.5 h-3.5 mr-1" /> {cnh.situacao}</>
                ) : (
                  <><AlertTriangle className="w-3.5 h-3.5 mr-1" /> {cnh.situacao}</>
                )}
              </Badge>
            )}
          </div>
        </div>

        <DataGrid columns={4}>
          <DataField label="Categoria" value={cnh.categoria} highlight size="sm" />
          <DataField label="UF" value={cnh.uf} size="sm" />
          <DataField label="Data Emissão" value={formatDate(cnh.dataEmissao)} size="sm" />
          <div>
            <DataField 
              label="Validade" 
              value={formatDate(cnh.dataValidade)} 
              size="sm"
            />
            {expired && (
              <Badge variant="danger" size="sm">Vencida</Badge>
            )}
          </div>
        </DataGrid>

        {cnh.primeiraHabilitacao && (
          <DataField label="Primeira Habilitação" value={formatDate(cnh.primeiraHabilitacao)} size="sm" />
        )}

        {cnh.restricoes && cnh.restricoes.length > 0 && (
          <div className="pt-3 border-t border-divider">
            <p className="text-xs text-muted-foreground uppercase font-medium mb-2">Restrições</p>
            <div className="flex flex-wrap gap-2">
              {cnh.restricoes.map((r, i) => (
                <Badge key={i} variant="warning" size="sm">{r}</Badge>
              ))}
            </div>
          </div>
        )}

        {cnh.observacoes && (
          <div className="pt-3 border-t border-divider">
            <p className="text-xs text-muted-foreground uppercase font-medium mb-1">Observações</p>
            <p className="text-sm text-foreground">{cnh.observacoes}</p>
          </div>
        )}
      </div>
    </SectionCard>
  );
};
