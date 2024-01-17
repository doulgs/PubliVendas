import Realm from "realm";

export interface IntPromocaoItem {
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  HandleItem: number | null;
  DataInicio: Date | null;
  DataFim: Date | null;
  HoraInicio: Date | null;
  HoraFim: Date | null;
  Segunda: boolean | null;
  Terca: boolean | null;
  Quarta: boolean | null;
  Quinta: boolean | null;
  Sexta: boolean | null;
  Sabado: boolean | null;
  Domingo: boolean | null;
  ValorPromocional: number | null;
  PercentualDescontoFixo: number | null;
  Plataforma: number | null;
}

export type IntPromocaoItemObject = IntPromocaoItem & Realm.Object;
