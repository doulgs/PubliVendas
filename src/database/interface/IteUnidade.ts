import Realm from "realm";

export interface IteUnidade {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Sigla: string;
  Descricao: string;
  Plataforma: number;
}

export type IteUnidadeObject = IteUnidade & Realm.Object;
