import { Wifi } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Plano } from "@/types/consultation";

interface PlansSectionProps {
  planos?: Plano[];
}

export const PlansSection = ({ planos }: PlansSectionProps) => {
  const isEmpty = !planos || planos.length === 0;

  return (
    <SectionCard
      title="Planos e Serviços"
      icon={Wifi}
      isEmpty={isEmpty}
      emptyMessage="Nenhum plano encontrado"
    >
      {planos && (
        <div className="space-y-3">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`${index > 0 ? "pt-3 border-t border-divider" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-sm">{plano.empresa}</h4>
                  <p className="text-xs text-muted-foreground">{plano.plano}</p>
                  {plano.endereco && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {plano.endereco}, {plano.numero} - {plano.cidade}/{plano.uf}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    plano.statusProduto === 'Ativo' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plano.statusProduto}
                  </span>
                  {plano.dataProduto && (
                    <p className="text-[10px] text-muted-foreground mt-1">{plano.dataProduto}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
};
