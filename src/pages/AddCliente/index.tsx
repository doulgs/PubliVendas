import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Content,
  InputText,
  HeaderButton,
  ButtonText,
} from "./styles";
import { useAuth } from "../../context";

interface Inputs {
  nome: string;
  fantasia: string;
  cpfCnpj: string;
  insc: string;
  telefone: string;
  email: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  uf: string;
  obeservacao: string;
}

const AddCliente: React.FC = () => {
  const { insertPessoa } = useAuth();
  const navigation = useNavigation();
  const [inputs, setInputs] = useState<Inputs>({
    nome: "",
    fantasia: "",
    cpfCnpj: "",
    insc: "",
    telefone: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    complemento: "",
    cidade: "",
    uf: "",
    obeservacao: "",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => handleSubmit()}>
          <ButtonText>Salvar</ButtonText>
        </HeaderButton>
      ),
    });
  }, [navigation]);

  const handleInputChange = (field: string, value: string) => {
    setInputs((prevInputs) => ({ ...prevInputs, [field]: value }));
  };

  const handleSubmit = async () => {
    await insertPessoa();
    navigation.navigate("Clientes");
  };

  return (
    <Container>
      <Content>
        {Object.entries(inputs).map(([field, value]) => (
          <InputText
            key={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={value}
            onChangeText={(text) => handleInputChange(field, text)}
          />
        ))}
      </Content>
    </Container>
  );
};

export default AddCliente;
