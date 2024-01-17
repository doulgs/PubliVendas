import { ObjectSchema } from "realm";

export const GrupoExcecaoSchema: ObjectSchema = {
  name: "GrupoExcecaoSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleGrupo2: { type: "int", optional: true },
    HandleItem: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Descricao: { type: "string", optional: true },
    SelecaoMinima: { type: "double", optional: true },
    SelecaoMaxima: { type: "double", optional: true },
    Quantidade: { type: "double", optional: true },
    ValorGrupo: { type: "double", optional: true },
    Ordem: { type: "string", optional: true }, // Se o campo Ordem for alfanumérico
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
