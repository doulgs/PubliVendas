import { ObjectSchema } from "realm";

export const ItemExcecaoAutoSchema: ObjectSchema = {
  name: "ItemExcecaoAutoSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleItem: { type: "int", optional: true },
    HandleExcecao: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Quantidade: { type: "double", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
