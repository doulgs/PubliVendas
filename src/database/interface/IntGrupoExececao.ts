import Realm from "realm";

export interface IntGrupoExcecao {
  Handle: number;
  HandleFilial: number;
  HandleGrupo2: number;
  HandleItem: number;
  HandleTrade: number;
  Descricao: string;
  SelecaoMinima: number;
  SelecaoMaxima: number;
  Quantidade: number;
  ValorGrupo: number;
  Ordem: string;
  Plataforma: number;
}

export type IntGrupoExcecaoObject = IntGrupoExcecao & Realm.Object;
