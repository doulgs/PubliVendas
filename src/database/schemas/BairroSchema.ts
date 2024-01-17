import { ObjectSchema } from "realm";

export const BairroSchema: ObjectSchema = {
  name: "BairroSchema",

  properties: {
    Handle: "int",
    HandleCidade: { type: "int", optional: true },
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Nome: { type: "string", optional: true },
    Valor: { type: "double", optional: true },
    Ordem: { type: "int", optional: true },
    NomeSemAcento: { type: "string", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
