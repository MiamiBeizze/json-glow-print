/**
 * CONSULTA CADASTRAL - COMPONENTE COMPLETO
 * 
 * Para usar este componente:
 * 1. Copie este arquivo para seu projeto
 * 2. Adicione os estilos CSS abaixo no seu index.css
 * 3. Importe e use: <ConsultaCompleta data={seusDadosJSON} />
 */

import { ReactNode, useState } from "react";
import { 
  FileText, Printer, Calendar, User, MapPin, Phone, Mail, Briefcase, 
  Building2, AlertTriangle, Syringe, Gift, ShoppingBag, ShieldAlert,
  Heart, GraduationCap, Wallet, CheckCircle, AlertCircle, TrendingUp,
  Check, X, Package, LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================
// TYPES
// ============================================

export interface Endereco {
  logradouro?: string;
  endereco?: string;
  numero?: string | number;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
  latitude?: string | null;
  longitude?: string | null;
  classificacao?: string;
  dataInformacao?: string;
  fonte?: string;
}

export interface Mae {
  nome?: string;
  cpf?: string | null;
}

export interface Pai {
  nome?: string;
  cpf?: string | null;
}

export interface RG {
  numero?: string;
  orgao?: string;
  uf?: string;
}

export interface TituloEleitor {
  numero?: string;
  zona?: string;
  secao?: string;
}

export interface CTPS {
  numero?: number;
  serie?: number;
}

export interface Cadastral {
  cpf?: string;
  cpfMask?: string;
  nome?: string;
  nomeSocial?: string;
  nomeUnico?: boolean;
  indicativoCriminal?: boolean;
  mae?: Mae;
  pai?: Pai;
  sexo?: string;
  dataNasc?: string;
  signo?: string;
  signoChines?: string;
  idade?: number;
  renda?: string;
  escolaridade?: string;
  classeSocial?: string;
  subClasseSocial?: string;
  cns?: number;
  pis?: number;
  nis?: string;
  rg?: RG;
  tituloEleitor?: TituloEleitor;
  ctps?: CTPS;
  flagObito2?: boolean;
  dataObito2?: string | null;
}

export interface CredencialVazadaResultado {
  url?: string;
  login?: string;
  password?: string;
  host?: string;
  file_date?: string;
}

export interface CredencialVazada {
  tipo?: string;
  valor?: string;
  resultados?: CredencialVazadaResultado[];
}

export interface Foto {
  cpf?: string;
  foto?: string;
  classificacao?: number;
}

export interface Telefone {
  telefone?: string;
  ddd?: string;
  tel?: string;
  telfull?: number;
  tipo?: number | null;
  prioridade?: number;
  classificacao?: string;
  data?: string;
}

export interface Email {
  email?: string;
  avaliacao?: string;
  password?: string | null;
}

export interface DividaAtiva {
  cpf_cnpj?: string;
  tipo_devedor?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  numero_inscricao?: string;
  tipo_situacao_inscricao?: string;
  situacao_inscricao?: string;
  receita_principal?: string;
  data_inscricao?: string;
  indicador_ajuizado?: string;
  valor_consolidado?: string;
}

export interface Emprego {
  cpf_funcionario?: string;
  nome?: string;
  cnpj_empregador?: string;
  razao_social?: string;
  nome_fantasia?: string;
  salario?: string;
  tipo_salario?: number | null;
  data_admissao?: string | null;
  data_demissao?: string | null;
  cbo?: number;
  descricao_cbo?: string;
}

export interface RelacionadoPorEndereco {
  cpf?: string;
  nome?: string;
  sexo?: string;
  dataNasc?: string;
  idade?: number;
  profissao?: string | null;
  renda?: string;
  cidade?: string;
  uf?: string;
  endereco?: Endereco;
  foto?: string | null;
}

export interface Sociedade {
  cnpj_base?: number;
  cnpj?: string;
  razao_social?: string;
  situacao_cadastral?: string;
  tipo_socio?: number;
  nome_socio?: string;
  documento_socio?: number;
  qualificacao_socio?: number;
  qualificacao_socio_descricao?: string;
  dt_entrada?: string;
}

export interface CompraOnline {
  identity?: number;
  email?: string;
  name?: string;
  telephone?: string;
  product?: string;
  detail?: string;
  quantity?: number;
  price?: string;
  created_at?: string;
}

export interface Propensoes {
  cpf?: number;
  csb8?: number;
  csb8_faixa?: string;
  turismo?: number;
  luxo?: number;
  tvcabo?: number;
  bandalarga?: number;
  credimob?: number;
  comprainternet?: number;
  consignado?: number;
  clipremium?: number;
  mobile?: number;
  segauto?: number;
  finanauto?: number;
  credpessoal?: number;
  investidor?: number;
  tomador?: number;
  prevprivada?: number;
  internetbanking?: number;
  cartaocredito?: number;
  cartaoprime?: number;
  varioscartoes?: number;
  segsaude?: number;
  segvida?: number;
  segcasa?: number;
  celpos?: number;
  celpre?: number;
  highuser?: number;
  milhas?: number;
  cinefilo?: number;
  casapropria?: number;
  transportepublico?: number;
  jogaonline?: number;
  videogame?: number;
  leitordigital?: number;
  cacadesconto?: number;
  adiantado?: number;
  fitness?: number;
}

export interface BeneficioAuxilio {
  tipo_beneficio?: string;
  mes_inicio?: string;
  mes_fim?: string;
  uf?: string;
  municipio?: string;
  nis?: number;
  cpf_beneficiario?: number;
  enquadramento?: string;
  obs?: string;
  valorTotalRecebido?: string;
}

export interface Vacina {
  cpf?: number;
  vacina_nome?: string;
  vacina_fabricante?: string;
  vacina_nome_aplicador?: string;
  vacina_dose?: string;
  vacina_lote?: string;
  vacina_dt_aplicacao?: string;
  vacina_grupo?: string;
  estab_nome_fantasia?: string;
  estab_razao?: string;
  estab_uf?: string;
  estab_municipio?: string;
}

export interface MEIDetalhado {
  dataAbertura?: string;
  cnpj?: string;
  razaoSocial?: string;
  descricaoCnaePrincipal?: string;
  situacaoCadastral?: string;
  descricaoMotivoSituacao?: string;
  endereco?: Endereco;
  telefones?: string[];
  email?: string;
}

export interface ServiceResponse {
  cadastral?: Cadastral;
  credenciaisVazadas?: CredencialVazada[];
  fotos?: Foto[];
  enderecos?: Endereco[];
  telefones?: Telefone[];
  emails?: Email[];
  dividaAtiva?: DividaAtiva[];
  empregos?: Emprego[];
  relacionadosPorEndereco?: RelacionadoPorEndereco[];
  sociedades?: Sociedade[];
  comprasOnline?: CompraOnline[];
  propensoes?: Propensoes;
  beneficiosAuxilios?: BeneficioAuxilio[];
  vacinas?: Vacina[];
  meiDetalhado?: MEIDetalhado[];
}

export interface ConsultaAPIResponse {
  DATE?: string;
  SERVICE?: string;
  AMOUNT_CHARGED?: number;
  SERVICE_RESPONSE?: ServiceResponse;
}

// ============================================
// UTILITY COMPONENTS
// ============================================

// Badge Component
interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "danger" | "info" | "neutral";
  size?: "sm" | "md";
}

