export const ItemSchema = {
  name: "ItemSchema",

  properties: {
    Handle: "long",
    HandleFilial: "long",
    HandleGrupo1: "long",
    HandleGrupo2: "long",
    HandleGrupo3: "long",
    HandleUnidade: "long",
    HandleTrade: "int",
    Codigo: "string",
    Descricao: "string",
    Complemento: "string",
    DescReduzida: "string",
    Foto: "string",
    PrecoValor: "double",
    Composicao: "bool",
    DescLonga: "string",
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
