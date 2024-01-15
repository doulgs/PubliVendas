export const ItemExcecaoAutoSchema = {
  name: "ItemExcecaoAutoSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleItem: "long",
    HandleExcecao: "long",
    HandleTrade: "int",
    Quantidade: "double",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
