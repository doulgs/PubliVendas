import { ObjectSchema } from "realm";

export const PessoaItemSchema: ObjectSchema = {
  name: "PessoaItemSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    ItemHandle: { type: "int", optional: true },
    PessoaHandle: { type: "int", optional: true },
    Preco: { type: "double", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
