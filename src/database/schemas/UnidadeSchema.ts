export const UnidadeSchema = {
  name: "UnidadeSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleTrade: "int",
    Sigla: "string",
    Descricao: "string",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
