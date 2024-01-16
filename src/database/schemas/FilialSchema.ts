import { ObjectSchema } from "realm";

export const FilialSchema: ObjectSchema = {
  name: "FilialSchema",

  properties: {
    Handle: "int",
    Nome: "string",
    Razao: "string",
    Fone: "string",
    CnpjCpf: "string",
    NomeSite: "string",
    Endereco: "string",
    Numero: "string",
    Complemento: "string",
    Bairro: "string",
    Cep: "string",
    Cidade: "string",
    Estado: "string",
  },

  primaryKey: "Handle",
};
