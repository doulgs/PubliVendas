import { ObjectSchema } from "realm";

export const TabelaSchema: ObjectSchema = {
  name: "TabelaSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
    Descricao: { type: "string", optional: true },
    Preco1: { type: "string", optional: true },
    Preco2: { type: "string", optional: true },
    Preco3: { type: "string", optional: true },
    HandleFormula: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
