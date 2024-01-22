import React, { useState, useEffect } from "react";
import { getRealm } from "../../database/realm";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { useFocusEffect } from "@react-navigation/native";
import { Container } from "./styles";
import { LoadingScreen } from "../../components/LoadingScreen";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  View,
} from "react-native";
import Cliente from "../../components/Cliente";

const ITEMS_PER_PAGE = 50; // Número de itens por página

const Clientes: React.FC = () => {
  const [pessoas, setPessoas] = useState<IntPessoas[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const recuperarPessoas = async (pageNumber: number) => {
    const realm = await getRealm();
    try {
      const result = realm
        .objects<IntPessoas>("PessoasSchema")
        .slice((pageNumber - 1) * ITEMS_PER_PAGE, pageNumber * ITEMS_PER_PAGE);
      setPessoas((prevData) => [...prevData, ...Array.from(result)]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching PessoasSchema objects:", error);
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      recuperarPessoas(page);
    }, [page])
  );

  const carregarMaisDados = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    return (
      <View>
        <ActivityIndicator size={"large"} color={"#000"} />
      </View>
    );
  };

  if (loading) {
    return <LoadingScreen />;
  }

  function renderizarClientes({ item }: ListRenderItemInfo<IntPessoas>) {
    return <Cliente data={item} />;
  }

  return (
    <Container>
      <FlatList
        data={pessoas}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={renderizarClientes}
        contentContainerStyle={{ margin: 16 }}
        onEndReached={carregarMaisDados}
        onEndReachedThreshold={0.1} // Ajuste conforme necessário
      />
    </Container>
  );
};

export default Clientes;
