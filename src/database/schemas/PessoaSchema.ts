import { ObjectSchema } from "realm";

export const PessoaSchema: ObjectSchema = {
  name: "PessoaSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Plataforma: "int",
    Codigo: "int",
    Nome: "string",
    Fantasia: "string",
    CnpjCpf: "string",
    Endereco: "string",
    Numero: "int",
    Complemento: "string",
    Proximidade: "string",
    Bairro: "string",
    Cep: "string",
    Cidade: "string",
    Email: "string",
    Telefone: "string",
    Observacao: "string",
    Tipo: "string",
    HandleTabela: "int",
    Uf: "string",
    HandleUsuario: "int",
    Insc: "string",
    Bloqueado: "bool",
    ObservacaoPessoa: "string",
    HandleCondicao: "int",
  },

  primaryKey: "Handle",
};
