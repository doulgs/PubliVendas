import { ObjectSchema } from "realm";

export const CidadeSchema: ObjectSchema = {
  name: "CidadeSchema",

  properties: {
    Handle: "int",
    Nome: { type: "string", optional: true },
    Ibge: { type: "string", optional: true },
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    UF: { type: "string", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
