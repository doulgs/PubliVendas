import Realm from "realm";

export interface IntCidade {
  Handle: number;
  Nome: string | null;
  Ibge: string | null;
  HandleFilial: number | null;
  HandleTrade: number | null;
  UF: string | null;
  Plataforma: number | null;
}

export type IntCidadeObject = IntCidade & Realm.Object;
