import Realm from "realm";

export interface IteUnidade {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Sigla: string | null;
  Descricao: string | null;
  Plataforma: number | null;
}

export type IteUnidadeObject = IteUnidade & Realm.Object;
