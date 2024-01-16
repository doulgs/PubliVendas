import { ObjectSchema } from "realm";

export const BairroSchema: ObjectSchema = {
  name: "BairroSchema",

  properties: {
    Handle: "int",
    HandleCidade: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Nome: "string",
    Valor: "double",
    Ordem: "int",
    NomeSemAcento: "string",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
