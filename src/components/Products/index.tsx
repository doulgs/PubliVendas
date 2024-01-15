import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  data: Products;
}

interface Products {
  handle: number;
  descricao: string;
  grupos2: string;
  unidade: string;
  valor: number;
  estoque: number;
}

const Products: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Card style={{ backgroundColor: "#ffffff" }}>
        <Card.Content style={styles.content}>
          <Text style={styles.title}>{data.descricao}</Text>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Text style={styles.subtitle}>Grupos2</Text>
          <Text style={styles.title}>{data.grupos2}</Text>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Text style={styles.subtitle}>UNIDADE</Text>
          <Text style={styles.title}>{data.unidade}</Text>
        </Card.Content>

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "#e6e5e9",
            // borderBottomLeftRadius: 8,
            // borderBottomRightRadius: 8,
          }}
        >
          <Card.Content
            style={[styles.content, { flex: 1, borderBottomWidth: 0 }]}
          >
            <Text style={styles.subtitle}>VALOR</Text>
            <Text style={styles.title}>{formatCurrency(data.valor)}</Text>
          </Card.Content>
          <Card.Content
            style={[styles.content, { flex: 1, borderBottomWidth: 0 }]}
          >
            <Text style={styles.subtitle}>ESTOQUE</Text>
            <Text style={styles.title}>{data.estoque}</Text>
          </Card.Content>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  content: {
    padding: 8,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d7d6dc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    textTransform: "uppercase",
  },
});

export { Products };
