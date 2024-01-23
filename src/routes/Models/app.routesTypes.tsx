import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IntPessoas } from "../../database/interface/IntPessoas";

export type propsNavigationStack = {
  Inicio: undefined;
  Produtos: {
    handle: number;
  };
  ClienteDetalhe: {
    cliente: IntPessoas;
  };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
