import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Inicio: undefined;
  Produtos: {
    handle: number;
  };
  ClienteDetalhe: {
    handle: number;
  };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
