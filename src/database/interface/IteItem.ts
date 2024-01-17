import Realm from "realm";

export interface IntGrupo2 {
  Handle: number;
  HandleFilial: number | null;
  HandleGrupo1: number | null;
  HandleGrupo2: number | null;
  HandleGrupo3: number | null;
  HandleUnidade: number | null;
  HandleTrade: number | null;
  Codigo: string | null;
  Descricao: string | null;
  Complemento: string | null;
  DescReduzida: string | null;
  Foto: string | null;
  PrecoValor: number | null;
  Composicao: boolean | null;
  Descinta: string | null;
  ComposicaoBarra: string | null;
  NaoPermiteDesconto: boolean | null;
  DescricaoDif: string | null;
  Plataforma: number | null;
  VendaValor: number | null;
  VendaFrete: number | null;
  CustoValor: number | null;
  ClassificacaoMarketPlace: string | null;
}

export type IntGrupo2Object = IntGrupo2 & Realm.Object;
