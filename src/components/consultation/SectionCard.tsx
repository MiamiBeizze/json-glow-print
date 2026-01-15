import { ReactNode } from "react";
import { LucideIcon, AlertCircle } from "lucide-react";

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  isEmpty?: boolean;
  emptyMessage?: string;
  className?: string;
}

export const SectionCard = ({
  title,
  icon: Icon,
  children,
  isEmpty = false,
  emptyMessage = "Nenhum registro encontrado",
  className = "",
}: SectionCardProps) => {
  return (
    <div className={`bg-card rounded-lg shadow-md border border-border overflow-hidden print-avoid-break animate-fade-in ${className}`}>
      <div className="bg-section-header text-primary-foreground px-4 py-3 flex items-center gap-3">
        <Icon className="w-5 h-5" />
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="p-4">
        {isEmpty ? (
          <div className="flex items-center justify-center gap-2 py-6 text-empty-state">
            <AlertCircle className="w-5 h-5" />
            <span>{emptyMessage}</span>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
