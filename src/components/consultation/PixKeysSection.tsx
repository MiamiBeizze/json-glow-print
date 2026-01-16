import { QrCode, Key } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { ChavePix } from "@/types/consultation";

interface PixKeysSectionProps {
  chavesPix?: ChavePix[];
}

const getPixTypeIcon = (tipo?: string) => {
  switch (tipo?.toLowerCase()) {
    case 'cpf':
    case 'cnpj':
      return '🪪';
    case 'email':
      return '📧';
    case 'telefone':
    case 'celular':
      return '📱';
    case 'aleatoria':
    case 'evp':
      return '🔑';
    default:
      return '💳';
  }
};

export const PixKeysSection = ({ chavesPix }: PixKeysSectionProps) => {
  if (!chavesPix || chavesPix.length === 0) return null;

  return (
    <SectionCard title="Chaves PIX" icon={QrCode} count={chavesPix.length}>
      <div className="space-y-3">
        {chavesPix.map((pix, i) => (
          <div 
            key={i} 
            className={`flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border/50 ${i > 0 ? '' : ''}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getPixTypeIcon(pix.tipo)}</span>
              <div>
                <p className="text-sm font-semibold text-foreground">{pix.tipo?.toUpperCase()}</p>
                <p className="text-base font-mono text-primary break-all">{pix.chave}</p>
                {pix.banco && (
                  <p className="text-xs text-muted-foreground mt-0.5">{pix.banco}</p>
                )}
              </div>
            </div>
            <div className="text-right">
              {pix.status && (
                <Badge variant={pix.status === 'ATIVA' ? 'success' : 'neutral'} size="sm">
                  {pix.status}
                </Badge>
              )}
              {pix.dataCriacao && (
                <p className="text-xs text-muted-foreground mt-1">{pix.dataCriacao}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
