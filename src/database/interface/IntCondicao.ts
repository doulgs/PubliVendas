import Realm from "realm";

export interface IntCondicao {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Descricao: string | null;
  EhDinheiro: boolean | null;
  Plataforma: number | null;
  EhPagamentoOnLine: boolean | null;
  TipoPagto: string | null;
}

export type IntCondicaoObject = IntCondicao & Realm.Object;
