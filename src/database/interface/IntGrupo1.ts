import Realm from "realm";

export interface IntGrupo1 {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Codigo: string;
  Nome: string;
  Reduzido: string;
  Plataforma: number;
}

export type IntGrupo1Object = IntGrupo1 & Realm.Object;
