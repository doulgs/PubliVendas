export const Grupo2Schema = {
  name: "Grupo2Schema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
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
