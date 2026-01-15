import { ConsultationView } from "@/components/consultation/ConsultationView";
import { ConsultaAPIResponse } from "@/types/consultation";

// Dados completos baseados no JSON fornecido
const mockData: ConsultaAPIResponse = {
  DATE: "2026-01-15T21:44:58.929Z",
  SERVICE: "synapse-cpf",
  AMOUNT_CHARGED: 0.05,
  SERVICE_RESPONSE: {
    cadastral: {
      cpf: "10965517640",
      cpfMask: "109.655.176-40",
      nome: "Filipe Marlloni Ferreira",
      nomeSocial: "",
      nomeUnico: true,
      indicativoCriminal: false,
      mae: { nome: "Cassiana da Silva Ferreira", cpf: null },
      pai: { nome: "N/a", cpf: null },
      sexo: "M",
      dataNasc: "21/06/1998",
      signo: "Câncer",
      signoChines: "Tigre",
      idade: 27,
      renda: "R$ 1.412,00",
      escolaridade: "MEDIO COMPLETO",
      classeSocial: "B",
      subClasseSocial: "B2",
      cns: 705005874468051,
      pis: 16343114158,
      ctps: { numero: 3112505, serie: 40 },
      flagObito2: false,
      rg: { numero: "n/a", orgao: "n/a", uf: "" },
    },
    credenciaisVazadas: [
      {
        tipo: "CPF",
        valor: "10965517640",
        resultados: [
          { url: "so.gov.br/login", login: "10965517640", password: "Pr1ez234@", host: "so.gov.br", file_date: "2024-01-01" },
          { url: "phpmyadmin.adm.tools/signon.php", login: "10965517640", password: "23AHOJ.mc", host: "phpmyadmin.adm.tools", file_date: "2024-01-01" },
          { url: "sso.acesso.gov.br/login", login: "10965517640", password: "Pr1ez234@", host: "sso.acesso.gov.br", file_date: "2024-01-01" }
        ]
      }
    ],
    fotos: [
      { cpf: "10965517640", foto: "https://reidasfotosbr.com/projeto25/pictures/10965517640/1054e36d6042f40d8aacaa28a2e3c7a916c2f3b4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260115%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260115T214445Z&X-Amz-Expires=3600&X-Amz-Signature=c9533b1ffc8e2e113667cf22a161ca16bea4aa87ef3c7954aacd164452caeb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject", classificacao: 100 }
    ],
    enderecos: [
      { endereco: "R AUGUSTUS WILLIAM PARISH", numero: 508, complemento: "C", bairro: "STA AMELIA", cidade: "BELO HORIZONTE", uf: "MG", cep: "31560410", classificacao: "B", dataInformacao: "2023-12-08T03:00:00.000Z", fonte: "SRS23;OUTRAS" },
      { endereco: "R ANA FERREIRA BRANDAO", numero: 130, complemento: "C", bairro: "JAQUELINE", cidade: "BELO HORIZONTE", uf: "MG", cep: "31748096", classificacao: "B", dataInformacao: "2019-09-12T03:00:00.000Z", fonte: "SRS23;OUTRAS" }
    ],
    telefones: [
      { telefone: "(31) 982773310", classificacao: "A+", data: "01/06/2023" },
      { telefone: "(31) 991332755", classificacao: "A1", data: "20/07/2023" },
      { telefone: "(31) 992989945", classificacao: "D", data: "03/05/2017" },
      { telefone: "(31) 34544623", classificacao: "A2", data: "06/04/2018" }
    ],
    emails: [
      { email: "marlloni123@gmail.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "filipemarlloni21@gmail.com", avaliacao: "POTENCIALMENTE BOM" },
      { email: "marlloni123@outlook.com", avaliacao: "POTENCIALMENTE BOM" }
    ],
    empregos: [
      { razao_social: "CASA & TINTA COMERCIAL LTDA", descricao_cbo: "AUXILIAR DE ESCRITORIO, EM GERAL", data_admissao: "2023-05-31T00:00:00", data_demissao: "2024-09-03T00:00:00", salario: "R$ 0,00" },
      { razao_social: "WS GRAFICA LTDA", descricao_cbo: "ATENDENTE COMERCIAL (AGENCIA POSTAL)", data_admissao: "2019-03-01T00:00:00", data_demissao: "2019-07-11T00:00:00", salario: "R$ 10,00" },
      { razao_social: "W R W POLIMENTOS LTDA", descricao_cbo: "AJUDANTE DE CONFECCAO", data_admissao: "2016-09-19T00:00:00", data_demissao: "2021-11-01T00:00:00", salario: "R$ 930,00" }
    ],
    sociedades: [
      { cnpj: "56780546000167", razao_social: "API FULL DESENVOLVIMENTO E LICENCIAMENTO DE SOFTWARES LTDA", qualificacao_socio_descricao: "Sócio-Administrador", situacao_cadastral: "ATIVA", dt_entrada: "15/08/2024" }
    ],
    parentes: [
      { nome: "Cassiana da Silva Ferreira", grau: "Mae" },
      { cpfParente: "09553418686", grau: "Sócio", nome: "Jean Paul Longuich Debortoli", idade: 35, renda: "R$ 3.497,00", foto: "https://reidasfotosbr.com/projeto25/pictures/9553418686/84ef7f5813d2c2d55a8336fbeb1fbb677ca0311b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260115%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260115T214453Z&X-Amz-Expires=3600&X-Amz-Signature=1ce04f8a9cec1a1517704b2802e6c7fc0dbadd155a6c40a8d3c9308f0418dc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject", cidade: "Belo Horizonte", uf: "MG", profissao: "Gerente de Loja e Supermercado" }
    ],
    relacionadosPorEndereco: [
      { cpf: "01698897693", nome: "Ana Paula de Oliveira Ferreira", sexo: "F", dataNasc: "04/08/1983", idade: 42, profissao: "TECNICO DE ENFERMAGEM", renda: "R$ 1.412,00", cidade: "Belo Horizonte", uf: "MG", foto: "https://reidasfotosbr.com/projeto25/pictures/1698897693/8dcb040130c3d7e4c14250fee4da91459678080e.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260115%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260115T214451Z&X-Amz-Expires=3600&X-Amz-Signature=9dcb8329f2cac076c7872a0073479feada3b31087b3bd2bd600d5c5ac39605f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" },
      { cpf: "06076482605", nome: "Marcela de Oliveira Ferreira", sexo: "F", dataNasc: "09/06/1981", idade: 44, renda: "R$ 5.933,00", cidade: "Belo Horizonte", uf: "MG", foto: "https://reidasfotosbr.com/projeto25/pictures/6076482605/998bb21813614c01bc969f0ed7f0b539131bec7c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260115%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260115T214451Z&X-Amz-Expires=3600&X-Amz-Signature=89b192a8f369c62a90a12fe71a78726d8ea82057f4e915fa0a71c2ed1680a21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" },
      { cpf: "10965518612", nome: "Darlen Antonio Ferreira", sexo: "M", dataNasc: "04/01/1994", idade: 32, profissao: "DIRIGENTE DO SERVICO PUBLICO ESTADUAL E DISTRITAL", renda: "R$ 5.738,00", cidade: "Belo Horizonte", uf: "MG" },
      { cpf: "02514690692", nome: "Warley Antonio Ferreira", sexo: "M", dataNasc: "23/11/1976", idade: 49, profissao: "MOTOCICLISTA NO TRANSPORTE DE DOCUMENTOS E PEQUENOS VOLUMES", renda: "R$ 1.686,00", cidade: "Belo Horizonte", uf: "MG", foto: "https://reidasfotosbr.com/projeto25/pictures/2514690692/266de5b8ddf653154c59e7c47e9e647069bcd89c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260115%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260115T214451Z&X-Amz-Expires=3600&X-Amz-Signature=7234ed05ead79d98513a29ab0c4ba685e0af0a03586c3168045f3234db94d4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" },
      { cpf: "07996023611", nome: "Alysson Carpeggiani Antonio Ferreira", sexo: "M", dataNasc: "04/09/1985", idade: 40, profissao: "ADMINISTRADOR", renda: "R$ 2.171,00", cidade: "Belo Horizonte", uf: "MG", foto: "https://reidasfotosbr.com/projeto25/pictures/7996023611/25d4fd3595ae2304eb8bb34264f1427efc7f7f0e.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260115%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260115T214451Z&X-Amz-Expires=3600&X-Amz-Signature=a1b94cf0b63391add7de4f7aededd744f264655e1e5e98d33a09ee6536175067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" },
      { cpf: "18604420649", nome: "Antonio Eustaquio Ferreira", sexo: "M", dataNasc: "18/03/1950", idade: 75, renda: "R$ 1.412,00", cidade: "Belo Horizonte", uf: "MG" }
    ],
    dividaAtiva: [
      { receita_principal: "R D Ativa - Simples Nacional - MEI", valor_consolidado: "2032.34", situacao_inscricao: "ATIVA NAO AJUIZAVEL NEGOCIADA NO SISPAR", data_inscricao: "2022-11-11T03:00:00.000Z", indicador_ajuizado: "NAO" },
      { receita_principal: "R D Ativa - Simples Nacional - MEI", valor_consolidado: "3555.33", situacao_inscricao: "ATIVA NAO AJUIZAVEL NEGOCIADA NO SISPAR", data_inscricao: "2025-03-17T03:00:00.000Z", indicador_ajuizado: "NAO" }
    ],
    comprasOnline: [
      { identity: 10965517640, email: "marlloni123@gmail.com", name: "Filipe Marlloni", telephone: "553199133275", product: "Blusa Moletom High Company Hoodie Logo Light Blue/Light Blue Drop 2", detail: "HS002.08-M", quantity: 1, price: "299.90", created_at: "2018-05-17T17:59:57.000Z" }
    ],
    propensoes: {
      cpf: 10965517640,
      csb8: 204,
      csb8_faixa: "ALTO",
      turismo: 1,
      luxo: 0,
      tvcabo: 1,
      bandalarga: 1,
      credimob: 1,
      comprainternet: 0,
      consignado: 0,
      clipremium: 0,
      mobile: 1,
      segauto: 1,
      finanauto: 0,
      credpessoal: 1,
      investidor: 1,
      tomador: 0,
      prevprivada: 1,
      internetbanking: 1,
      cartaocredito: 0,
      cartaoprime: 0,
      varioscartoes: 0,
      segsaude: 1,
      segvida: 1,
      segcasa: 1,
      celpos: 1,
      celpre: 1,
      highuser: 1,
      milhas: 1,
      cinefilo: 1,
      casapropria: 1,
      transportepublico: 1,
      jogaonline: 1,
      videogame: 1,
      leitordigital: 1,
      cacadesconto: 0,
      adiantado: 1,
      fitness: 0
    },
    beneficiosAuxilios: [
      { tipo_beneficio: "AUXILIO EMERGENCIAL", valorTotalRecebido: "1500.00", mes_inicio: "202005", mes_fim: "202011", uf: "MG", municipio: "BELO HORIZONTE", enquadramento: "EXTRACAD" }
    ],
    vacinas: [
      { vacina_nome: "COVID-19 PFIZER - COMIRNATY", vacina_dose: "1ª Dose", vacina_dt_aplicacao: "2022-01-14T03:00:00.000Z", vacina_fabricante: "PFIZER", vacina_lote: "FK8911", estab_nome_fantasia: "CENTRO DE SAUDE JARDIM EUROPA", estab_municipio: "BELO HORIZONTE", estab_uf: "MG" }
    ],
    meiDetalhado: [
      { dataAbertura: "19/06/2018", cnpj: "30741658000115", razaoSocial: "30.741.658 FILIPE MARLLONI FERREIRA", descricaoCnaePrincipal: "Impressão de material para uso publicitário", situacaoCadastral: "BAIXADA", descricaoMotivoSituacao: "EXTINCAO POR ENCERRAMENTO LIQUIDACAO VOLUNTARIA" }
    ]
  }
};

const Index = () => {
  return <ConsultationView data={mockData} />;
};

export default Index;
