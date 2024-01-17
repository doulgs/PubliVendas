import Realm from "realm";

export interface IteTabela {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
  Descricao: string;
  Preco1: string;
  Preco2: string;
  Preco3: string;
  HandleFormula: number;
}

export type IteTabelaObject = IteTabela & Realm.Object;
