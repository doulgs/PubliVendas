import Realm from "realm";

export interface ItePessoaItem {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  ItemHandle: number | null;
  PessoaHandle: number | null;
  Preco: number | null;
  Plataforma: number | null;
}

export type ItePessoaItemObject = ItePessoaItem & Realm.Object;
