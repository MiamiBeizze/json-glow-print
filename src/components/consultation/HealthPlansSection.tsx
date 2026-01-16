import { Heart, CreditCard } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { PlanoSaude, CCF } from "@/types/consultation";

interface HealthPlansSectionProps {
  planosSaude?: PlanoSaude[];
  ccf?: CCF[];
}

export const HealthPlansSection = ({ planosSaude, ccf }: HealthPlansSectionProps) => {
  const hasPlanos = planosSaude && planosSaude.length > 0;
  const hasCcf = ccf && ccf.length > 0;

  if (!hasPlanos && !hasCcf) return null;

  return (
    <div className="grid grid-cols-2 gap-4 print:gap-3">
      {/* Planos de Saúde */}
      {hasPlanos && (
        <SectionCard 
          title="Planos de Saúde" 
          icon={Heart} 
          count={planosSaude.length}
        >
          <div className="space-y-3">
            {planosSaude.map((plano, index) => (
              <div
                key={index}
                className={`${index > 0 ? "pt-3 border-t border-divider" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{plano.operadora}</h4>
                    {plano.plano && (
                      <p className="text-xs text-primary font-medium">{plano.plano}</p>
                    )}
                    {plano.numeroCarteira && (
                      <p className="text-xs text-muted-foreground">
                        Carteira: {plano.numeroCarteira}
                      </p>
                    )}
                    {plano.tipoContrato && (
                      <p className="text-xs text-muted-foreground">
                        {plano.tipoContrato}
                      </p>
                    )}
                    {plano.cobertura && (
                      <p className="text-xs text-muted-foreground">
                        Cobertura: {plano.cobertura}
                      </p>
                    )}
                    {plano.abrangencia && (
                      <p className="text-xs text-muted-foreground">
                        Abrangência: {plano.abrangencia}
                      </p>
                    )}
                    {plano.dataAdesao && (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        Adesão: {plano.dataAdesao}
                      </p>
                    )}
                  </div>
                  {plano.situacao && (
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      plano.situacao.toLowerCase() === 'ativo' || plano.situacao.toLowerCase() === 'ativa'
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {plano.situacao}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* CCF - Cheques sem Fundo */}
      {hasCcf && (
        <SectionCard 
          title="CCF (Cheques sem Fundo)" 
          icon={CreditCard} 
          count={ccf.length}
          variant="danger"
        >
          <div className="space-y-3">
            {ccf.map((item, index) => (
              <div
                key={index}
                className={`${index > 0 ? "pt-3 border-t border-divider" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.banco}</h4>
                    {item.agencia && (
                      <p className="text-xs text-muted-foreground">
                        Agência: {item.agencia}
                      </p>
                    )}
                    {item.numeroCheque && (
                      <p className="text-xs text-muted-foreground">
                        Cheque: {item.numeroCheque}
                      </p>
                    )}
                    {item.motivo && (
                      <p className="text-xs text-red-600">
                        Motivo: {item.motivo}
                      </p>
                    )}
                    {item.quantidade && item.quantidade > 1 && (
                      <p className="text-xs text-muted-foreground">
                        Quantidade: {item.quantidade}
                      </p>
                    )}
                    {item.dataOcorrencia && (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        Data: {item.dataOcorrencia}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    {item.valor && (
                      <span className="text-sm font-bold text-red-600">
                        {item.valor}
                      </span>
                    )}
                    {item.situacao && (
                      <p className={`text-xs px-2 py-0.5 rounded mt-1 ${
                        item.situacao.toLowerCase() === 'regularizado'
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {item.situacao}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
};
