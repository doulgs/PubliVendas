import { ObjectSchema } from "realm";

export const PessoaSchema: ObjectSchema = {
  name: "PessoaSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
    Codigo: { type: "int", optional: true },
    Nome: { type: "string", optional: true },
    Fantasia: { type: "string", optional: true },
    CnpjCpf: { type: "string", optional: true },
    Endereco: { type: "string", optional: true },
    Numero: { type: "int", optional: true },
    Complemento: { type: "string", optional: true },
    Proximidade: { type: "string", optional: true },
    Bairro: { type: "string", optional: true },
    Cep: { type: "string", optional: true },
    Cidade: { type: "string", optional: true },
    Email: { type: "string", optional: true },
    Telefone: { type: "string", optional: true },
    Observacao: { type: "string", optional: true },
    Tipo: { type: "string", optional: true },
    HandleTabela: { type: "int", optional: true },
    Uf: { type: "string", optional: true },
    HandleUsuario: { type: "int", optional: true },
    Insc: { type: "string", optional: true },
    Bloqueado: { type: "int", optional: true },
    ObservacaoPessoa: { type: "string", optional: true },
    HandleCondicao: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
