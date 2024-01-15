export const BairroSchema = {
  name: "BairroSchema",

  properties: {
    Handle: "long",
    HandleCidade: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Nome: "string",
    Valor: "double",
    Ordem: "int",
    NomeSemAcento: "string",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
