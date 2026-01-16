import { Linkedin, GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { DataField } from "./DataField";
import { DataGrid } from "./DataGrid";
import { LinkedIn, Universitario, SISU, ProUni } from "@/types/consultation";

interface EducationLinkedInSectionProps {
  linkedin?: LinkedIn[];
  universitarios?: Universitario[];
  sisu?: SISU[];
  prouni?: ProUni[];
}

export const EducationLinkedInSection = ({ linkedin, universitarios, sisu, prouni }: EducationLinkedInSectionProps) => {
  const hasLinkedin = linkedin && linkedin.length > 0;
  const hasUniversitarios = universitarios && universitarios.length > 0;
  const hasSisu = sisu && sisu.length > 0;
  const hasProuni = prouni && prouni.length > 0;
  
  if (!hasLinkedin && !hasUniversitarios && !hasSisu && !hasProuni) return null;

  const getSituacaoVariant = (situacao?: string): "success" | "danger" | "warning" | "info" | "neutral" => {
    const sitLower = situacao?.toLowerCase() || '';
    if (sitLower.includes('aprovado') || sitLower.includes('conclu') || sitLower.includes('ativo') || sitLower.includes('matriculado')) {
      return 'success';
    }
    if (sitLower.includes('reprovado') || sitLower.includes('cancelado') || sitLower.includes('desistente')) {
      return 'danger';
    }
    if (sitLower.includes('espera') || sitLower.includes('pendente')) {
      return 'warning';
    }
    return 'info';
  };

  return (
    <SectionCard 
      title="Educação e Perfil Profissional" 
      icon={GraduationCap}
      count={(linkedin?.length || 0) + (universitarios?.length || 0) + (sisu?.length || 0) + (prouni?.length || 0)}
    >
      <div className="space-y-6">
        {/* LinkedIn */}
        {hasLinkedin && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn ({linkedin.length})
            </h4>
            <div className="space-y-3">
              {linkedin.map((profile, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 rounded-lg border border-blue-200/50 dark:border-blue-800/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-foreground">{profile.nome}</h5>
                      {profile.cargo && (
                        <p className="text-sm font-medium text-primary">{profile.cargo}</p>
                      )}
                      {profile.empresa && (
                        <p className="text-sm text-muted-foreground">{profile.empresa}</p>
                      )}
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                        {profile.localizacao && <span>📍 {profile.localizacao}</span>}
                        {profile.conexoes && <span>👥 {profile.conexoes} conexões</span>}
                      </div>
                      {profile.url && (
                        <a 
                          href={profile.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-xs text-blue-600 hover:underline"
                        >
                          Ver perfil →
                        </a>
                      )}
                    </div>
                  </div>
                  {profile.resumo && (
                    <p className="text-sm text-muted-foreground mt-3 pt-3 border-t border-blue-200/50">{profile.resumo}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Universitários */}
        {hasUniversitarios && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Formação Universitária ({universitarios.length})
            </h4>
            <div className="space-y-3">
              {universitarios.map((univ, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h5 className="font-semibold text-foreground">{univ.curso}</h5>
                      <p className="text-sm text-muted-foreground">{univ.instituicao}</p>
                      {univ.campus && <p className="text-xs text-muted-foreground">{univ.campus}</p>}
                    </div>
                    {univ.situacao && (
                      <Badge variant={getSituacaoVariant(univ.situacao)} size="sm">
                        {univ.situacao}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                    {univ.anoInicio && <span>Início: {univ.anoInicio}</span>}
                    {univ.anoConclusao && <span>Conclusão: {univ.anoConclusao}</span>}
                    {univ.modalidade && <span className="bg-muted px-1.5 py-0.5 rounded">{univ.modalidade}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SISU */}
        {hasSisu && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> SISU ({sisu.length})
            </h4>
            <div className="space-y-3">
              {sisu.map((s, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h5 className="font-semibold text-foreground">{s.curso}</h5>
                      <p className="text-sm text-muted-foreground">{s.instituicao}</p>
                    </div>
                    {s.situacao && (
                      <Badge variant={getSituacaoVariant(s.situacao)} size="sm">
                        {s.situacao}
                      </Badge>
                    )}
                  </div>
                  <DataGrid columns={4}>
                    <DataField label="Edição" value={s.edicao} size="sm" />
                    <DataField label="Modalidade" value={s.modalidade} size="sm" />
                    <DataField label="Nota de Corte" value={s.notaCorte?.toString()} size="sm" />
                    <DataField label="Classificação" value={s.classificacao ? `${s.classificacao}º` : undefined} size="sm" />
                  </DataGrid>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ProUni */}
        {hasProuni && (
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> ProUni ({prouni.length})
            </h4>
            <div className="space-y-3">
              {prouni.map((p, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-secondary/30 rounded-lg border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h5 className="font-semibold text-foreground">{p.curso}</h5>
                      <p className="text-sm text-muted-foreground">{p.instituicao}</p>
                    </div>
                    <div className="text-right">
                      {p.tipoBolsa && (
                        <Badge variant={p.tipoBolsa.toLowerCase().includes('integral') ? 'success' : 'info'} size="sm">
                          {p.tipoBolsa}
                        </Badge>
                      )}
                      {p.situacao && (
                        <div className="mt-1">
                          <Badge variant={getSituacaoVariant(p.situacao)} size="sm">
                            {p.situacao}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    {p.edicao && <span>Edição: {p.edicao}</span>}
                    {p.mensalidade && <span>Mensalidade: {p.mensalidade}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionCard>
  );
};
