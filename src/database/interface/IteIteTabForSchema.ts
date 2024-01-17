import Realm from "realm";

export interface IteIteTabForSchema {
  Handle: number;
  HandleItem: number | null;
  HandleTabela: number | null;
  HandleFormula: number | null;
  HandleFilial: number | null;
  Preco: number | null;
}

export type IteIteTabForSchemaObject = IteIteTabForSchema & Realm.Object;
