import Realm from "realm";

export interface IntGrupo2Excecao {
  Handle: number;
  HandleFilial: number | null;
  HandleGrupo2: number | null;
  HandleItem: number | null;
  HandleGrupoExcecao: number | null;
  HandleTrade: number | null;
  Excecao: string | null;
  Valor: number | null;
  Ativa: boolean | null;
  Ordem: string | null;
  IteHandle: number | null;
  IteQuantidade: number | null;
  IteTipoValor: string | null;
  IteValorInformado: number | null;
  Plataforma: number | null;
}

export type IntGrupo2ExcecaoObject = IntGrupo2Excecao & Realm.Object;
