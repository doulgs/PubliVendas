import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Container } from "./styles";
import ButtonHelper from "../../Helpers/Button";
import { executarSync } from "../../scripts/executarSync";

const Pedidos: React.FC = () => {
  return (
    <Container>
      <ButtonHelper
        title="Sync"
        colorBackground="#191622"
        colorTitle="#FFF"
        onPress={executarSync}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Pedidos;
