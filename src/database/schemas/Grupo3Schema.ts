import { ObjectSchema } from "realm";

export const Grupo3Schema: ObjectSchema = {
  name: "Grupo3Schema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
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
