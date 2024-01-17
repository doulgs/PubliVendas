import Realm from "realm";

export interface ItePessoaItem {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  ItemHandle: number;
  PessoaHandle: number;
  Preco: number;
  Plataforma: number;
}

export type ItePessoaItemObject = ItePessoaItem & Realm.Object;
