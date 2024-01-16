import { ObjectSchema } from "realm";

export const Grupo2Excecao: ObjectSchema = {
  name: "Grupo2Excecao",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleGrupo2: "int",
    HandleItem: "int",
    HandleGrupoExcecao: "int",
    HandleTrade: "int",
    Excecao: "string",
    Valor: "double",
    Ativa: "bool",
    Ordem: "string",
    IteHandle: "int",
    IteQuantidade: "double",
    IteTipoValor: "string",
    IteValorInformado: "double",
    Plataforma: "int",
  },

  primaryKey: "Handle",
};
