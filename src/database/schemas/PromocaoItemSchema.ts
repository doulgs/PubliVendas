import { ObjectSchema } from "realm";

export const PromocaoItemSchema: ObjectSchema = {
  name: "PromocaoItemSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    HandleItem: "int",
    DataInicio: "date",
    DataFim: "date",
    HoraInicio: "date",
    HoraFim: "date",
    Segunda: "bool",
    Terca: "bool",
    Quarta: "bool",
    Quinta: "bool",
    Sexta: "bool",
    Sabado: "bool",
    Domingo: "bool",
    ValorPromocional: "double",
    PercentualDescontoFixo: "double",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
