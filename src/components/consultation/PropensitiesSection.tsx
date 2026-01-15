import { TrendingUp, Check, X } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { Propensoes } from "@/types/consultation";

interface PropensitiesSectionProps {
  propensoes?: Propensoes;
}

const propensityLabels: Record<string, string> = {
  turismo: "Turismo",
  luxo: "Produtos de Luxo",
  tvcabo: "TV a Cabo",
  bandalarga: "Banda Larga",
  credimob: "Crédito Imobiliário",
  comprainternet: "Compra pela Internet",
  consignado: "Crédito Consignado",
  clipremium: "Cliente Premium",
  mobile: "Mobile",
  segauto: "Seguro Auto",
  finanauto: "Financ. Auto",
  credpessoal: "Crédito Pessoal",
  investidor: "Investidor",
  tomador: "Tomador",
  prevprivada: "Previdência Privada",
  internetbanking: "Internet Banking",
  cartaocredito: "Cartão de Crédito",
  cartaoprime: "Cartão Prime",
  varioscartoes: "Vários Cartões",
  segsaude: "Seguro Saúde",
  segvida: "Seguro Vida",
  segcasa: "Seguro Casa",
  celpos: "Celular Pós",
  celpre: "Celular Pré",
  highuser: "Heavy User",
  milhas: "Programa de Milhas",
  cinefilo: "Cinéfilo",
  casapropria: "Casa Própria",
  transportepublico: "Transporte Público",
  jogaonline: "Jogos Online",
  videogame: "Videogame",
  leitordigital: "Leitor Digital",
  cacadesconto: "Caça Desconto",
  adiantado: "Paga Adiantado",
  fitness: "Fitness",
};

export const PropensitiesSection = ({ propensoes }: PropensitiesSectionProps) => {
  if (!propensoes) return null;

  const entries = Object.entries(propensoes).filter(
    ([key]) => key !== 'cpf' && key !== 'csb8' && key !== 'csb8_faixa' && propensityLabels[key]
  );

  const positives = entries.filter(([_, value]) => value === 1);
  const negatives = entries.filter(([_, value]) => value === 0);

  return (
    <SectionCard 
      title="Propensões de Consumo" 
      icon={TrendingUp}
    >
      <div className="space-y-4">
        {/* Score */}
        {propensoes.csb8_faixa && (
          <div className="flex items-center justify-center gap-3 p-3 bg-card-highlight rounded-lg">
            <span className="text-sm text-muted-foreground">Score CSB8:</span>
            <Badge variant={propensoes.csb8_faixa === 'ALTO' ? 'success' : propensoes.csb8_faixa === 'MEDIO' ? 'warning' : 'neutral'}>
              {propensoes.csb8} - {propensoes.csb8_faixa}
            </Badge>
          </div>
        )}

        {/* Positive propensities */}
        {positives.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1">
              <Check className="w-3 h-3 text-success" /> Propenso a
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {positives.map(([key]) => (
                <span key={key} className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">
                  {propensityLabels[key]}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Negative propensities */}
        {negatives.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1">
              <X className="w-3 h-3 text-destructive" /> Não propenso a
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {negatives.map(([key]) => (
                <span key={key} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                  {propensityLabels[key]}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionCard>
  );
};
