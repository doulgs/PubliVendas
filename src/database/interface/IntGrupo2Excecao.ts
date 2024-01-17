import Realm from "realm";

export interface IntGrupo2Excecao {
  Handle: number;
  HandleFilial: number;
  HandleGrupo2: number;
  HandleItem: number;
  HandleGrupoExcecao: number;
  HandleTrade: number;
  Excecao: string;
  Valor: number;
  Ativa: boolean;
  Ordem: string;
  IteHandle: number;
  IteQuantidade: number;
  IteTipoValor: string;
  IteValorInformado: number;
  Plataforma: number;
}

export type IntGrupo2ExcecaoObject = IntGrupo2Excecao & Realm.Object;
