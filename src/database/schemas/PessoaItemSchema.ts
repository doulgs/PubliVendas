export const PessoaItemSchema = {
  name: "PessoaItemSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleTrade: "int",
    ItemHandle: "long",
    PessoaHandle: "long",
    Preco: "double",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
