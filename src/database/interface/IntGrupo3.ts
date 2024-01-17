import Realm from "realm";

export interface IntGrupo3 {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Codigo: string;
  Nome: string;
  Nome2: string;
  Reduzido: string;
  Inativo: boolean;
  QuantidadeItensComposicao: number;
  Plataforma: number;
}

export type IntGrupo3Object = IntGrupo3 & Realm.Object;
