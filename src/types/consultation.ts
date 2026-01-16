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

export interface PoderAquisitivo {
  poder?: string;
  nota?: string;
  renda?: string;
  faixa?: string;
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
  capitalSocialTotal?: string;
  poderAquisitivo?: PoderAquisitivo;
  naturalidade?: string;
  rg?: RG;
  tituloEleitor?: TituloEleitor;
  ctps?: CTPS;
  flagObito2?: boolean;
  dataObito2?: string | null;
  statusRfObito2?: string | null;
  gruposEspeciais?: string[];
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

export interface Escolaridade {
  nivel?: string;
}

export interface Genitor {
  cpf?: number;
  relacao?: string;
  nome?: string;
  cpf_genitor?: string | null;
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
  fotoWhatsapp?: string | null;
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
  entidade_responsavel?: string | null;
  unidade_inscricao?: string | null;
  numero_inscricao?: string;
  tipo_situacao_inscricao?: string;
  situacao_inscricao?: string;
  tipo_credito?: string | null;
  receita_principal?: string;
  data_inscricao?: string;
  indicador_ajuizado?: string;
  valor_consolidado?: string;
}

export interface Profissao {
  cbo?: number;
  descricao?: string;
}

export interface Emprego {
  cpf_funcionario?: string;
  nome?: string;
  cnpj_empregador?: string;
  razao_social?: string;
  nome_fantasia?: string;
  salario?: string;
  tipo_salario?: number | null;
  faixa_renda?: string | null;
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

export interface Parente {
  cpfParente?: string;
  nome?: string;
  grau?: string;
  sexo?: string | null;
  dataNasc?: string;
  idade?: number | null;
  renda?: string;
  foto?: string | null;
  cidade?: string;
  uf?: string;
  profissao?: string;
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
  pais?: string;
  representante_cpf?: string;
  representante_nome?: string;
  representante_qualificacao?: number;
  faixa_etaria?: number;
}

export interface ContatoComercial {
  cnpj?: string;
  razaoSocial?: string;
  endereco?: Endereco;
  telefones?: string[];
  email?: string;
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
  cpf_responsavel?: string;
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

export interface Politica {
  bens?: any[];
  candidatos?: any[];
  filiacoes?: any[];
}

// Legacy interfaces for backwards compatibility
export interface Contato {
  endereco?: Endereco;
  telefones?: string[];
  email?: string;
}

export interface Veiculo {
  placa?: string;
  renavam?: string | number;
  chassi?: string;
  marca?: string;
  modelo?: string;
  anoFab?: number;
  anoFabricacao?: string | number;
  anoModelo?: string | number;
  cor?: string;
  combustivel?: string;
  situacao?: string;
  fotosCarro?: string[];
}

export interface Plano {
  empresa?: string;
  plano?: string;
  valor?: string;
  tecnologia?: string;
  tipoProduto?: string;
  dataProduto?: string;
  endereco?: string;
  cidade?: string;
  uf?: string;
  cep?: string | number;
  numero?: string;
  complemento?: string;
  contrato?: string;
  statusProduto?: string;
}

export interface RGDetalhado {
  cpf?: number;
  rg?: string;
  orgaorg?: string;
  ufrg?: string;
  emissaorg?: string;
}

export interface RAIS {
  cpf?: number;
  cnpj?: number;
  ano_base?: number;
  ano_exercicio?: number;
  admissao?: string;
  demissao?: string | null;
  demissao_tratada?: string;
  nome_fantasia?: string;
  razao_social?: string;
}

export interface CIN {
  numero?: string;
  dataEmissao?: string;
  orgaoEmissor?: string;
}

export interface Vazamento {
  fonte?: string;
  data?: string;
  tipo?: string;
  dados?: string[];
}

export interface PlanoSaude {
  operadora?: string;
  plano?: string;
  numeroCarteira?: string;
  dataAdesao?: string;
  situacao?: string;
}

export interface Energia {
  fornecedor?: string;
  numeroInstalacao?: string;
  endereco?: string;
  situacao?: string;
}

export interface EmpresaRelacionada {
  cnpj?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  cargo?: string;
  participacao?: string;
  dataEntrada?: string;
  dataSaida?: string;
  situacao?: string;
}

export interface Aeronave {
  matricula?: string;
  fabricante?: string;
  modelo?: string;
  anoFabricacao?: string;
  situacao?: string;
  categoria?: string;
  proprietario?: string;
  operador?: string;
}

// CNH - Carteira Nacional de Habilitação
export interface CNH {
  numero?: string;
  registro?: string;
  categoria?: string;
  dataEmissao?: string;
  dataValidade?: string;
  primeiraHabilitacao?: string;
  uf?: string;
  situacao?: string;
  restricoes?: string[];
  observacoes?: string;
}

// Drone
export interface Drone {
  numero?: string;
  fabricante?: string;
  modelo?: string;
  numeroSerie?: string;
  peso?: string;
  categoria?: string;
  situacao?: string;
  dataRegistro?: string;
}

export interface Processo {
  numero?: string;
  tribunal?: string;
  vara?: string;
  assunto?: string;
  classe?: string;
  dataDistribuicao?: string;
  situacao?: string;
  polo?: string;
}

export interface VinculoProcesso {
  nome?: string;
  documento?: string;
  tipo?: string;
  polo?: string;
}

export interface DadosPessoais {
  nome?: string;
  cpf?: string;
  dataNascimento?: string;
  idade?: number;
  sexo?: string;
  nomeMae?: string;
  nomePai?: string;
  situacaoCadastral?: string;
  dataInscricao?: string;
  digitoVerificador?: string;
}

// Chaves PIX
export interface ChavePix {
  tipo?: string;
  chave?: string;
  banco?: string;
  dataCriacao?: string;
  status?: string;
}

// Contas Bancárias
export interface ContaBanco {
  banco?: string;
  codigoBanco?: string;
  agencia?: string;
  conta?: string;
  tipoConta?: string;
  status?: string;
  dataAbertura?: string;
}

// Viagens
export interface Viagem {
  destino?: string;
  origem?: string;
  dataIda?: string;
  dataVolta?: string;
  companhia?: string;
  tipoViagem?: string;
  localizador?: string;
  status?: string;
}

// Documentos Base64
export interface DocBase64 {
  tipo?: string;
  descricao?: string;
  base64?: string;
  url?: string;
  dataEmissao?: string;
}

export interface ServiceResponse {
  cadastral?: Cadastral;
  credenciaisVazadas?: CredencialVazada[];
  escolaridade?: Escolaridade[];
  genitores?: Genitor[];
  fotos?: Foto[];
  extraFotos?: Foto[];
  enderecos?: Endereco[];
  telefones?: Telefone[];
  emails?: Email[];
  dividaAtiva?: DividaAtiva[];
  profissoes?: Profissao[];
  empregos?: Emprego[];
  relacionadosPorEndereco?: RelacionadoPorEndereco[];
  parentes?: Parente[];
  sociedades?: Sociedade[];
  contatosComerciais?: ContatoComercial[];
  comprasOnline?: CompraOnline[];
  propensoes?: Propensoes;
  beneficiosAuxilios?: BeneficioAuxilio[];
  vacinas?: Vacina[];
  meiDetalhado?: MEIDetalhado[];
  politica?: Politica;
  // Veículos e Planos
  placas?: Veiculo[];
  veiculos?: Veiculo[];
  planos?: Plano[];
  planosMoveis?: Plano[];
  // Documentos
  rgs?: RGDetalhado[];
  rais?: RAIS[];
  cin?: CIN;
  cnh?: CNH;
  // Outros dados
  assinaturas?: any[];
  ppe?: any[];
  outrosNomes?: any[];
  chavesPix?: ChavePix[];
  contasBancos?: ContaBanco[];
  universitarios?: any[];
  emprestimos?: any[];
  beneficios?: any[];
  dadosConselho?: any[];
  imoveisSp?: any[];
  pagamentosAuxilioEmergencial?: any[];
  certidaoObito?: any;
  irpf?: any[];
  estrangeiro?: any;
  sisu?: any[];
  prouni?: any[];
  inssSiape?: any[];
  linkedin?: any[];
  drones?: Drone[];
  ccf?: any[];
  viagens?: Viagem[];
  docsBase64?: DocBase64[];
  // Legacy/Other
  contatos?: Contato[];
  vazamentos?: Vazamento[];
  planosSaude?: PlanoSaude[];
  energias?: Energia[];
  empresasRelacionadas?: EmpresaRelacionada[];
  aeronaves?: Aeronave[];
  processos?: Processo[];
  vinculosPorProcessos?: VinculoProcesso[];
}

export interface ConsultaAPIResponse {
  DATE?: string;
  SERVICE?: string;
  AMOUNT_CHARGED?: number;
  SERVICE_RESPONSE?: ServiceResponse;
}

// Alias for backwards compatibility
export type ConsultaResult = ServiceResponse;
