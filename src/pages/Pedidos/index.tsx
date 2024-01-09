import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonArea, ButtonText, Container } from "./styles";

const Pedidos: React.FC = () => {
  const navigation = useNavigation();
  async function handleNav() {
    navigation.navigate("Clientes");
  }

  return (
    <Container>
      <ButtonArea onPress={handleNav}>
        <ButtonText>Ir Para Clientes</ButtonText>
      </ButtonArea>
    </Container>
  );
};

export default Pedidos;
