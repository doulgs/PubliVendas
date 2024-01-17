import { ObjectSchema } from "realm";

export const Grupo3Schema: ObjectSchema = {
  name: "Grupo3Schema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Nome2: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Inativo: { type: "int", optional: true },
    QuantidadeItensComposicao: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
