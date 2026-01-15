import { User, Heart } from "lucide-react";
import { Parente, Genitor } from "@/types/consultation";

interface FamilyTreeProps {
  parentes?: Parente[];
  genitores?: Genitor[];
  maeName?: string;
  paiName?: string;
}

export const FamilyTree = ({ parentes, genitores, maeName, paiName }: FamilyTreeProps) => {
  // Separate parents from other relatives
  const parents = parentes?.filter(p => 
    p.grau?.toLowerCase().includes('mae') || 
    p.grau?.toLowerCase().includes('mãe') || 
    p.grau?.toLowerCase().includes('pai')
  ) || [];
  
  const siblings = parentes?.filter(p => 
    p.grau?.toLowerCase().includes('irmã') || 
    p.grau?.toLowerCase().includes('irma') ||
    p.grau?.toLowerCase().includes('irmão') ||
    p.grau?.toLowerCase().includes('irmao')
  ) || [];
  
  const partners = parentes?.filter(p => 
    p.grau?.toLowerCase().includes('cônjuge') || 
    p.grau?.toLowerCase().includes('conjuge') ||
    p.grau?.toLowerCase().includes('esposa') ||
    p.grau?.toLowerCase().includes('esposo') ||
    p.grau?.toLowerCase().includes('companheiro') ||
    p.grau?.toLowerCase().includes('sócio') ||
    p.grau?.toLowerCase().includes('socio')
  ) || [];
  
  const others = parentes?.filter(p => 
    !parents.includes(p) && 
    !siblings.includes(p) && 
    !partners.includes(p)
  ) || [];

  const PersonNode = ({ 
    nome, 
    foto, 
    grau, 
    idade,
    renda,
    isMain = false 
  }: { 
    nome?: string; 
    foto?: string | null; 
    grau?: string;
    idade?: number | null;
    renda?: string;
    isMain?: boolean;
  }) => (
    <div className={`flex flex-col items-center ${isMain ? 'scale-110' : ''}`}>
      <div className={`relative ${isMain ? 'ring-4 ring-primary ring-offset-2' : ''} rounded-full`}>
        {foto ? (
          <img 
            src={foto} 
            alt={nome || "Foto"}
            className={`${isMain ? 'w-20 h-20' : 'w-14 h-14'} rounded-full object-cover border-2 border-white shadow-lg`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`${isMain ? 'w-20 h-20' : 'w-14 h-14'} rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center border-2 border-white shadow-lg ${foto ? 'hidden' : ''}`}>
          <User className={`${isMain ? 'w-10 h-10' : 'w-6 h-6'} text-primary`} />
        </div>
        {grau && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-bold bg-primary text-white px-1.5 py-0.5 rounded-full whitespace-nowrap shadow">
            {grau}
          </span>
        )}
      </div>
      <p className={`mt-3 text-center font-medium leading-tight ${isMain ? 'text-sm' : 'text-xs'} max-w-[100px] truncate`}>
        {nome?.split(' ').slice(0, 2).join(' ') || 'N/A'}
      </p>
      {idade && <p className="text-[10px] text-muted-foreground">{idade} anos</p>}
      {renda && <p className="text-[10px] font-medium text-success">{renda}</p>}
    </div>
  );

  const hasParents = parents.length > 0 || maeName || paiName;
  const hasOthers = siblings.length > 0 || partners.length > 0 || others.length > 0;

  return (
    <div className="py-4">
      {/* Parents Row */}
      {hasParents && (
        <div className="flex justify-center gap-8 mb-6">
          {/* Mae */}
          <div className="flex flex-col items-center">
            <PersonNode 
              nome={parents.find(p => p.grau?.toLowerCase().includes('mae') || p.grau?.toLowerCase().includes('mãe'))?.nome || maeName}
              foto={parents.find(p => p.grau?.toLowerCase().includes('mae') || p.grau?.toLowerCase().includes('mãe'))?.foto}
              grau="Mãe"
            />
          </div>
          
          {/* Connection */}
          <div className="flex items-center">
            <Heart className="w-5 h-5 text-pink-400" />
          </div>
          
          {/* Pai */}
          <div className="flex flex-col items-center">
            <PersonNode 
              nome={parents.find(p => p.grau?.toLowerCase().includes('pai'))?.nome || paiName}
              foto={parents.find(p => p.grau?.toLowerCase().includes('pai'))?.foto}
              grau="Pai"
            />
          </div>
        </div>
      )}

      {/* Connection line */}
      {hasParents && hasOthers && (
        <div className="flex justify-center mb-6">
          <div className="w-px h-8 bg-border"></div>
        </div>
      )}

      {/* Partners & Siblings */}
      {(partners.length > 0 || siblings.length > 0) && (
        <div className="flex justify-center flex-wrap gap-6 mb-6">
          {partners.map((p, i) => (
            <PersonNode 
              key={`partner-${i}`}
              nome={p.nome}
              foto={p.foto}
              grau={p.grau}
              idade={p.idade}
              renda={p.renda}
            />
          ))}
          {siblings.map((p, i) => (
            <PersonNode 
              key={`sibling-${i}`}
              nome={p.nome}
              foto={p.foto}
              grau={p.grau}
              idade={p.idade}
              renda={p.renda}
            />
          ))}
        </div>
      )}

      {/* Other relatives */}
      {others.length > 0 && (
        <div className="flex justify-center flex-wrap gap-4">
          {others.map((p, i) => (
            <PersonNode 
              key={`other-${i}`}
              nome={p.nome}
              foto={p.foto}
              grau={p.grau}
              idade={p.idade}
              renda={p.renda}
            />
          ))}
        </div>
      )}
    </div>
  );
};
