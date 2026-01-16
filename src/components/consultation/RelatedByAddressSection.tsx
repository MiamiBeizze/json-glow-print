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
      <div className="grid grid-cols-2 gap-4 print:gap-3">
        {relacionados.map((rel, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg border border-border/50 hover:bg-secondary/50 transition-colors print:p-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {rel.foto ? (
                <img 
                  src={rel.foto} 
                  alt={rel.nome || "Foto"}
                  className="w-16 h-16 rounded-lg object-cover border border-border shadow-sm print:w-14 print:h-14"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-16 h-16 rounded-lg bg-avatar flex items-center justify-center border border-avatar print:w-14 print:h-14 ${rel.foto ? 'hidden' : ''}`}>
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-base text-foreground truncate print:text-sm">
                {rel.nome || "Nome não informado"}
              </h4>
              {rel.cpf && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  CPF: {formatCPF(rel.cpf)}
                </p>
              )}
              
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1.5 text-xs text-muted-foreground">
                {rel.idade && <span>{rel.idade} anos</span>}
                {rel.sexo && <span>• {rel.sexo === 'M' ? 'Masculino' : 'Feminino'}</span>}
              </div>
              
              {rel.profissao && (
                <p className="text-xs text-muted-foreground truncate mt-1">{rel.profissao}</p>
              )}
              
              {rel.renda && (
                <p className="text-sm font-semibold text-success mt-1">{rel.renda}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
