import { ObjectSchema } from "realm";

export const Grupo1Schema: ObjectSchema = {
  name: "Grupo1Schema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
