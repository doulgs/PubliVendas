import Realm from "realm";

export interface IntGrupo2 {
  Handle: number;
  HandleFilial: number;
  HandleGrupo1: number;
  HandleGrupo2: number;
  HandleGrupo3: number;
  HandleUnidade: number;
  HandleTrade: number;
  Codigo: string;
  Descricao: string;
  Complemento: string;
  DescReduzida: string;
  Foto: string;
  PrecoValor: number;
  Composicao: boolean;
  Descinta: string;
  ComposicaoBarra: string;
  NaoPermiteDesconto: boolean;
  DescricaoDif: string;
  Plataforma: number;
  VendaValor: number;
  VendaFrete: number;
  CustoValor: number;
  ClassificacaoMarketPlace: string;
}

export type IntGrupo2Object = IntGrupo2 & Realm.Object;
