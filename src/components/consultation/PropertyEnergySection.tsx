import { Home, Zap } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { ImovelSP, Energia } from "@/types/consultation";

interface PropertyEnergySectionProps {
  imoveisSp?: ImovelSP[];
  energias?: Energia[];
}

export const PropertyEnergySection = ({ imoveisSp, energias }: PropertyEnergySectionProps) => {
  const hasImoveis = imoveisSp && imoveisSp.length > 0;
  const hasEnergia = energias && energias.length > 0;

  if (!hasImoveis && !hasEnergia) return null;

  const formatCurrency = (value?: string) => {
    if (!value) return undefined;
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
  };

  return (
    <div className="space-y-4">
      {/* Imóveis SP */}
      {hasImoveis && (
        <SectionCard 
          title="Imóveis (São Paulo)" 
          icon={Home} 
          count={imoveisSp.length}
        >
          <div className="space-y-3">
            {imoveisSp.map((imovel, index) => (
              <div
                key={index}
                className={`${index > 0 ? "pt-3 border-t border-divider" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    {imovel.tipoImovel && (
                      <span className="text-xs font-semibold bg-muted px-2 py-0.5 rounded">
                        {imovel.tipoImovel}
                      </span>
                    )}
                    <p className="text-sm font-medium mt-1">{imovel.endereco}</p>
                    {imovel.bairro && (
                      <p className="text-xs text-muted-foreground">{imovel.bairro}</p>
                    )}
                    {imovel.numeroContribuinte && (
                      <p className="text-xs text-muted-foreground">
                        Contribuinte: {imovel.numeroContribuinte}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
                      {imovel.areaTerreno && (
                        <span>Terreno: {imovel.areaTerreno}</span>
                      )}
                      {imovel.areaConstruida && (
                        <span>Construída: {imovel.areaConstruida}</span>
                      )}
                    </div>
                    {imovel.iptu && (
                      <p className="text-xs text-muted-foreground mt-1">
                        IPTU: {formatCurrency(imovel.iptu)}
                      </p>
                    )}
                    {imovel.anoExercicio && (
                      <p className="text-[10px] text-muted-foreground">
                        Exercício: {imovel.anoExercicio}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    {imovel.valorVenal && (
                      <div>
                        <p className="text-[10px] text-muted-foreground">Valor Venal</p>
                        <span className="text-sm font-bold text-primary">
                          {formatCurrency(imovel.valorVenal)}
                        </span>
                      </div>
                    )}
                    {imovel.situacao && (
                      <span className={`text-xs px-2 py-0.5 rounded mt-1 block ${
                        imovel.situacao.toLowerCase() === 'regular'
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {imovel.situacao}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Dados de Energia */}
      {hasEnergia && (
        <SectionCard 
          title="Energia Elétrica" 
          icon={Zap} 
          count={energias.length}
        >
          <div className="space-y-3">
            {energias.map((energia, index) => (
              <div
                key={index}
                className={`${index > 0 ? "pt-3 border-t border-divider" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{energia.distribuidora}</h4>
                    {energia.codigoInstalacao && (
                      <p className="text-xs text-primary font-medium">
                        Instalação: {energia.codigoInstalacao}
                      </p>
                    )}
                    {energia.endereco && (
                      <p className="text-xs text-muted-foreground">{energia.endereco}</p>
                    )}
                    {energia.classe && (
                      <span className="text-xs bg-muted px-1.5 py-0.5 rounded">
                        {energia.classe}
                      </span>
                    )}
                    {energia.consumoMedio && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Consumo médio: {energia.consumoMedio}
                      </p>
                    )}
                    {energia.dataLigacao && (
                      <p className="text-[10px] text-muted-foreground">
                        Data ligação: {energia.dataLigacao}
                      </p>
                    )}
                  </div>
                  {energia.situacao && (
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      energia.situacao.toLowerCase() === 'ativo' || energia.situacao.toLowerCase() === 'ativa' || energia.situacao.toLowerCase() === 'ligada'
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {energia.situacao}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
};
