import { ObjectSchema } from "realm";

export const Grupo2Excecao: ObjectSchema = {
  name: "Grupo2Excecao",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleGrupo2: { type: "int", optional: true },
    HandleItem: { type: "int", optional: true },
    HandleGrupoExcecao: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Excecao: { type: "string", optional: true },
    Valor: { type: "double", optional: true },
    Ativa: { type: "bool", optional: true },
    Ordem: { type: "string", optional: true },
    IteHandle: { type: "int", optional: true },
    IteQuantidade: { type: "double", optional: true },
    IteTipoValor: { type: "string", optional: true },
    IteValorInformado: { type: "double", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
