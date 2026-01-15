import { ConsultationView } from "@/components/consultation/ConsultationView";
import { ConsultaResult } from "@/types/consultation";

// Dados de exemplo baseados na estrutura fornecida
const mockData: ConsultaResult = {
  dadosPessoais: {
    nome: "FILIPE MARLLONI SILVA",
    cpf: "12345678900",
    dataNascimento: "1990-05-15",
    idade: 33,
    sexo: "Masculino",
    nomeMae: "MARIA SILVA",
    nomePai: "JOSÉ SILVA",
    situacaoCadastral: "Regular",
    dataInscricao: "2008-01-20",
  },
  contatos: [
    {
      endereco: {
        cidade: "BELO HORIZONTE",
        uf: "MG",
      },
      telefones: ["(55) 91332755"],
      email: "FILIPEMARLLONI21@GMAIL.COM",
    },
  ],
  veiculos: [],
  cin: {},
  vazamentos: [],
  planosSaude: [],
  energias: [],
  empresasRelacionadas: [],
  aeronaves: [],
  processos: [],
  vinculosPorProcessos: [],
};

const Index = () => {
  return <ConsultationView data={mockData} />;
};

export default Index;
