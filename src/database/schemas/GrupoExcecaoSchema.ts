export const GrupoExcecaoSchema = {
  name: "GrupoExcecaoSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleGrupo2: "long",
    HandleItem: "long",
    HandleTrade: "int",
    Descricao: "string",
    SelecaoMinima: "double",
    SelecaoMaxima: "double",
    Quantidade: "double",
    ValorGrupo: "double",
    Ordem: "string", // Se o campo Ordem for alfanumérico
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