const Badge = ({ children, variant = "neutral", size = "md" }: BadgeProps) => {
  const variantStyles = {
    success: "bg-green-500/15 text-green-600",
    warning: "bg-yellow-500/15 text-yellow-600",
    danger: "bg-red-500/15 text-red-600",
    info: "bg-blue-500/15 text-blue-600",
    neutral: "bg-gray-500/15 text-gray-600",
  };
  const sizeStyles = {
    sm: "text-[10px] px-1.5 py-0.5",
    md: "text-xs px-2 py-0.5",
  };

  return (
    <span className={`${variantStyles[variant]} font-semibold rounded-full inline-flex items-center ${sizeStyles[size]}`}>
      {children}
    </span>
  );
};

// DataField Component
interface DataFieldProps {
  label: string;
  value?: string | number | null;
  className?: string;
  highlight?: boolean;
  size?: "sm" | "md" | "lg";
}

const DataField = ({ label, value, className = "", highlight = false, size = "md" }: DataFieldProps) => {
  const displayValue = value ?? "—";
  const isEmpty = !value;
  const sizeStyles = {
    sm: { label: "text-[10px]", value: "text-xs" },
    md: { label: "text-xs", value: "text-sm" },
    lg: { label: "text-xs", value: "text-base" },
  };

  return (
    <div className={className}>
      <dt className={`${sizeStyles[size].label} font-medium text-gray-500 uppercase tracking-wide mb-0.5`}>
        {label}
      </dt>
      <dd className={`${sizeStyles[size].value} font-medium ${isEmpty ? "text-gray-400" : highlight ? "text-blue-600 font-bold" : "text-gray-900"}`}>
        {displayValue}
      </dd>
    </div>
  );
};

