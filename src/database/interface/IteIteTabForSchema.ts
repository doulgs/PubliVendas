import Realm from "realm";

export interface IteIteTabForSchema {
  Handle: number;
  HandleItem: number;
  HandleTabela: number;
  HandleFormula: number;
  HandleFilial: number;
  Preco: number;
}

export type IteIteTabForSchemaObject = IteIteTabForSchema & Realm.Object;
