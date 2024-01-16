import { ObjectSchema } from "realm";

export const CondicaoSchema: ObjectSchema = {
  name: "CondicaoSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Descricao: "string",
    EhDinheiro: "bool",
    Plataforma: "int",
    EhPagamentoOnLine: "bool",
    TipoPagto: "string",
  },

  primaryKey: "Handle",
};
