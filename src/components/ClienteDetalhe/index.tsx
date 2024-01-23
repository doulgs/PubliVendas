import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { Avatar, Card, Text } from "react-native-paper";

type ScreenProps = {
  cliente: IntPessoas;
};

const ClienteDetalhe: React.FC = () => {
  const { cliente } = useRoute().params as ScreenProps;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardAvatar}>
          <Avatar.Text size={70} label="DS" />
        </Card.Content>
        <Card.Content>
          <Text style={styles.title}>{cliente.Nome}</Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            Telefone: {cliente.Telefone}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.titleInfo}>Fantasia:</Text>
          <Text style={styles.title2}>{cliente.Fantasia}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.titleInfo}>Cnpj/Cpf:</Text>
          <Text style={styles.title2}>{cliente.CnpjCpf}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 16,
    pading: 8,
  },
  card: {
    backgroundColor: "#FFF",
    marginBottom: 16,
    width: "90%",
  },
  cardAvatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    textTransform: "uppercase",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 20,
  },
  subTitle: {
    textAlign: "center",
    color: "#858585",
  },
  title2: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 5,
    fontWeight: "bold",
  },
});

export default ClienteDetalhe;
