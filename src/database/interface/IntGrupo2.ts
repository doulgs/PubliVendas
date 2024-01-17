import Realm from "realm";

export interface IntGrupo2 {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Codigo: string | null;
  Nome: string | null;
  Reduzido: string | null;
  Tipo: string | null;
  Foto: string | null;
  PossuiComposicao: boolean | null;
  PermiteItemSemValor: boolean | null;
  AbrirTelaExcecoes: boolean | null;
  Plataforma: number | null;
  PossuiCaracteristicaItem: boolean | null;
}

export type IntGrupo2Object = IntGrupo2 & Realm.Object;
