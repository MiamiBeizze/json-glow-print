import { User, MapPin } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { RelacionadoPorEndereco } from "@/types/consultation";

interface RelatedByAddressSectionProps {
  relacionados?: RelacionadoPorEndereco[];
}

export const RelatedByAddressSection = ({ relacionados }: RelatedByAddressSectionProps) => {
  if (!relacionados || relacionados.length === 0) return null;

  const formatCPF = (cpf?: string) => {
    if (!cpf) return null;
    const cleaned = cpf.replace(/\D/g, "");
    if (cleaned.length !== 11) return cpf;
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  return (
    <SectionCard 
      title="Relacionados por Endereço" 
      icon={MapPin} 
      count={relacionados.length}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {relacionados.map((rel, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50 hover:bg-secondary/50 transition-colors">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {rel.foto ? (
                <img 
                  src={rel.foto} 
                  alt={rel.nome || "Foto"}
                  className="w-12 h-12 rounded-lg object-cover border border-border shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-12 h-12 rounded-lg bg-avatar flex items-center justify-center border border-avatar ${rel.foto ? 'hidden' : ''}`}>
                <User className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-foreground truncate">
                {rel.nome || "Nome não informado"}
              </h4>
              {rel.cpf && (
                <p className="text-[10px] text-muted-foreground">
                  CPF: {formatCPF(rel.cpf)}
                </p>
              )}
              
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 text-[10px] text-muted-foreground">
                {rel.idade && <span>{rel.idade} anos</span>}
                {rel.sexo && <span>• {rel.sexo === 'M' ? 'Masc' : 'Fem'}</span>}
              </div>
              
              {rel.profissao && (
                <p className="text-[10px] text-muted-foreground truncate mt-0.5">{rel.profissao}</p>
              )}
              
              {rel.renda && (
                <p className="text-[10px] font-semibold text-success mt-0.5">{rel.renda}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
