import { ReactNode } from "react";
import { LucideIcon, AlertCircle } from "lucide-react";

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  isEmpty?: boolean;
  emptyMessage?: string;
  className?: string;
  count?: number;
  variant?: "default" | "danger" | "warning" | "success" | "info";
}

const variantStyles = {
  default: "gradient-section",
  danger: "bg-destructive",
  warning: "bg-warning",
  success: "bg-success",
  info: "bg-info",
};

export const SectionCard = ({
  title,
  icon: Icon,
  children,
  isEmpty = false,
  emptyMessage = "Nenhum registro encontrado",
  className = "",
  count,
  variant = "default",
}: SectionCardProps) => {
  return (
    <div className={`bg-card rounded-xl shadow-sm border border-border overflow-hidden print-avoid-break animate-fade-in ${className}`}>
      <div className={`${variantStyles[variant]} text-primary-foreground px-4 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-white/10 rounded-lg">
            <Icon className="w-4 h-4" />
          </div>
          <h2 className="font-semibold text-sm tracking-wide">{title}</h2>
        </div>
        {count !== undefined && count > 0 && (
          <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {count}
          </span>
        )}
      </div>
      <div className="p-4 print:p-3">
        {isEmpty ? (
          <div className="flex items-center justify-center gap-2 py-6 text-empty-state">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{emptyMessage}</span>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
