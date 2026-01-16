import { ConsultationView } from "@/components/consultation/ConsultationView";
import { ConsultaAPIResponse } from "@/types/consultation";

// Dados completos baseados no JSON fornecido
const mockData: ConsultaAPIResponse = {
  DATE: "2026-01-16T17:33:08.737Z",
  SERVICE: "synapse-cpf",
  AMOUNT_CHARGED: 0.05,
  SERVICE_RESPONSE: {
    cadastral: {
      cpf: "12636619631",
      cpfMask: "126.366.196-31",
      nome: "Renata Soares da Silva",
      nomeSocial: "",
      nomeUnico: false,
      indicativoCriminal: false,
      mae: { nome: "Sebastiana Soares Dos Santos", cpf: null },
      pai: { nome: "Sebastiao Aparecido Soares", cpf: null },
      sexo: "F",
      dataNasc: "30/03/1996",
      signo: "Áries",
      signoChines: "Rato",
      idade: 29,
      renda: "R$ 1.412,00",
      escolaridade: "MEDIO COMPLETO",
      classeSocial: "B",
      subClasseSocial: "B2",
      cns: 709206293187934,
      pis: 15228444274,
      capitalSocialTotal: "150000",
      rg: {
        numero: "18957475",
        orgao: "SSP - SSP - SECRETARIA DE SEGURANCA PUBLICA",
        uf: "MG"
      },
      ctps: { numero: 6647203, serie: 30 },
      flagObito2: false,
      naturalidade: "BELO HORIZONTE/MG"
    },
    credenciaisVazadas: [
      {
        tipo: "USERNAME",
        valor: "cadastro",
        resultados: [
          { url: "www.tiktok.com/login/phone-or-email/email", login: "cadastro", password: "c080#c0nnt3ch#rre", host: "www.tiktok.com", file_date: "2024-06-01" },
          { url: "sso.acesso.gov.br/login", login: "cadastro", password: "gov|Ecoschin891721@", host: "sso.acesso.gov.br", file_date: "2025-08-01" },
          { url: "auth0.openai.com/u/signup/password", login: "cadastro", password: "Dukretli@99", host: "auth0.openai.com", file_date: "2025-03-01" },
          { url: "account.samsung.com/accounts/v1/CONCIERGE/signInGate", login: "cadastro", password: "volux126", host: "account.samsung.com", file_date: "2024-06-01" }
        ]
      }
    ],
    escolaridade: [
      { nivel: "MEDIO COMPLETO" },
      { nivel: "SUPERIOR COMPLETO" }
    ],
    fotos: [],
    enderecos: [
      { endereco: "R ABDENAGO LISBOA", numero: 40, complemento: "AP 403", bairro: "HELIOPOLIS", cidade: "BELO HORIZONTE", uf: "MG", cep: "31741600", classificacao: "B", dataInformacao: "2023-07-31T03:00:00.000Z", fonte: "SRS23;OUTRAS" },
      { endereco: "R ROBERTO LUCIO AROEIRA", numero: 631, complemento: "", bairro: "PLANALTO", cidade: "BELO HORIZONTE", uf: "MG", cep: "31720430", classificacao: "A", dataInformacao: "2023-02-25T03:00:00.000Z", fonte: "SRS23" },
      { endereco: "Avenida Paulista", numero: 726, bairro: "Bela Vista", cidade: "São Paulo", uf: "SP", cep: "01310100", classificacao: "A", dataInformacao: "2023-12-31T03:00:00.000Z", fonte: "OUTRAS" },
      { endereco: "Rua Roberto Lucio Aroeira 631", numero: 631, bairro: "Itapoã", cidade: "Belo Horizonte", uf: "MG", cep: "31710570", classificacao: "A", dataInformacao: "2023-12-31T03:00:00.000Z", fonte: "OUTRAS" },
      { endereco: "R ROBERTO LUCIO AROEIRA", numero: 631, complemento: "CASA", bairro: "PLANALTO", cidade: "BELO HORIZONTE", uf: "MG", cep: "31720430", classificacao: "A", dataInformacao: "2023-12-31T03:00:00.000Z", fonte: "OUTRAS" },
      { endereco: "RUA A", numero: 0, complemento: "", bairro: "MARCOS FREIRE II", cidade: "NOSSA SENHORA DO SOCORRO", uf: "SE", cep: "00000000", classificacao: "A", dataInformacao: "2023-12-31T03:00:00.000Z", fonte: "OUTRAS" }
    ],
    telefones: [
      { telefone: "(31) 996179780", classificacao: "A+", data: "01/06/2023" },
      { telefone: "(31) 992104391", classificacao: "A6", data: "20/07/2023" },
      { telefone: "(31) 984685242", classificacao: "A4", data: "01/06/2023" },
      { telefone: "(31) 991800184", classificacao: "A2", data: "27/07/2017" },
      { telefone: "(31) 985073853", classificacao: "A2", data: "27/07/2017" },
      { telefone: "(31) 993984182", classificacao: "A0", data: "01/01/2022" },
      { telefone: "(31) 993224929", classificacao: "A", data: "01/01/2024" },
      { telefone: "(21) 966544706", classificacao: "A", data: "01/01/2024" },
      { telefone: "(31) 987270736", classificacao: "A", data: "01/06/2023" },
      { telefone: "(31) 991616610", classificacao: "D", data: "01/01/2021" },
      { telefone: "(31) 994024429", classificacao: "D", data: "08/11/2017" },
      { telefone: "(31) 975655730", classificacao: "D", data: "08/11/2017" },
      { telefone: "(21) 966436387", classificacao: "", data: "Data Inválida" },
      { telefone: "(31) 25108502", classificacao: "A1", data: "01/06/2023" },
      { telefone: "(11) 66778899", classificacao: "A0", data: "01/01/2022" },
      { telefone: "(31) 25208066", classificacao: "A", data: "Data Inválida" },
      { telefone: "(31) 30802557", classificacao: "A", data: "Data Inválida" },
      { telefone: "(31) 36546532", classificacao: "B", data: "06/12/2018" },
      { telefone: "(31) 34960585", classificacao: "C", data: "01/01/2020" },
      { telefone: "(31) 34472372", classificacao: "C", data: "Data Inválida" }
    ],
    emails: [
      { email: "julianacarreiras23@outlook.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "mg9417@outlook.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "paolajuliana60@gmail.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "primarcela18lb@gmail.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "pripri1818pri@gmail.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "rayanesoares230508@gmail.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "recarvalho25@outlook.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "s.renatasoares@yahoo.com", avaliacao: "OTIMO" },
      { email: "rayanapatiele@gmail.com", avaliacao: "BOM" },
      { email: "renata.soares.7334@facebook.com", avaliacao: "BOM" },
      { email: "cadastro@contabilidadejomac.com.br", avaliacao: "POTENCIALMENTE BOM" },
      { email: "margotachon@hotmail.com", avaliacao: "POTENCIALMENTE BOM" }
    ],
    planos: [
      {
        empresa: "Vivo",
        plano: "Linha/Banda Larga",
        dataProduto: "23/10/2019",
        endereco: "Rua Roberto Lúcio Aroeira",
        cidade: "Belo Horizonte",
        uf: "MG",
        cep: "31720430",
        numero: "631",
        statusProduto: "Inativo"
      }
    ],
    profissoes: [
      { cbo: 252105, descricao: "ADMINISTRADOR" },
      { cbo: 252305, descricao: "SECRETARIA(O) EXECUTIVA(O)" },
      { cbo: 354125, descricao: "ASSISTENTE DE VENDAS" },
      { cbo: 411005, descricao: "AUXILIAR DE ESCRITORIO, EM GERAL" }
    ],
    empregos: [
      { cpf_funcionario: "12636619631", nome: "RENATA SOARES DA SILVA", cnpj_empregador: "33224254000142", razao_social: "MGS MINAS GERAIS ADMINISTRACAO E SERVICOS SA", salario: "R$ 25,78", data_admissao: "2024-10-21T00:00:00", data_demissao: "2024-12-16T00:00:00", cbo: 252305, descricao_cbo: "SECRETARIA(O) EXECUTIVA(O)" },
      { cpf_funcionario: "12636619631", nome: "RENATA SOARES DA SILVA", cnpj_empregador: "33438250026204", razao_social: "DROGARIAS PACHECO S/A", nome_fantasia: "DROGARIAS PACHECO", data_admissao: "2023-09-11T00:00:00", data_demissao: "2023-11-06T00:00:00", cbo: 411005, descricao_cbo: "AUXILIAR DE ESCRITORIO, EM GERAL" },
      { cpf_funcionario: "12636619631", nome: "RENATA SOARES DA SILVA", cnpj_empregador: "44984275000182", razao_social: "DNSC CONSTRUCAO COMERCIO E IMPORTACAO LTDA", nome_fantasia: "EFELS ENGENHARIA - SOLUCOES ELETRICAS EFICIENTES", salario: "R$ 13,02", data_admissao: "2022-08-01T00:00:00", data_demissao: "2023-01-06T00:00:00", cbo: 354125, descricao_cbo: "ASSISTENTE DE VENDAS" },
      { cpf_funcionario: "12636619631", nome: "RENATA SOARES DA SILVA", cnpj_empregador: "11861775000178", razao_social: "BATISTA & ASSOCIADOS AUDITORIA, GESTAO CONTABIL E PERICIA LTDA", faixa_renda: "DE 1.001 A 3.000", data_admissao: "2021-06-28T00:00:00", data_demissao: "2021-07-16T00:00:00" },
      { cpf_funcionario: "12636619631", nome: "RENATA SOARES DA SILVA", cnpj_empregador: "33438250026204", razao_social: "DROGARIAS PACHECO S/A", nome_fantasia: "DROGARIAS PACHECO", salario: "R$ 398,07", cbo: 411005, descricao_cbo: "AUXILIAR DE ESCRITORIO, EM GERAL" }
    ],
    relacionadosPorEndereco: [
      { cpf: "45522820691", nome: "Geraldo Magela Luzia da Silva", sexo: "M", dataNasc: "17/06/1963", idade: 62, profissao: "DIRIGENTE DO SERVICO PUBLICO ESTADUAL E DISTRITAL", renda: "R$ 26.475,00", cidade: "Belo Horizonte", uf: "MG", foto: "https://reidasfotosbr.com/projeto25/fotos_eleicao/45522820691/38eee70a3acc7b5ec7837f71183c9c2b8277d1ce.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=4af99ff0c88550dc8f96794fd7c1d9a263e8feb504c36b2cc029acb2491f32fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" },
      { cpf: "30563321768", nome: "Raimunda Martins Lobato da Silva", sexo: "F", dataNasc: "30/09/1948", idade: 77, profissao: "MESTRE (CONSTRUCAO CIVIL)", renda: "R$ 1.412,00", cidade: "Belo Horizonte", uf: "MG" },
      { cpf: "10415914620", nome: "Rita Franciele Soares da Silva", sexo: "F", dataNasc: "16/03/1992", idade: 33, profissao: "ADMINISTRADOR", renda: "R$ 1.577,00", cidade: "Belo Horizonte", uf: "MG" },
      { cpf: "05494383865", nome: "Arnaldo Bento da Silva", sexo: "M", dataNasc: "27/08/1963", idade: 62, profissao: "COMERCIANTE VAREJISTA", renda: "R$ 1.412,00", cidade: "São Paulo", uf: "SP", foto: "https://reidasfotosbr.com/2025-nov-23m/fotos_sp_23m/5494383865/f914597cd15a05d8b55119f0e1b2d8472cbad936.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=39cf35b0d2533e41f94aa609154ef1a7c43c07412b486a45f9685856f3f1da53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" },
      { cpf: "17609558842", nome: "Abrahao Miranda da Silva Junior", sexo: "M", dataNasc: "12/11/1974", idade: 51, profissao: "ESCREVENTE", renda: "R$ 16.081,00", cidade: "São Paulo", uf: "SP", foto: "https://reidasfotosbr.com/projeto25/pictures_sp_externo/17609558842/a1b1ed8a04fca538ce7d410da07bac775db6bb78.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=c63bd146c7622b6b98ea322a910ce128845896b57c3815f71c6ceb2d47f5318c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject" }
    ],
    parentes: [
      { nome: "Sebastiana Soares Dos Santos", grau: "Mae" },
      { nome: "Sebastiao Aparecido Soares", grau: "Pai" }
    ],
    placas: [
      {
        placa: "PXN1675",
        modelo: "VW/NOVO GOL TL MBV",
        renavam: 1082451255,
        anoFab: 2016,
        chassi: "9BWAB45U4HP000710",
        combustivel: "ALCOOL / GASOLINA",
        anoModelo: 2017,
        fotosCarro: [
          "https://reidasfotosbr.com/veiculos/fotos_veiculos_completo/veiculo_110001to120000/veiculo_113116/1_full.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=1d28c8cce88b5bc1e7fa911a68b549c1874649a3db0e39173b8daeb4e38a168a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
          "https://reidasfotosbr.com/veiculos/fotos_veiculos_completo/veiculo_110001to120000/veiculo_113116/2_full.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=21767aa42994678ec0b7e59f0c8fe2d2133c235e2b161ec7e275ccb2e7b212af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
          "https://reidasfotosbr.com/veiculos/fotos_veiculos_completo/veiculo_110001to120000/veiculo_113116/3_full.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=6366226e2b220c7f81072c39acdfab9c5d9b352af7e6d1ada165ce4e16922c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
          "https://reidasfotosbr.com/veiculos/fotos_veiculos_completo/veiculo_110001to120000/veiculo_113116/4_full.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=94b14e7f70eb343c9d47f22a4e9e799b69a2c617451d80e023ba7b70b577b69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
          "https://reidasfotosbr.com/veiculos/fotos_veiculos_completo/veiculo_110001to120000/veiculo_113116/5_full.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=M7VHRXKX90BMNLUF5LZP%2F20260116%2Fhel1%2Fs3%2Faws4_request&X-Amz-Date=20260116T173306Z&X-Amz-Expires=3600&X-Amz-Signature=67ca668b378fe695c32f9628aec0c7ab5e4e398b178a06aa5479c7307b7af1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
        ]
      }
    ],
    comprasOnline: [
      { identity: 12636619631, email: "julianacarreiras23@outlook.com", name: "Renata Soares Da Silva", telephone: "551166778899", product: "Climb the Top 10x3", detail: "Skokka.com ordem #125292667", quantity: 1, price: "10.00", created_at: "2021-04-27T22:30:10.000Z" },
      { identity: 12636619631, email: "rayanesoares230508@gmail.com", name: "Rayane Soares", telephone: "5531993984182", product: "Ingresso Feira do Bebe e Gestante 70ª Edição", detail: "via Sympla", quantity: 1, price: "10.50", created_at: "2021-08-02T17:09:51.000Z" },
      { identity: 12636619631, email: "mg9417@outlook.com", name: "Renata Soares Da Silva", product: "Rotativo Digital BH - Automóvel - 5 unidades", detail: "Pedido 2021091608350368666", quantity: 5, price: "4.40", created_at: "2021-09-16T14:35:04.000Z" },
      { identity: 12636619631, email: "pripri1818pri@gmail.com", name: "Renata Soares Da Silva", telephone: "551166778899", product: "Climb the Top 10x7", detail: "Skokka.com ordem #107559987", quantity: 1, price: "20.00", created_at: "2020-09-30T02:30:17.000Z" },
      { identity: 12636619631, email: "recarvalho25@outlook.com", name: "Renata Soares Da Silva", telephone: "551166778899", product: "Climb the Top 10x7", detail: "Skokka.com ordem #108550041", quantity: 1, price: "20.00", created_at: "2020-09-15T15:32:30.000Z" },
      { identity: 12636619631, email: "paolajuliana60@gmail.com", name: "Renata Soares Da Silva", telephone: "551166778899", product: "Climb the Top 3x3", detail: "Skokka.com ordem #114039115", quantity: 1, price: "14.00", created_at: "2020-12-18T18:09:17.000Z" }
    ],
    propensoes: {
      cpf: 12636619631,
      csb8: 710,
      csb8_faixa: "BAIXISSIMO RISCO",
      turismo: 1,
      luxo: 1,
      bandalarga: 1,
      credimob: 1,
      comprainternet: 1,
      clipremium: 1,
      mobile: 1,
      segauto: 1,
      finanauto: 1,
      credpessoal: 1,
      investidor: 1,
      prevprivada: 1,
      internetbanking: 1,
      cartaocredito: 1,
      cartaoprime: 1,
      segsaude: 1,
      segcasa: 1,
      celpos: 1,
      celpre: 1,
      highuser: 1,
      milhas: 1,
      cinefilo: 1,
      casapropria: 1,
      transportepublico: 1,
      jogaonline: 1,
      leitordigital: 1,
      cacadesconto: 1,
      fitness: 1
    },
    beneficiosAuxilios: [
      { tipo_beneficio: "AUXILIO EMERGENCIAL", mes_inicio: "202009", mes_fim: "202012", uf: "MG", municipio: "BELO HORIZONTE", cpf_beneficiario: 12636619631, enquadramento: "EXTRACAD", valorTotalRecebido: "1200.00" }
    ],
    vacinas: [
      { cpf: 12636619631, vacina_nome: "COVID-19 PFIZER - COMIRNATY", vacina_fabricante: "PFIZER", vacina_dose: "1ª Dose", vacina_lote: "FD7222", vacina_dt_aplicacao: "2021-08-22T03:00:00.000Z", vacina_grupo: "Pessoas de 18 a 64 anos", estab_nome_fantasia: "CENTRO DE SAUDE CAMPO ALEGRE", estab_uf: "MG", estab_municipio: "BELO HORIZONTE" },
      { cpf: 12636619631, vacina_nome: "COVID-19 PFIZER - COMIRNATY", vacina_fabricante: "PFIZER", vacina_dose: "2ª Dose", vacina_lote: "FH4751", vacina_dt_aplicacao: "2021-11-12T03:00:00.000Z", vacina_grupo: "Pessoas de 18 a 64 anos", estab_nome_fantasia: "CENTRO DE SAUDE CAMPO ALEGRE", estab_uf: "MG", estab_municipio: "BELO HORIZONTE" },
      { cpf: 12636619631, vacina_nome: "COVID-19 JANSSEN - Ad26.COV2.S", vacina_fabricante: "JANSSEN", vacina_dose: "Reforço", vacina_lote: "1875726", vacina_dt_aplicacao: "2022-05-10T03:00:00.000Z", vacina_grupo: "Pessoas de 18 a 64 anos", estab_nome_fantasia: "CENTRO DE SAUDE SAO TOMAS", estab_uf: "MG", estab_municipio: "BELO HORIZONTE" }
    ],
    rgs: [
      { cpf: 12636619631, rg: "18957475", orgaorg: "SSP - SSP - SECRETARIA DE SEGURANCA PUBLICA", ufrg: "MG", emissaorg: "1320462000000" }
    ],
    rais: [
      { cpf: 12636619631, cnpj: 33224254000142, ano_base: 2024, ano_exercicio: 2025, admissao: "2024-10-21T03:00:00.000Z", demissao: "2024-12-16T03:00:00.000Z", nome_fantasia: "", razao_social: "MGS MINAS GERAIS ADMINISTRACAO E SERVICOS SA" },
      { cpf: 12636619631, cnpj: 44984275000182, ano_base: 2023, ano_exercicio: 2024, admissao: "2022-08-01T03:00:00.000Z", demissao: "2023-01-06T03:00:00.000Z", nome_fantasia: "EFELS ENGENHARIA - SOLUCOES ELETRICAS EFICIENTES", razao_social: "DNSC CONSTRUCAO COMERCIO E IMPORTACAO LTDA" },
      { cpf: 12636619631, cnpj: 11861775000178, ano_base: 2021, ano_exercicio: 2022, admissao: "2021-06-28T03:00:00.000Z", demissao: null, nome_fantasia: "", razao_social: "BATISTA & ASSOCIADOS AUDITORIA, GESTAO CONTABIL E PERICIA LTDA" }
    ],
    meiDetalhado: [
      { dataAbertura: "28/10/2021", cnpj: "44057183000157", razaoSocial: "RENATA SOARES DA SILVA 12636619631", descricaoCnaePrincipal: "Preparação de documentos e serviços especializados de apoio administrativo não especificados anteriormente", situacaoCadastral: "BAIXADA", descricaoMotivoSituacao: "EXTINCAO POR ENCERRAMENTO LIQUIDACAO VOLUNTARIA" }
    ]
  }
};

const Index = () => {
  return <ConsultationView data={mockData} />;
};

export default Index;
