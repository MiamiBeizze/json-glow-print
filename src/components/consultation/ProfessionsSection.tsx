import { Briefcase } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Profissao } from "@/types/consultation";

interface ProfessionsSectionProps {
  profissoes?: Profissao[];
}

export const ProfessionsSection = ({ profissoes }: ProfessionsSectionProps) => {
  if (!profissoes || profissoes.length === 0) return null;

  return (
    <SectionCard title="Profissões" icon={Briefcase} count={profissoes.length}>
      <div className="flex flex-wrap gap-2">
        {profissoes.map((prof, i) => (
          <div key={i} className="bg-muted px-3 py-2 rounded-lg">
            <p className="text-sm font-medium text-foreground">{prof.descricao}</p>
            {prof.cbo && (
              <p className="text-xs text-muted-foreground">CBO: {prof.cbo}</p>
            )}
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
