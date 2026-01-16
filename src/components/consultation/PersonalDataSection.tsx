import { User, Heart, GraduationCap, Wallet, AlertTriangle, CheckCircle } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { Badge } from "./Badge";
import { Cadastral } from "@/types/consultation";

interface PersonalDataSectionProps {
  data?: Cadastral;
}

export const PersonalDataSection = ({ data }: PersonalDataSectionProps) => {
  const isEmpty = !data || Object.keys(data).length === 0;

  const getSexoLabel = (sexo?: string) => {
    if (!sexo) return undefined;
    return sexo === 'M' ? 'Masculino' : sexo === 'F' ? 'Feminino' : sexo;
  };

  return (
    <SectionCard
      title="Dados Pessoais"
      icon={User}
      isEmpty={isEmpty}
      emptyMessage="Dados pessoais não disponíveis"
    >
      {data && (
        <div className="space-y-5">
          {/* Status badges */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-divider">
            {data.indicativoCriminal !== undefined && (
              <Badge variant={data.indicativoCriminal ? "danger" : "success"}>
                {data.indicativoCriminal ? (
                  <><AlertTriangle className="w-3.5 h-3.5 mr-1" /> Indicativo Criminal</>
                ) : (
                  <><CheckCircle className="w-3.5 h-3.5 mr-1" /> Sem Indicativo Criminal</>
                )}
              </Badge>
            )}
            {data.flagObito2 !== undefined && (
              <Badge variant={data.flagObito2 ? "danger" : "success"}>
                {data.flagObito2 ? "Óbito Registrado" : "Sem Óbito"}
              </Badge>
            )}
            {data.classeSocial && (
              <Badge variant="info">
                Classe {data.classeSocial}{data.subClasseSocial ? `/${data.subClasseSocial}` : ''}
              </Badge>
            )}
            {data.signo && (
              <Badge variant="neutral">
                {data.signo} {data.signoChines && `• ${data.signoChines}`}
              </Badge>
            )}
          </div>

          {/* Main info grid */}
          <DataGrid columns={4}>
            <DataField label="Data de Nascimento" value={data.dataNasc} />
            <DataField label="Idade" value={data.idade ? `${data.idade} anos` : undefined} />
            <DataField label="Sexo" value={getSexoLabel(data.sexo)} />
            <DataField label="Naturalidade" value={data.naturalidade !== 'n/a' ? data.naturalidade : undefined} />
          </DataGrid>

          {/* Parents */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-divider">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-pink-500 mt-0.5" />
              <DataField label="Nome da Mãe" value={data.mae?.nome} />
            </div>
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-blue-500 mt-0.5" />
              <DataField label="Nome do Pai" value={data.pai?.nome !== 'N/a' ? data.pai?.nome : undefined} />
            </div>
          </div>

          {/* Socioeconomic */}
          <div className="grid grid-cols-4 gap-6 pt-4 border-t border-divider">
            <div className="flex items-start gap-2">
              <Wallet className="w-5 h-5 text-green-500 mt-0.5" />
              <DataField label="Renda Estimada" value={data.renda} highlight />
            </div>
            <div className="flex items-start gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500 mt-0.5" />
              <DataField label="Escolaridade" value={data.escolaridade} />
            </div>
            <DataField label="CNS" value={data.cns?.toString()} />
            <DataField label="PIS" value={data.pis?.toString()} />
          </div>

          {/* Documents */}
          {(data.rg?.numero !== 'n/a' || data.ctps?.numero || data.tituloEleitor?.numero) && (
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-divider">
              {data.rg?.numero !== 'n/a' && (
                <DataField 
                  label="RG" 
                  value={`${data.rg?.numero || ''} ${data.rg?.orgao !== 'n/a' ? `(${data.rg?.orgao}${data.rg?.uf ? `/${data.rg.uf}` : ''})` : ''}`} 
                />
              )}
              {data.ctps?.numero && (
                <DataField 
                  label="CTPS" 
                  value={`${data.ctps.numero} / Série ${data.ctps.serie}`} 
                />
              )}
              {data.tituloEleitor?.numero && (
                <DataField 
                  label="Título de Eleitor" 
                  value={`${data.tituloEleitor.numero} - Zona ${data.tituloEleitor.zona} / Seção ${data.tituloEleitor.secao}`} 
                />
              )}
            </div>
          )}
        </div>
      )}
    </SectionCard>
  );
};
