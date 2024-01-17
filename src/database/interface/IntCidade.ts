import Realm from "realm";

export interface IntCidade {
  Handle: number;
  Nome: string;
  Ibge: string;
  HandleFilial: number;
  HandleTrade: number;
  UF: string;
  Plataforma: number;
}

export type IntCidadeObject = IntCidade & Realm.Object;
