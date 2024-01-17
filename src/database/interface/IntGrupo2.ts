import Realm from "realm";

export interface IntGrupo2 {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Codigo: string;
  Nome: string;
  Reduzido: string;
  Tipo: string;
  Foto: string;
  PossuiComposicao: boolean;
  PermiteItemSemValor: boolean;
  AbrirTelaExcecoes: boolean;
  Plataforma: number;
  PossuiCaracteristicaItem: boolean;
}

export type IntGrupo2Object = IntGrupo2 & Realm.Object;
