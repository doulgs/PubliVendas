import Realm from "realm";

export interface IntFilial {
  Handle: number;
  HandleFilial: string | null;
  HandleTrade: number | null;
  franquia: string | null;
  GrupoFilial: string | null;
  Tabela: string | null;
  HandleGrupoFilial: string | null;
  Nome: string | null;
  Razao: string | null;
  Fone: string | null;
  CnpjCpf: string | null;
  NomeSite: string | null;
  BackgroudColor: string | null;
  FontColor: string | null;
  TitleColor: string | null;
  Titulo01: string | null;
  Texto01: string | null;
  Titulo02: string | null;
  Texto02: string | null;
  Logo: string | null;
  ValorPedidoMinimo: number | null;
  Endereco: string | null;
  Numero: string | null;
  Complemento: string | null;
  Bairro: string | null;
  Cep: string | null;
  Cidade: string | null;
  Estado: string | null;
  NumeroWhatsAppPedido: string | null;
  PrevisaoEntregaMin: number | null;
  PrevisaoRetiraMin: number | null;
  TaxaEntrega: number | null;
  MensagemTaxaEntrega: string | null;
  TipoFrete: string | null;
  LogoByte: string | null;
  EstaAberto: boolean | null;
  Titulo01Cardapio: string | null;
  Texto01Cardapio: string | null;
  Titulo02Cardapio: string | null;
  Texto02Cardapio: string | null;
  ApiKeyHere: string | null;
  ConfigPrecoPizza: string | null;
  PossuiIntegracao: boolean | null;
  TipoAtendimento: number | null;
  HandleTabela: string | null;
  Preco: number | null;
  PossuiValidacaoEndereco: boolean | null;
  ImagemPadraoPizza: string | null;
  ObrigatorioEnviarPedidoPeloWhatsApp: boolean | null;
  HandleRamoAtividade: string | null;
  PathRelPedidoSowPublisoft: string | null;
  EmailHost: string | null;
  EmailUsuario: string | null;
  EmailSenha: string | null;
  EmailPorta: number | null;
  Timeout: number | null;
  EmailAtivarSsl: boolean | null;
  MensagemPedidoEmail: string | null;
  LimiteRetirada: number | null;
  IntervaloAgendamento: number | null;
  UtilizaHorarioAgendamento: boolean | null;
  HandleFranquia: string | null;
  GatewayPagamento: string | null;
  ChavePublica: string | null;
  ChaveSecreta: string | null;
  ImagemPadraoPizzaByte: string | null;
  PathRelPedidoSowPublisoftByte: string | null;
  MostarExcecaoPedidoVenda: boolean | null;
  LayoutTelaItensSowPublisoft: number | null;
  PermiteDigitacaoPreco: boolean | null;
  QuantidadeInteira: boolean | null;
  DiasPrevisaoEntrega: number | null;
  QtdAparelhosLiberadosPubliVendas: string | null;
  ChaveApps: string | null;
  Tabelas: string | null;
  Plataforma: number | null;
}

export type IntFilialObject = IntFilial & Realm.Object;
