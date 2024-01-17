import Realm from "realm";

export interface IntPessoaItem {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  ItemHandle: number | null;
  PessoaHandle: number | null;
  Preco: number | null;
  Plataforma: number | null;
}

export type IntPessoaItemObject = IntPessoaItem & Realm.Object;
