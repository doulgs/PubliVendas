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
  AddCliente: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
