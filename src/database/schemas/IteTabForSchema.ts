import { ObjectSchema } from "realm";

export const IteTabForSchema: ObjectSchema = {
  name: "IteTabForSchema",

  properties: {
    Handle: "int",
    HandleItem: { type: "int", optional: true },
    HandleTabela: { type: "int", optional: true },
    HandleFormula: { type: "int", optional: true },
    HandleFilial: { type: "int", optional: true },
    Preco: { type: "double", optional: true },
  },

  primaryKey: "Handle",
};
