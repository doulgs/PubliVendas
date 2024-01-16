import { ObjectSchema } from "realm";

export const ItemExcecaoAutoSchema: ObjectSchema = {
  name: "ItemExcecaoAutoSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleItem: "int",
    HandleExcecao: "int",
    HandleTrade: "int",
    Quantidade: "double",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
