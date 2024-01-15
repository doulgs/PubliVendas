export const CidadeSchema = {
  name: "CidadeSchema",

  properties: {
    Handle: "long",
    Nome: "string",
    Ibge: "string",
    HandleFilial: "int",
    HandleTrade: "int",
    UF: "string",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
