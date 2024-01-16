import { ObjectSchema } from "realm";

export const ItemSchema: ObjectSchema = {
  name: "ItemSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleGrupo1: "int",
    HandleGrupo2: "int",
    HandleGrupo3: "int",
    HandleUnidade: "int",
    HandleTrade: "int",
    Codigo: "string",
    Descricao: "string",
    Complemento: "string",
    DescReduzida: "string",
    Foto: "string",
    PrecoValor: "double",
    Composicao: "bool",
    Descinta: "string",
    ComposicaoBarra: "string",
    NaoPermiteDesconto: "bool",
    DescricaoDif: "string",
    Plataforma: "int",
    VendaValor: "double",
    VendaFrete: "double",
    CustoValor: "double",
    ClassificacaoMarketPlace: "string",
  },

  primaryKey: "Handle",
};
