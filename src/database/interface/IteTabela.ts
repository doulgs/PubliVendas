import Realm from "realm";

export interface IteTabela {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
  Descricao: string | null;
  Preco1: string | null;
  Preco2: string | null;
  Preco3: string | null;
  HandleFormula: number | null;
}

export type IteTabelaObject = IteTabela & Realm.Object;
