import { ObjectSchema } from "realm";

export const PessoaItemSchema: ObjectSchema = {
  name: "PessoaItemSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    ItemHandle: "int",
    PessoaHandle: "int",
    Preco: "double",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
