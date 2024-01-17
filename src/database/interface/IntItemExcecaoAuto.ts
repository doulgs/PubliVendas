import Realm from "realm";

export interface IntItemExcecaoAuto {
  Handle: number;
  HandleFilial: number;
  HandleItem: number;
  HandleExcecao: number;
  HandleTrade: number;
  Quantidade: number;
  Plataforma: number;
}

export type IntItemExcecaoAutoObject = IntItemExcecaoAuto & Realm.Object;