// DataGrid Component
interface DataGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

const DataGrid = ({ children, columns = 3 }: DataGridProps) => {
  const colsClass = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };
  return <dl className={`grid ${colsClass[columns]} gap-4`}>{children}</dl>;
};

// SectionCard Component
interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  isEmpty?: boolean;
  emptyMessage?: string;
  className?: string;
  count?: number;
  variant?: "default" | "danger" | "warning" | "success" | "info";
}

const SectionCard = ({
  title,
  icon: Icon,
  children,
  isEmpty = false,
  emptyMessage = "Nenhum registro encontrado",
  className = "",
  count,
  variant = "default",
}: SectionCardProps) => {
  const variantStyles = {
    default: "bg-gradient-to-r from-blue-600 to-blue-500",
    danger: "bg-red-500",
    warning: "bg-yellow-500",
    success: "bg-green-500",
    info: "bg-cyan-500",
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ${className}`} style={{ pageBreakInside: 'avoid' }}>
      <div className={`${variantStyles[variant]} text-white px-4 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-white/10 rounded-lg">
            <Icon className="w-4 h-4" />
          </div>
          <h2 className="font-semibold text-sm tracking-wide">{title}</h2>
        </div>
        {count !== undefined && count > 0 && (
          <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {count}
          </span>
        )}
      </div>
      <div className="p-4">
        {isEmpty ? (
          <div className="flex items-center justify-center gap-2 py-6 text-gray-400">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{emptyMessage}</span>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

// ============================================
// SECTION COMPONENTS
// ============================================

// Header Component
interface ConsultationHeaderProps {
  cadastral?: Cadastral;
  fotos?: Foto[];
}

const ConsultationHeader = ({ cadastral, fotos }: ConsultationHeaderProps) => {
  const handlePrint = () => window.print();

  const currentDate = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const bestPhoto = fotos?.sort((a, b) => (b.classificacao || 0) - (a.classificacao || 0))[0];
  const photoUrl = bestPhoto?.foto || null;

  return (
    <header className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg mb-6 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="relative">
              {photoUrl ? (
                <img 
                  src={photoUrl} 
                  alt="Foto"
                  className="w-20 h-20 rounded-xl object-cover border-2 border-white/30 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center border-2 border-white/20 ${photoUrl ? 'hidden' : ''}`}>
                <User className="w-10 h-10 text-white/70" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <h1 className="text-xl font-bold">Consulta Cadastral</h1>
              </div>
              
              {cadastral?.nome && (
                <h2 className="text-2xl font-extrabold tracking-tight mt-1">
                  {cadastral.nome}
                </h2>
              )}
              
              {cadastral?.cpfMask && (
                <p className="text-white/80 font-medium mt-1">
                  CPF: {cadastral.cpfMask}
                </p>
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
      </div>
    </header>
  );
};

// Personal Data Section
const PersonalDataSection = ({ data }: { data?: Cadastral }) => {
  const isEmpty = !data || Object.keys(data).length === 0;
  const getSexoLabel = (sexo?: string) => sexo === 'M' ? 'Masculino' : sexo === 'F' ? 'Feminino' : sexo;

  return (
    <SectionCard title="Dados Pessoais" icon={User} isEmpty={isEmpty} emptyMessage="Dados pessoais não disponíveis">
      {data && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 pb-3 border-b border-gray-200">
            {data.indicativoCriminal !== undefined && (
              <Badge variant={data.indicativoCriminal ? "danger" : "success"}>
                {data.indicativoCriminal ? <><AlertTriangle className="w-3 h-3 mr-1" /> Indicativo Criminal</> : <><CheckCircle className="w-3 h-3 mr-1" /> Sem Indicativo Criminal</>}
              </Badge>
            )}
            {data.flagObito2 !== undefined && (
              <Badge variant={data.flagObito2 ? "danger" : "success"}>
                {data.flagObito2 ? "Óbito Registrado" : "Sem Óbito"}
              </Badge>
            )}
            {data.classeSocial && (
              <Badge variant="info">Classe {data.classeSocial}{data.subClasseSocial ? `/${data.subClasseSocial}` : ''}</Badge>
            )}
            {data.signo && (
              <Badge variant="neutral">{data.signo} {data.signoChines && `• ${data.signoChines}`}</Badge>
            )}
          </div>

          <DataGrid columns={4}>
            <DataField label="Data de Nascimento" value={data.dataNasc} />
            <DataField label="Idade" value={data.idade ? `${data.idade} anos` : undefined} />
            <DataField label="Sexo" value={getSexoLabel(data.sexo)} />
            <DataField label="Naturalidade" value={undefined} />
          </DataGrid>

          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <Heart className="w-4 h-4 text-pink-500 mt-0.5" />
              <DataField label="Nome da Mãe" value={data.mae?.nome} size="sm" />
            </div>
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-blue-500 mt-0.5" />
              <DataField label="Nome do Pai" value={data.pai?.nome !== 'N/a' ? data.pai?.nome : undefined} size="sm" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 pt-3 border-t border-gray-200">
            <div className="flex items-start gap-2">
              <Wallet className="w-4 h-4 text-green-500 mt-0.5" />
              <DataField label="Renda Estimada" value={data.renda} highlight size="sm" />
            </div>
            <div className="flex items-start gap-2">
              <GraduationCap className="w-4 h-4 text-blue-500 mt-0.5" />
              <DataField label="Escolaridade" value={data.escolaridade} size="sm" />
            </div>
            <DataField label="CNS" value={data.cns?.toString()} size="sm" />
            <DataField label="PIS" value={data.pis?.toString()} size="sm" />
          </div>

          {(data.rg?.numero !== 'n/a' || data.ctps?.numero) && (
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-200">
              {data.rg?.numero !== 'n/a' && (
                <DataField label="RG" value={`${data.rg?.numero || ''}`} size="sm" />
              )}
              {data.ctps?.numero && (
                <DataField label="CTPS" value={`${data.ctps.numero} / Série ${data.ctps.serie}`} size="sm" />
              )}
            </div>
          )}
        </div>
      )}
    </SectionCard>
  );
};

// Leaked Credentials Section
const LeakedCredentialsSection = ({ credenciais }: { credenciais?: CredencialVazada[] }) => {
  if (!credenciais || credenciais.length === 0) return null;
  const totalLeaks = credenciais.reduce((acc, c) => acc + (c.resultados?.length || 0), 0);

  return (
    <SectionCard title="Credenciais Vazadas" icon={ShieldAlert} count={totalLeaks} variant="danger">
      <div className="space-y-4">
        {credenciais.map((cred, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="danger">{cred.tipo}</Badge>
              <span className="text-sm font-mono text-gray-500">{cred.valor}</span>
            </div>
            <div className="space-y-2">
              {cred.resultados?.map((r, j) => (
                <div key={j} className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-red-600">{r.host}</span>
                    <span className="text-[10px] text-gray-500">{r.file_date}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase">Login</span>
                      <p className="text-xs font-mono bg-gray-100 px-1.5 py-0.5 rounded inline-block">{r.login}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase">Senha</span>
                      <p className="text-xs font-mono font-medium bg-gray-100 px-1.5 py-0.5 rounded inline-block">{r.password}</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2 truncate">URL: {r.url}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

// Related By Address Section
const RelatedByAddressSection = ({ relacionados }: { relacionados?: RelacionadoPorEndereco[] }) => {
  if (!relacionados || relacionados.length === 0) return null;

  const formatCPF = (cpf?: string) => {
    if (!cpf) return null;
    const cleaned = cpf.replace(/\D/g, "");
    if (cleaned.length !== 11) return cpf;
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  return (
    <SectionCard title="Relacionados por Endereço" icon={MapPin} count={relacionados.length}>
      <div className="grid grid-cols-3 gap-3">
        {relacionados.map((rel, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-shrink-0">
              {rel.foto ? (
                <img src={rel.foto} alt={rel.nome || "Foto"} className="w-12 h-12 rounded-lg object-cover border border-gray-200 shadow-sm"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
                />
              ) : null}
              <div className={`w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center border border-blue-200 ${rel.foto ? 'hidden' : ''}`}>
                <User className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-gray-900 truncate">{rel.nome || "N/A"}</h4>
              {rel.cpf && <p className="text-[10px] text-gray-500">CPF: {formatCPF(rel.cpf)}</p>}
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 text-[10px] text-gray-500">
                {rel.idade && <span>{rel.idade} anos</span>}
                {rel.sexo && <span>• {rel.sexo === 'M' ? 'Masc' : 'Fem'}</span>}
              </div>
              {rel.profissao && <p className="text-[10px] text-gray-500 truncate mt-0.5">{rel.profissao}</p>}
              {rel.renda && <p className="text-[10px] font-semibold text-green-600 mt-0.5">{rel.renda}</p>}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

// Online Purchases Section
const OnlinePurchasesSection = ({ compras }: { compras?: CompraOnline[] }) => {
  if (!compras || compras.length === 0) return null;

  const formatDate = (date?: string) => {
    if (!date) return undefined;
    try { return new Date(date).toLocaleDateString("pt-BR"); } catch { return date; }
  };

  const formatCurrency = (value?: string) => {
    if (!value) return undefined;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(value));
  };

  return (
    <SectionCard title="Compras Online" icon={Package} count={compras.length}>
      <div className="space-y-3">
        {compras.map((compra, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-gray-900 line-clamp-2">{compra.product}</h4>
              {compra.detail && <p className="text-xs text-gray-500 mt-0.5">{compra.detail}</p>}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Qtd: {compra.quantity}</span>
                  <span>•</span>
                  <span>{formatDate(compra.created_at)}</span>
                </div>
                <span className="font-bold text-green-600">{formatCurrency(compra.price)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

// Propensities Section
const propensityLabels: Record<string, string> = {
  turismo: "Turismo", luxo: "Produtos de Luxo", tvcabo: "TV a Cabo", bandalarga: "Banda Larga",
  credimob: "Crédito Imobiliário", comprainternet: "Compra pela Internet", consignado: "Crédito Consignado",
  mobile: "Mobile", segauto: "Seguro Auto", credpessoal: "Crédito Pessoal", investidor: "Investidor",
  prevprivada: "Previdência Privada", internetbanking: "Internet Banking", cartaocredito: "Cartão de Crédito",
  segsaude: "Seguro Saúde", segvida: "Seguro Vida", segcasa: "Seguro Casa", celpos: "Celular Pós",
  celpre: "Celular Pré", highuser: "Heavy User", milhas: "Programa de Milhas", cinefilo: "Cinéfilo",
  casapropria: "Casa Própria", transportepublico: "Transporte Público", jogaonline: "Jogos Online",
  videogame: "Videogame", leitordigital: "Leitor Digital", adiantado: "Paga Adiantado", fitness: "Fitness",
};

const PropensitiesSection = ({ propensoes }: { propensoes?: Propensoes }) => {
  if (!propensoes) return null;

  const entries = Object.entries(propensoes).filter(([key]) => key !== 'cpf' && key !== 'csb8' && key !== 'csb8_faixa' && propensityLabels[key]);
  const positives = entries.filter(([_, value]) => value === 1);
  const negatives = entries.filter(([_, value]) => value === 0);

  return (
    <SectionCard title="Propensões de Consumo" icon={TrendingUp}>
      <div className="space-y-4">
        {propensoes.csb8_faixa && (
          <div className="flex items-center justify-center gap-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-sm text-gray-600">Score CSB8:</span>
            <Badge variant={propensoes.csb8_faixa === 'ALTO' ? 'success' : 'neutral'}>
              {propensoes.csb8} - {propensoes.csb8_faixa}
            </Badge>
          </div>
        )}

        {positives.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500" /> Propenso a
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {positives.map(([key]) => (
                <span key={key} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  {propensityLabels[key]}
                </span>
              ))}
            </div>
          </div>
        )}

        {negatives.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
              <X className="w-3 h-3 text-red-500" /> Não propenso a
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {negatives.map(([key]) => (
                <span key={key} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {propensityLabels[key]}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionCard>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

interface ConsultaCompletaProps {
  data: ConsultaAPIResponse;
}

export const ConsultaCompleta = ({ data }: ConsultaCompletaProps) => {
  const response = data.SERVICE_RESPONSE;
  if (!response) return null;

  const formatDate = (date?: string | null) => {
    if (!date) return undefined;
    try {
      if (date.includes('/')) return date;
      return new Date(date).toLocaleDateString("pt-BR");
    } catch { return date; }
  };

  const formatCurrency = (value?: string) => {
    if (!value) return undefined;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat(value));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 print:p-0 print:bg-white">
      <div className="w-[210mm] mx-auto">
        <ConsultationHeader cadastral={response.cadastral} fotos={response.fotos} />

        <div className="space-y-4">
          <PersonalDataSection data={response.cadastral} />
          <LeakedCredentialsSection credenciais={response.credenciaisVazadas} />

          {/* Endereços */}
          {response.enderecos && response.enderecos.length > 0 && (
            <SectionCard title="Endereços" icon={MapPin} count={response.enderecos.length}>
              <div className="space-y-3">
                {response.enderecos.slice(0, 4).map((end, i) => (
                  <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'pt-3 border-t border-gray-200' : ''}`}>
                    <Badge variant={end.classificacao === 'A' ? 'success' : end.classificacao === 'B' ? 'info' : 'neutral'} size="sm">
                      {end.classificacao || '—'}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {end.endereco || end.logradouro}, {end.numero}{end.complemento ? ` - ${end.complemento}` : ''}
                      </p>
                      <p className="text-xs text-gray-500">{end.bairro} • {end.cidade}/{end.uf} • CEP: {end.cep}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Telefones e Emails */}
          <div className="grid grid-cols-2 gap-4">
            {response.telefones && response.telefones.length > 0 && (
              <SectionCard title="Telefones" icon={Phone} count={response.telefones.length}>
                <div className="space-y-2">
                  {response.telefones.slice(0, 6).map((tel, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-200 last:border-0">
                      <div>
                        <span className="text-sm font-medium">{tel.telefone}</span>
                        <span className="text-[10px] text-gray-500 ml-2">{tel.data}</span>
                      </div>
                      <Badge variant={tel.classificacao?.startsWith('A') ? 'success' : 'neutral'} size="sm">{tel.classificacao}</Badge>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
            {response.emails && response.emails.length > 0 && (
              <SectionCard title="E-mails" icon={Mail} count={response.emails.length}>
                <div className="space-y-2">
                  {response.emails.map((email, i) => (
                    <div key={i} className="py-1.5 border-b border-gray-200 last:border-0">
                      <p className="text-sm font-medium break-all">{email.email}</p>
                      <Badge variant={email.avaliacao?.includes('OTIMO') ? 'success' : 'info'} size="sm">{email.avaliacao}</Badge>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}
          </div>

          <RelatedByAddressSection relacionados={response.relacionadosPorEndereco} />

          {/* Empregos */}
          {response.empregos && response.empregos.length > 0 && (
            <SectionCard title="Histórico de Empregos" icon={Briefcase} count={response.empregos.length}>
              <div className="space-y-3">
                {response.empregos.map((emp, i) => (
                  <div key={i} className={i > 0 ? 'pt-3 border-t border-gray-200' : ''}>
                    <h4 className="font-semibold text-sm">{emp.razao_social}</h4>
                    <p className="text-xs text-gray-500">{emp.descricao_cbo}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs">
                      <span>Admissão: {formatDate(emp.data_admissao) || '—'}</span>
                      <span>Demissão: {formatDate(emp.data_demissao) || 'Atual'}</span>
                      {emp.salario && emp.salario !== 'R$ 0,00' && <span className="font-medium text-green-600">{emp.salario}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Sociedades */}
          {response.sociedades && response.sociedades.length > 0 && (
            <SectionCard title="Sociedades" icon={Building2} count={response.sociedades.length}>
              <div className="space-y-3">
                {response.sociedades.map((soc, i) => (
                  <div key={i} className={i > 0 ? 'pt-3 border-t border-gray-200' : ''}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-sm">{soc.razao_social}</h4>
                        <p className="text-xs text-gray-500">CNPJ: {soc.cnpj}</p>
                      </div>
                      <Badge variant={soc.situacao_cadastral === 'ATIVA' ? 'success' : 'warning'} size="sm">{soc.situacao_cadastral}</Badge>
                    </div>
                    <div className="flex gap-4 mt-1 text-xs text-gray-500">
                      <span>{soc.qualificacao_socio_descricao}</span>
                      <span>Entrada: {soc.dt_entrada}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* MEI */}
          {response.meiDetalhado && response.meiDetalhado.length > 0 && (
            <SectionCard title="MEI" icon={ShoppingBag} count={response.meiDetalhado.length}>
              <div className="space-y-3">
                {response.meiDetalhado.map((mei, i) => (
                  <div key={i} className={i > 0 ? 'pt-3 border-t border-gray-200' : ''}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-sm">{mei.razaoSocial}</h4>
                        <p className="text-xs text-gray-500">CNPJ: {mei.cnpj}</p>
                        <p className="text-xs text-gray-500">{mei.descricaoCnaePrincipal}</p>
                      </div>
                      <Badge variant={mei.situacaoCadastral === 'ATIVA' ? 'success' : 'danger'} size="sm">{mei.situacaoCadastral}</Badge>
                    </div>
                    {mei.descricaoMotivoSituacao && <p className="text-[10px] text-gray-500 mt-1">{mei.descricaoMotivoSituacao}</p>}
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Dívida Ativa */}
          {response.dividaAtiva && response.dividaAtiva.length > 0 && (
            <SectionCard title="Dívida Ativa" icon={AlertTriangle} count={response.dividaAtiva.length} variant="danger">
              <div className="space-y-3">
                {response.dividaAtiva.map((div, i) => (
                  <div key={i} className={i > 0 ? 'pt-3 border-t border-gray-200' : ''}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{div.receita_principal}</p>
                        <p className="text-xs text-gray-500 line-clamp-2">{div.situacao_inscricao}</p>
                        <p className="text-[10px] text-gray-500 mt-1">
                          Inscrição: {formatDate(div.data_inscricao)} • {div.indicador_ajuizado === 'NAO' ? 'Não Ajuizado' : 'Ajuizado'}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-red-600 ml-4">{formatCurrency(div.valor_consolidado)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          <OnlinePurchasesSection compras={response.comprasOnline} />
          <PropensitiesSection propensoes={response.propensoes} />

          {/* Benefícios e Vacinas */}
          <div className="grid grid-cols-2 gap-4">
            {response.beneficiosAuxilios && response.beneficiosAuxilios.length > 0 && (
              <SectionCard title="Benefícios/Auxílios" icon={Gift} count={response.beneficiosAuxilios.length}>
                {response.beneficiosAuxilios.map((b, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{b.tipo_beneficio}</p>
                      <p className="text-xs text-gray-500">{b.mes_inicio} - {b.mes_fim}</p>
                      <p className="text-[10px] text-gray-500">{b.municipio}/{b.uf}</p>
                    </div>
                    <span className="font-bold text-green-600">{formatCurrency(b.valorTotalRecebido)}</span>
                  </div>
                ))}
              </SectionCard>
            )}
            {response.vacinas && response.vacinas.length > 0 && (
              <SectionCard title="Vacinas" icon={Syringe} count={response.vacinas.length}>
                {response.vacinas.map((v, i) => (
                  <div key={i} className={i > 0 ? 'pt-2 mt-2 border-t border-gray-200' : ''}>
                    <p className="text-sm font-medium">{v.vacina_nome}</p>
                    <p className="text-xs text-gray-500">{v.vacina_dose} • {formatDate(v.vacina_dt_aplicacao)}</p>
                    <p className="text-[10px] text-gray-500">{v.estab_nome_fantasia}</p>
                  </div>
                ))}
              </SectionCard>
            )}
          </div>
        </div>

        <footer className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Documento gerado automaticamente • Informações confidenciais</p>
        </footer>
      </div>
    </div>
  );
};

export default ConsultaCompleta;

/*
============================================
CSS PARA ADICIONAR NO SEU index.css:
============================================

@media print {
  @page {
    size: A4;
    margin: 10mm;
  }

  html, body {
    width: 210mm;
    background: white !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .no-print {
    display: none !important;
  }
}

*/
