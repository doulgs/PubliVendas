import Realm from "realm";

export interface ItePromocaoItem {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  HandleItem: number;
  DataInicio: Date;
  DataFim: Date;
  HoraInicio: Date;
  HoraFim: Date;
  Segunda: boolean;
  Terca: boolean;
  Quarta: boolean;
  Quinta: boolean;
  Sexta: boolean;
  Sabado: boolean;
  Domingo: boolean;
  ValorPromocional: number;
  PercentualDescontoFixo: number;
  Plataforma: number;
}

export type ItePromocaoItemObject = ItePromocaoItem & Realm.Object;
