import { ObjectSchema } from "realm";

export const PromocaoItemSchema: ObjectSchema = {
  name: "PromocaoItemSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    HandleItem: { type: "int", optional: true },
    DataInicio: { type: "date", optional: true },
    DataFim: { type: "date", optional: true },
    HoraInicio: { type: "date", optional: true },
    HoraFim: { type: "date", optional: true },
    Segunda: { type: "int", optional: true },
    Terca: { type: "int", optional: true },
    Quarta: { type: "int", optional: true },
    Quinta: { type: "int", optional: true },
    Sexta: { type: "int", optional: true },
    Sabado: { type: "int", optional: true },
    Domingo: { type: "int", optional: true },
    ValorPromocional: { type: "double", optional: true },
    PercentualDescontoFixo: { type: "double", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
