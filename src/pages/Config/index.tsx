import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonArea, ButtonText, Container } from "./styles";

const Config: React.FC = () => {
  const navigation = useNavigation();
  async function handleNav() {}
  return (
    <Container>
      <ButtonArea onPress={handleNav}>
        <ButtonText>Ir Para Inicio</ButtonText>
      </ButtonArea>
    </Container>
  );
};

export default Config;
