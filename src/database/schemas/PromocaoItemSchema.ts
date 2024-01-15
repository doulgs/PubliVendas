export const PromocaoItemSchema = {
  name: "PromocaoItemSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleTrade: "int",
    HandleItem: "long",
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
