import { ObjectSchema } from "realm";

export const UnidadeSchema: ObjectSchema = {
  name: "UnidadeSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Sigla: "string",
    Descricao: "string",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
