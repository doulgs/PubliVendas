import Realm from "realm";

export interface IntGrupo1 {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Codigo: string | null;
  Nome: string | null;
  Reduzido: string | null;
  Plataforma: number | null;
}

export type IntGrupo1Object = IntGrupo1 & Realm.Object;
