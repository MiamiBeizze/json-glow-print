import { FileText, Printer, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cadastral, Foto } from "@/types/consultation";

interface ConsultationHeaderProps {
  title: string;
  subtitle?: string;
  cadastral?: Cadastral;
  fotos?: Foto[];
}

export const ConsultationHeader = ({ title, subtitle, cadastral, fotos }: ConsultationHeaderProps) => {
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

  // Get best photo (highest classification) - supports both URL and base64
  const bestPhoto = fotos?.sort((a, b) => (b.classificacao || 0) - (a.classificacao || 0))[0];
  const photoUrl = bestPhoto?.foto || null;

  return (
    <header className="gradient-header text-primary-foreground rounded-xl shadow-lg mb-6 print:shadow-none print:rounded-lg print:mb-4 overflow-hidden">
      <div className="p-6 print:p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-5">
            {/* Photo or Avatar */}
            <div className="relative">
              {photoUrl ? (
                <img 
                  src={photoUrl} 
                  alt="Foto do consultado"
                  className="w-20 h-20 rounded-xl object-cover border-2 border-white/30 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20 ${photoUrl ? 'hidden' : ''}`}>
                <User className="w-10 h-10 text-white/70" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <h1 className="text-xl font-bold print:text-lg">{title}</h1>
              </div>
              
              {cadastral?.nome && (
                <h2 className="text-2xl font-extrabold tracking-tight print:text-xl mt-1">
                  {cadastral.nome}
                </h2>
              )}
              
              {cadastral?.cpfMask && (
                <p className="text-white/80 font-medium mt-1">
                  CPF: {cadastral.cpfMask}
                </p>
              )}
              
              {subtitle && !cadastral?.nome && (
                <p className="text-white/80 mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-3 no-print">
            <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 px-3 py-1.5 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span>{currentDate}</span>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrint}
              className="flex items-center gap-2 shadow-md"
            >
              <Printer className="w-4 h-4" />
              Imprimir
            </Button>
          </div>
        </div>
        
        <div className="hidden print:flex items-center gap-2 text-sm text-white/80 mt-3 pt-3 border-t border-white/20">
          <Calendar className="w-4 h-4" />
          <span>Consulta realizada em: {currentDate}</span>
        </div>
      </div>
    </header>
  );
};
