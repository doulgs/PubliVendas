import { ObjectSchema } from "realm";

export const TabelaSchema: ObjectSchema = {
  name: "TabelaSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Plataforma: "int",
    Descricao: "string",
    Preco1: "string",
    Preco2: "string",
    Preco3: "string",
    HandleFormula: "int",
  },

  primaryKey: "Handle",
};
