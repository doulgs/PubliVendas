export const Grupo3Schema = {
  name: "Grupo3Schema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleTrade: "int",
    Codigo: "string",
    Nome: "string",
    Nome2: "string",
    Reduzido: "string",
    Inativo: "bool",
    QuantidadeItensComposicao: "int",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
