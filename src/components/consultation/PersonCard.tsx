import { User } from "lucide-react";

interface PersonCardProps {
  nome?: string;
  cpf?: string;
  foto?: string | null;
  idade?: number | null;
  sexo?: string | null;
  profissao?: string | null;
  renda?: string;
  grau?: string;
  cidade?: string;
  uf?: string;
  compact?: boolean;
}

export const PersonCard = ({ 
  nome, 
  cpf, 
  foto, 
  idade, 
  sexo,
  profissao,
  renda,
  grau,
  cidade,
  uf,
  compact = false
}: PersonCardProps) => {
  const formatCPF = (cpf?: string) => {
    if (!cpf) return null;
    const cleaned = cpf.replace(/\D/g, "");
    if (cleaned.length !== 11) return cpf;
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  return (
    <div className={`flex items-start gap-3 p-3 bg-secondary/50 rounded-lg border border-border/50 ${compact ? 'p-2' : ''}`}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        {foto ? (
          <img 
            src={foto} 
            alt={nome || "Foto"}
            className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-lg object-cover border border-border`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-lg bg-avatar flex items-center justify-center border border-avatar ${foto ? 'hidden' : ''}`}>
          <User className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} text-muted-foreground`} />
        </div>
      </div>
      
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className={`font-semibold text-foreground truncate ${compact ? 'text-xs' : 'text-sm'}`}>
              {nome || "Nome não informado"}
            </h4>
            {cpf && (
              <p className="text-xs text-muted-foreground">
                CPF: {formatCPF(cpf)}
              </p>
            )}
          </div>
          {grau && (
            <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full flex-shrink-0">
              {grau}
            </span>
          )}
        </div>
        
        <div className={`flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5 text-[11px] text-muted-foreground ${compact ? 'mt-1' : ''}`}>
          {idade && <span>{idade} anos</span>}
          {sexo && <span>{sexo === 'M' ? 'Masculino' : sexo === 'F' ? 'Feminino' : sexo}</span>}
          {profissao && <span className="truncate max-w-[150px]">{profissao}</span>}
          {renda && <span className="font-medium text-success">{renda}</span>}
          {cidade && uf && <span>{cidade}/{uf}</span>}
        </div>
      </div>
    </div>
  );
};
