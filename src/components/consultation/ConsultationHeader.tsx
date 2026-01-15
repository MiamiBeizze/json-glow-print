import { FileText, Printer, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsultationHeaderProps {
  title: string;
  subtitle?: string;
}

export const ConsultationHeader = ({ title, subtitle }: ConsultationHeaderProps) => {
  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="bg-primary text-primary-foreground rounded-lg shadow-lg mb-6 print:shadow-none print:rounded-none print:mb-4">
      <div className="p-6 print:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-foreground/10 rounded-lg">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold print:text-xl">{title}</h1>
              {subtitle && (
                <p className="text-primary-foreground/80 mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 no-print">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Calendar className="w-4 h-4" />
              <span>{currentDate}</span>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrint}
              className="flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Imprimir
            </Button>
          </div>
        </div>
        <div className="hidden print:flex items-center gap-2 text-sm text-primary-foreground/80 mt-2">
          <Calendar className="w-4 h-4" />
          <span>Consulta realizada em: {currentDate}</span>
        </div>
      </div>
    </header>
  );
};
