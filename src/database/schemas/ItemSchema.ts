import { ObjectSchema } from "realm";

export const ItemSchema: ObjectSchema = {
  name: "ItemSchema",

  properties: {
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleGrupo1: { type: "int", optional: true },
    HandleGrupo2: { type: "int", optional: true },
    HandleGrupo3: { type: "int", optional: true },
    HandleUnidade: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Codigo: { type: "string", optional: true },
    Descricao: { type: "string", optional: true },
    Complemento: { type: "string", optional: true },
    DescReduzida: { type: "string", optional: true },
    Foto: { type: "string", optional: true },
    PrecoValor: { type: "double", optional: true },
    Composicao: { type: "int", optional: true },
    Descinta: { type: "string", optional: true },
    ComposicaoBarra: { type: "string", optional: true },
    NaoPermiteDesconto: { type: "int", optional: true },
    DescricaoDif: { type: "string", optional: true },
    Plataforma: { type: "int", optional: true },
    VendaValor: { type: "double", optional: true },
    VendaFrete: { type: "double", optional: true },
    CustoValor: { type: "double", optional: true },
    ClassificacaoMarketPlace: { type: "string", optional: true },
  },

  primaryKey: "Handle",
};
