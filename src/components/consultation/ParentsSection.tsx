import { Users, User } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Parente } from "@/types/consultation";

interface ParentsSectionProps {
  parentes?: Parente[];
  maeName?: string;
  paiName?: string;
}

export const ParentsSection = ({ parentes, maeName, paiName }: ParentsSectionProps) => {
  const hasParentes = parentes && parentes.length > 0;
  const hasParentNames = maeName || paiName;
  
  if (!hasParentes && !hasParentNames) return null;

  const formatCPF = (cpf?: string) => {
    if (!cpf) return null;
    const cleaned = cpf.replace(/\D/g, "");
    if (cleaned.length !== 11) return cpf;
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  return (
    <SectionCard title="Parentes" icon={Users} count={parentes?.length || 0}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* From parentes array */}
        {parentes?.map((p, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50">
            <div className="flex-shrink-0">
              {p.foto ? (
                <img 
                  src={p.foto} 
                  alt={p.nome || "Foto"}
                  className="w-12 h-12 rounded-full object-cover border border-border shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-12 h-12 rounded-full bg-avatar flex items-center justify-center border border-avatar ${p.foto ? 'hidden' : ''}`}>
                <User className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold text-primary uppercase">{p.grau}</span>
              <h4 className="font-semibold text-sm text-foreground truncate">
                {p.nome || "Nome não informado"}
              </h4>
              {p.cpfParente && (
                <p className="text-xs text-muted-foreground">
                  CPF: {formatCPF(p.cpfParente)}
                </p>
              )}
              {p.idade && (
                <p className="text-xs text-muted-foreground">{p.idade} anos</p>
              )}
              {p.renda && (
                <p className="text-xs font-semibold text-success">{p.renda}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
