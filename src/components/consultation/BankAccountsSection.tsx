import { Building, Landmark } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { ContaBanco } from "@/types/consultation";

interface BankAccountsSectionProps {
  contasBancos?: ContaBanco[];
}

export const BankAccountsSection = ({ contasBancos }: BankAccountsSectionProps) => {
  if (!contasBancos || contasBancos.length === 0) return null;

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  return (
    <SectionCard title="Contas Bancárias" icon={Landmark} count={contasBancos.length}>
      <div className="space-y-4">
        {contasBancos.map((conta, i) => (
          <div 
            key={i} 
            className={`p-4 bg-secondary/30 rounded-lg border border-border/50 ${i > 0 ? '' : ''}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-semibold text-base">{conta.banco}</h4>
                  {conta.codigoBanco && (
                    <span className="text-xs text-muted-foreground">Código: {conta.codigoBanco}</span>
                  )}
                </div>
              </div>
              {conta.status && (
                <Badge variant={conta.status === 'ATIVA' ? 'success' : 'neutral'} size="sm">
                  {conta.status}
                </Badge>
              )}
            </div>
            
            <DataGrid columns={4}>
              <DataField label="Agência" value={conta.agencia} size="sm" />
              <DataField label="Conta" value={conta.conta} size="sm" />
              <DataField label="Tipo" value={conta.tipoConta} size="sm" />
              <DataField label="Abertura" value={formatDate(conta.dataAbertura)} size="sm" />
            </DataGrid>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
