import Realm from "realm";

export interface IntCondicao {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Descricao: string;
  EhDinheiro: boolean;
  Plataforma: number;
  EhPagamentoOnLine: boolean;
  TipoPagto: string;
}

export type IntCondicaoObject = IntCondicao & Realm.Object;
