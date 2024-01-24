export declare global {
  namespace ReactNavigation {
    export interface RootParamList {
      SignIn: undefined;
      Settings: undefined;
      LoadingScreen: undefined;

      Pedidos: undefined;
      Clientes: undefined;
      ListaGrupos: undefined;
      Produtos: { handleGrupo2: number };
      ClienteDetalhe: { handleCliente: number };
      Config: undefined;
      AddCliente: undefined;
    }
  }
}
