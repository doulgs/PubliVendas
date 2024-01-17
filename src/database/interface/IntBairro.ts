import Realm from "realm";

export interface IntBairro {
  Handle: number;
  HandleCidade: number;
  HandleFilial: number;
  HandleTrade: number;
  Nome: string;
  Valor: number;
  Ordem: number;
  NomeSemAcento: string;
  Plataforma: number;
}

export type IntBairroObject = IntBairro & Realm.Object;
