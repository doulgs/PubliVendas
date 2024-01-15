export const TabelaSchema = {
  name: "TabelaSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleTrade: "int",
    Plataforma: "int",
    Descricao: "string",
    Preco1: "string",
    Preco2: "string",
    Preco3: "string",
    HandleFormula: "long",
  },

  primaryKey: "Handle",
};
