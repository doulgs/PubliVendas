import { ObjectSchema } from "realm";

export const CidadeSchema: ObjectSchema = {
  name: "CidadeSchema",

  properties: {
    Handle: "int",
    Nome: "string",
    Ibge: "string",
    HandleFilial: "int",
    HandleTrade: "int",
    UF: "string",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
