import Realm from "realm";

export interface IntBairro {
  Handle: number;
  HandleCidade: number | null;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Nome: string | null;
  Valor: number | null;
  Ordem: number | null;
  NomeSemAcento: string | null;
  Plataforma: number | null;
}

export type IntBairroObject = IntBairro & Realm.Object;
