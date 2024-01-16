import { ObjectSchema } from "realm";

export const GrupoExcecaoSchema: ObjectSchema = {
  name: "GrupoExcecaoSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleGrupo2: "int",
    HandleItem: "int",
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
