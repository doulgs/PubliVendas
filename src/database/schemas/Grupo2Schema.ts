import { ObjectSchema } from "realm";

export const Grupo2Schema: ObjectSchema = {
  name: "Grupo2Schema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Codigo: "string",
    Nome: "string",
    Reduzido: "string",
    Tipo: "string",
    Foto: "string",
    PossuiComposicao: "bool",
    PermiteItemSemValor: "bool",
    AbrirTelaExcecoes: "bool",
    Plataforma: "int",
    PossuiCaracteristicaItem: "bool",
  },

  primaryKey: "Handle",
};
