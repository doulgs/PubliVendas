import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Container } from "./styles";
import { Image, StyleSheet } from "react-native";
import { getAll } from "../../utils/getAll";

const Pedidos: React.FC = () => {
  // const retorno = getAll
  return (
    <Container>
      <Card>
        <Card.Content style={{ flexDirection: "row" }}>
          <></>
        </Card.Content>
      </Card>
    </Container>
  );
};

const Styles = StyleSheet.create({});

export default Pedidos;
