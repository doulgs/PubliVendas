import Realm from "realm";

export interface IntUnidade {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Sigla: string | null;
  Descricao: string | null;
  Plataforma: number | null;
}

export type IntUnidadeObject = IntUnidade & Realm.Object;
