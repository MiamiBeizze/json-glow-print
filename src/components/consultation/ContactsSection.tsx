import { MapPin, Phone, Mail } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { DataField } from "./DataField";
import { Contato } from "@/types/consultation";

interface ContactsSectionProps {
  contatos?: Contato[];
}

export const ContactsSection = ({ contatos }: ContactsSectionProps) => {
  const isEmpty = !contatos || contatos.length === 0;

  const formatAddress = (endereco?: Contato["endereco"]) => {
    if (!endereco) return null;
    const parts = [
      endereco.logradouro,
      endereco.numero && `nº ${endereco.numero}`,
      endereco.complemento,
      endereco.bairro,
      endereco.cidade && endereco.uf && `${endereco.cidade}/${endereco.uf}`,
      endereco.cep && `CEP: ${endereco.cep}`,
    ].filter(Boolean);
    return parts.join(", ");
  };

  return (
    <SectionCard
      title="Contatos"
      icon={Phone}
      isEmpty={isEmpty}
      emptyMessage="Nenhum contato encontrado"
    >
      {contatos && (
        <div className="space-y-4">
          {contatos.map((contato, index) => (
            <div
              key={index}
              className={`${index > 0 ? "pt-4 border-t border-divider" : ""}`}
            >
              {contato.endereco && (
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-medium text-data-label uppercase tracking-wide block mb-1">
                      Endereço
                    </span>
                    <p className="text-sm text-data-value">
                      {formatAddress(contato.endereco) || "Endereço não informado"}
                    </p>
                    {contato.endereco.cidade && contato.endereco.uf && !formatAddress(contato.endereco) && (
                      <p className="text-sm text-data-value">
                        {contato.endereco.cidade}/{contato.endereco.uf}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contato.telefones && contato.telefones.length > 0 && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-data-label uppercase tracking-wide block mb-1">
                        Telefones
                      </span>
                      <div className="space-y-1">
                        {contato.telefones.map((tel, i) => (
                          <p key={i} className="text-sm text-data-value">{tel}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {contato.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-data-label uppercase tracking-wide block mb-1">
                        E-mail
                      </span>
                      <p className="text-sm text-data-value break-all">{contato.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
};
