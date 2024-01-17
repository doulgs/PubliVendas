import Realm from "realm";

export interface IntGrupoExcecao {
  Handle: number;
  HandleFilial: number | null;
  HandleGrupo2: number | null;
  HandleItem: number | null;
  HandleTrade: number | null;
  Descricao: string | null;
  SelecaoMinima: number | null;
  SelecaoMaxima: number | null;
  Quantidade: number | null;
  ValorGrupo: number | null;
  Ordem: string | null;
  Plataforma: number | null;
}

export type IntGrupoExcecaoObject = IntGrupoExcecao & Realm.Object;
