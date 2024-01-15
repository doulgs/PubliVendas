export const CondicaoSchema = {
  name: "CondicaoSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleTrade: "int",
    Descricao: "string",
    EhDinheiro: "bool",
    Plataforma: "int",
    EhPagamentoOnLine: "bool",
    TipoPagto: "string",
  },

  primaryKey: "Handle",
};
