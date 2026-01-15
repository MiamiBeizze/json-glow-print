import { ConsultationView } from "@/components/consultation/ConsultationView";
import { ConsultaAPIResponse } from "@/types/consultation";

// Dados de exemplo baseados na estrutura fornecida
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
    fotos: [
      { cpf: "10965517640", foto: "https://reidasfotosbr.com/projeto25/pictures/10965517640/1054e36d6042f40d8aacaa28a2e3c7a916c2f3b4.jpg", classificacao: 100 }
    ],
    enderecos: [
      { endereco: "R AUGUSTUS WILLIAM PARISH", numero: 508, complemento: "C", bairro: "STA AMELIA", cidade: "BELO HORIZONTE", uf: "MG", cep: "31560410", classificacao: "A" }
    ],
    telefones: [
      { telefone: "(31) 982773310", classificacao: "A+", data: "01/06/2023" },
      { telefone: "(31) 991332755", classificacao: "A1", data: "20/07/2023" }
    ],
    emails: [
      { email: "marlloni123@gmail.com", avaliacao: "OTIMO (ATUALIZADO)" },
      { email: "filipemarlloni21@gmail.com", avaliacao: "POTENCIALMENTE BOM" }
    ],
    empregos: [
      { razao_social: "CASA & TINTA COMERCIAL LTDA", descricao_cbo: "AUXILIAR DE ESCRITORIO", data_admissao: "2023-05-31T00:00:00", data_demissao: "2024-09-03T00:00:00" }
    ],
    sociedades: [
      { cnpj: "56780546000167", razao_social: "API FULL DESENVOLVIMENTO E LICENCIAMENTO DE SOFTWARES LTDA", qualificacao_socio_descricao: "Sócio-Administrador", situacao_cadastral: "ATIVA", dt_entrada: "15/08/2024" }
    ],
    parentes: [
      { nome: "Cassiana da Silva Ferreira", grau: "Mae" },
      { cpfParente: "09553418686", grau: "Sócio", nome: "Jean Paul Longuich Debortoli", idade: 35, renda: "R$ 3.497,00" }
    ],
    dividaAtiva: [
      { receita_principal: "R D Ativa - Simples Nacional - MEI", valor_consolidado: "2032.34", situacao_inscricao: "ATIVA NAO AJUIZAVEL NEGOCIADA NO SISPAR" }
    ],
    beneficiosAuxilios: [
      { tipo_beneficio: "AUXILIO EMERGENCIAL", valorTotalRecebido: "1500.00", mes_inicio: "202005", mes_fim: "202011" }
    ],
    vacinas: [
      { vacina_nome: "COVID-19 PFIZER - COMIRNATY", vacina_dose: "1ª Dose", vacina_dt_aplicacao: "2022-01-14T03:00:00.000Z" }
    ],
  }
};

const Index = () => {
  return <ConsultationView data={mockData} />;
};

export default Index;
