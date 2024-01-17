import Realm from "realm";

export interface IntGrupo3 {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Codigo: string | null;
  Nome: string | null;
  Nome2: string | null;
  Reduzido: string | null;
  Inativo: boolean | null;
  QuantidadeItensComposicao: number | null;
  Plataforma: number | null;
}

export type IntGrupo3Object = IntGrupo3 & Realm.Object;
