import { ShieldAlert } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { CredencialVazada } from "@/types/consultation";

interface LeakedCredentialsSectionProps {
  credenciais?: CredencialVazada[];
}

export const LeakedCredentialsSection = ({ credenciais }: LeakedCredentialsSectionProps) => {
  if (!credenciais || credenciais.length === 0) return null;

  const totalLeaks = credenciais.reduce((acc, c) => acc + (c.resultados?.length || 0), 0);

  return (
    <SectionCard 
      title="Credenciais Vazadas" 
      icon={ShieldAlert} 
      count={totalLeaks}
      variant="danger"
    >
      <div className="space-y-4">
        {credenciais.map((cred, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="danger">{cred.tipo}</Badge>
              <span className="text-sm font-mono text-muted-foreground">{cred.valor}</span>
            </div>
            
            <div className="space-y-2">
              {cred.resultados?.map((r, j) => (
                <div key={j} className="bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-destructive">{r.host}</span>
                    <span className="text-[10px] text-muted-foreground">{r.file_date}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase">Login</span>
                      <p className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded inline-block">{r.login}</p>
                    </div>
                    
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase">Senha</span>
                      <p className="text-xs font-mono font-medium bg-muted px-1.5 py-0.5 rounded inline-block">{r.password}</p>
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-muted-foreground mt-2 truncate">URL: {r.url}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
