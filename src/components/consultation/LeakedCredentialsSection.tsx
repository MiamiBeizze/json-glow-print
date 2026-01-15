import { ShieldAlert, Eye, EyeOff, Copy, Check } from "lucide-react";
import { useState } from "react";
import { SectionCard } from "./SectionCard";
import { Badge } from "./Badge";
import { CredencialVazada } from "@/types/consultation";

interface LeakedCredentialsSectionProps {
  credenciais?: CredencialVazada[];
}

export const LeakedCredentialsSection = ({ credenciais }: LeakedCredentialsSectionProps) => {
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);

  if (!credenciais || credenciais.length === 0) return null;

  const totalLeaks = credenciais.reduce((acc, c) => acc + (c.resultados?.length || 0), 0);

  const togglePassword = (key: string) => {
    setShowPasswords(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

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
              {cred.resultados?.map((r, j) => {
                const key = `${i}-${j}`;
                return (
                  <div key={j} className="bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-destructive">{r.host}</span>
                      <span className="text-[10px] text-muted-foreground">{r.file_date}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-[10px] text-muted-foreground uppercase">Login</span>
                        <div className="flex items-center gap-1">
                          <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{r.login}</code>
                          <button 
                            onClick={() => copyToClipboard(r.login || '', `login-${key}`)}
                            className="p-1 hover:bg-muted rounded"
                          >
                            {copied === `login-${key}` ? <Check className="w-3 h-3 text-success" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-[10px] text-muted-foreground uppercase">Senha</span>
                        <div className="flex items-center gap-1">
                          <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                            {showPasswords[key] ? r.password : '••••••••'}
                          </code>
                          <button 
                            onClick={() => togglePassword(key)}
                            className="p-1 hover:bg-muted rounded"
                          >
                            {showPasswords[key] ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          </button>
                          <button 
                            onClick={() => copyToClipboard(r.password || '', `pass-${key}`)}
                            className="p-1 hover:bg-muted rounded"
                          >
                            {copied === `pass-${key}` ? <Check className="w-3 h-3 text-success" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[10px] text-muted-foreground mt-2 truncate">URL: {r.url}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
