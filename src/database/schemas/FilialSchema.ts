import { ObjectSchema } from "realm";

export const FilialSchema = {
  name: "FilialSchema",

  properties: {
    Handle: "int",
    Nome: { type: "string", optional: true },
    Razao: { type: "string", optional: true },
    Fone: { type: "string", optional: true },
    CnpjCpf: { type: "string", optional: true },
    NomeSite: { type: "string", optional: true },
    Endereco: { type: "string", optional: true },
    Numero: { type: "string", optional: true },
    Complemento: { type: "string", optional: true },
    Bairro: { type: "string", optional: true },
    Cep: { type: "string", optional: true },
    Cidade: { type: "string", optional: true },
    Estado: { type: "string", optional: true },
  },

  primaryKey: "Handle",
};
