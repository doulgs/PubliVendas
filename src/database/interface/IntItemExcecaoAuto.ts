import Realm from "realm";

export interface IntItemExcecaoAuto {
  Handle: number;
  HandleFilial: number | null;
  HandleItem: number | null;
  HandleExcecao: number | null;
  HandleTrade: number | null;
  Quantidade: number | null;
  Plataforma: number | null;
}

export type IntItemExcecaoAutoObject = IntItemExcecaoAuto & Realm.Object;
