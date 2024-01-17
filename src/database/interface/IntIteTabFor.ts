import Realm from "realm";

export interface IntIteTabFor {
  Handle: number;
  HandleItem: number | null;
  HandleTabela: number | null;
  HandleFormula: number | null;
  HandleFilial: number | null;
  Preco: number | null;
}

export type IntIteTabForObject = IntIteTabFor & Realm.Object;
