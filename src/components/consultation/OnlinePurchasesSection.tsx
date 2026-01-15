import { ShoppingCart, Package } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { CompraOnline } from "@/types/consultation";

interface OnlinePurchasesSectionProps {
  compras?: CompraOnline[];
}

export const OnlinePurchasesSection = ({ compras }: OnlinePurchasesSectionProps) => {
  if (!compras || compras.length === 0) return null;

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try {
      return new Date(date).toLocaleDateString("pt-BR");
    } catch {
      return date;
    }
  };

  const formatCurrency = (value?: string) => {
    if (!value) return undefined;
    const num = parseFloat(value);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  };

  return (
    <SectionCard 
      title="Compras Online" 
      icon={ShoppingCart} 
      count={compras.length}
    >
      <div className="space-y-3">
        {compras.map((compra, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50">
            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
              <Package className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-foreground line-clamp-2">
                {compra.product}
              </h4>
              {compra.detail && (
                <p className="text-xs text-muted-foreground mt-0.5">{compra.detail}</p>
              )}
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Qtd: {compra.quantity}</span>
                  <span>•</span>
                  <span>{formatDate(compra.created_at)}</span>
                </div>
                <span className="font-bold text-success">{formatCurrency(compra.price)}</span>
              </div>
              
              {compra.email && (
                <p className="text-[10px] text-muted-foreground mt-1">
                  Email: {compra.email}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
