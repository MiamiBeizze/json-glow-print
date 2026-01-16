import { Receipt, AlertTriangle, Banknote, Shield } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { IRPF, PPE, Emprestimo } from "@/types/consultation";

interface FinancialDataSectionProps {
  irpf?: IRPF[];
  ppe?: PPE[];
  emprestimos?: Emprestimo[];
}

export const FinancialDataSection = ({ irpf, ppe, emprestimos }: FinancialDataSectionProps) => {
  const hasIrpf = irpf && irpf.length > 0;
  const hasPpe = ppe && ppe.length > 0;
  const hasEmprestimos = emprestimos && emprestimos.length > 0;
  
  if (!hasIrpf && !hasPpe && !hasEmprestimos) return null;

  const formatCurrency = (value?: string) => {
    if (!value) return undefined;
    const num = parseFloat(value.replace(/[^\d.,]/g, '').replace(',', '.'));
    if (isNaN(num)) return value;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  };

  const getSituacaoVariant = (situacao?: string): "success" | "danger" | "warning" | "info" | "neutral" => {
    const sitLower = situacao?.toLowerCase() || '';
    if (sitLower.includes('regular') || sitLower.includes('ativo') || sitLower.includes('quitado') || sitLower.includes('pago')) {
      return 'success';
    }
    if (sitLower.includes('irregular') || sitLower.includes('pendente') || sitLower.includes('atraso')) {
      return 'danger';
    }
    if (sitLower.includes('processamento') || sitLower.includes('analise')) {
      return 'warning';
    }
    return 'neutral';
  };

  return (
    <SectionCard 
      title="Dados Financeiros" 
      icon={Receipt}
      count={(irpf?.length || 0) + (ppe?.length || 0) + (emprestimos?.length || 0)}
    >
      <div className="space-y-6">
        {/* PPE - Pessoa Politicamente Exposta */}
        {hasPpe && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-500" /> PPE - Pessoa Politicamente Exposta ({ppe.length})
            </h4>
            <div className="space-y-3">
              {ppe.map((p, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200/50 dark:border-amber-800/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-500 rounded-lg">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-foreground">{p.cargo}</h5>
                        <p className="text-sm text-muted-foreground">{p.orgao}</p>
                      </div>
                    </div>
                    {p.situacao && (
                      <Badge variant={p.situacao.toLowerCase().includes('ativo') ? 'warning' : 'neutral'} size="sm">
                        {p.situacao}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
                    {p.nivel && <span className="bg-amber-200/50 dark:bg-amber-800/30 px-2 py-0.5 rounded">Nível: {p.nivel}</span>}
                    {p.dataInicio && <span>Início: {p.dataInicio}</span>}
                    {p.dataFim && <span>Fim: {p.dataFim}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IRPF */}
        {hasIrpf && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Receipt className="w-4 h-4" /> Declarações IRPF ({irpf.length})
            </h4>
            <div className="space-y-3">
              {irpf.map((dec, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h5 className="font-bold text-lg text-foreground">
                        Exercício {dec.anoExercicio}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Ano Calendário: {dec.anoCalendario}
                      </p>
                    </div>
                    <div className="text-right">
                      {dec.situacao && (
                        <Badge variant={getSituacaoVariant(dec.situacao)} size="sm">
                          {dec.situacao}
                        </Badge>
                      )}
                      {dec.tipoDeclaracao && (
                        <p className="text-xs text-muted-foreground mt-1">{dec.tipoDeclaracao}</p>
                      )}
                    </div>
                  </div>
                  
                  <DataGrid columns={3}>
                    <DataField 
                      label="Renda Tributável" 
                      value={formatCurrency(dec.rendaTributavel)} 
                      size="sm" 
                      highlight
                    />
                    <DataField 
                      label="Imposto Devido" 
                      value={formatCurrency(dec.impostoDevido)} 
                      size="sm" 
                    />
                    <DataField 
                      label="Restituição" 
                      value={formatCurrency(dec.restituicao)} 
                      size="sm" 
                    />
                  </DataGrid>
                  
                  {dec.dataEnvio && (
                    <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-divider">
                      Enviado em: {dec.dataEnvio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empréstimos */}
        {hasEmprestimos && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Banknote className="w-4 h-4" /> Empréstimos ({emprestimos.length})
            </h4>
            <div className="space-y-3">
              {emprestimos.map((emp, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Banknote className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">{emp.instituicao}</h5>
                        {emp.tipo && <p className="text-sm text-muted-foreground">{emp.tipo}</p>}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{formatCurrency(emp.valor)}</p>
                      {emp.situacao && (
                        <Badge variant={getSituacaoVariant(emp.situacao)} size="sm">
                          {emp.situacao}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <DataGrid columns={4}>
                    <DataField label="Parcelas" value={emp.parcelas?.toString()} size="sm" />
                    <DataField label="Valor Parcela" value={formatCurrency(emp.valorParcela)} size="sm" />
                    <DataField label="Taxa Juros" value={emp.taxaJuros} size="sm" />
                    <DataField label="Contratação" value={emp.dataContratacao} size="sm" />
                  </DataGrid>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionCard>
  );
};
