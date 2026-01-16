import { GraduationCap } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { Escolaridade } from "@/types/consultation";

interface EducationSectionProps {
  escolaridade?: Escolaridade[];
}

export const EducationSection = ({ escolaridade }: EducationSectionProps) => {
  if (!escolaridade || escolaridade.length === 0) return null;

  return (
    <SectionCard title="Níveis de Escolaridade" icon={GraduationCap} count={escolaridade.length}>
      <div className="flex flex-wrap gap-2">
        {escolaridade.map((e, i) => (
          <Badge key={i} variant="info">
            {e.nivel}
          </Badge>
        ))}
      </div>
    </SectionCard>
  );
};
