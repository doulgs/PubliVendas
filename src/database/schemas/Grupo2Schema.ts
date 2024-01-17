import { ObjectSchema } from "realm";

export const Grupo2Schema: ObjectSchema = {
  name: "Grupo2Schema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Tipo: { type: "string", optional: true },
    Foto: { type: "string", optional: true },
    PossuiComposicao: "int",
    PermiteItemSemValor: "int",
    AbrirTelaExcecoes: "int",
    Plataforma: "int",
    PossuiCaracteristicaItem: "int",
  },

  primaryKey: "Handle",
};
