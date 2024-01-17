import { ObjectSchema } from "realm";

export const CondicaoSchema: ObjectSchema = {
  name: "CondicaoSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Descricao: { type: "string", optional: true },
    EhDinheiro: { type: "bool", optional: true },
    Plataforma: { type: "int", optional: true },
    EhPagamentoOnLine: { type: "bool", optional: true },
    TipoPagto: { type: "string", optional: true },
  },

  primaryKey: "Handle",
};
