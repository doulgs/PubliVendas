import { ObjectSchema } from "realm";

export const UnidadeSchema: ObjectSchema = {
  name: "UnidadeSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Sigla: { type: "string", optional: true },
    Descricao: { type: "string", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
