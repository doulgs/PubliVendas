import { ObjectSchema } from "realm";

export const Grupo1Schema: ObjectSchema = {
  name: "Grupo1Schema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Codigo: "string",
    Nome: "string",
    Reduzido: "string",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
