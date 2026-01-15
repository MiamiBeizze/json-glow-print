export interface Endereco {
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
}

export interface Contato {
  endereco?: Endereco;
  telefones?: string[];
  email?: string;
}

export interface Veiculo {
  placa?: string;
  renavam?: string;
  chassi?: string;
  marca?: string;
  modelo?: string;
  anoFabricacao?: string;
  anoModelo?: string;
  cor?: string;
  combustivel?: string;
  situacao?: string;
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

export interface ConsultaResult {
  dadosPessoais?: DadosPessoais;
  contatos?: Contato[];
  veiculos?: Veiculo[];
  cin?: CIN;
  vazamentos?: Vazamento[];
  planosSaude?: PlanoSaude[];
  energias?: Energia[];
  empresasRelacionadas?: EmpresaRelacionada[];
  aeronaves?: Aeronave[];
  processos?: Processo[];
  vinculosPorProcessos?: VinculoProcesso[];
}
