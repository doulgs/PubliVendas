import React, { useState, useEffect, useLayoutEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { getRealm } from "../../database/realm";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { Container, Content } from "./styles";
import { LoadingScreen } from "../../components/LoadingScreen";
import { FlatList } from "react-native";
import { Cliente } from "../../components/Cliente";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models/app.routesTypes";
import { FlashList } from "@shopify/flash-list";
import { Button } from "react-native-paper";

const Clientes: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [pessoas, setPessoas] = useState<IntPessoas[]>([]);
  const [loading, setLoading] = useState(true);

  const recuperarPessoas = async () => {
    try {
      const realm = await getRealm();
      const result = realm.objects<IntPessoas>("PessoasSchema").sorted("Nome");
      setPessoas(Array.from(result));
    } catch (error) {
      console.error("Error fetching PessoasSchema objects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigationDetalheCliente = (cliente: IntPessoas) => {
    navigation.navigate("ClienteDetalhe", { cliente });
  };

  const renderizarClientes = ({ item }: { item: IntPessoas }) => (
    <Cliente data={item} onPress={() => handleNavigationDetalheCliente(item)} />
  );

  const carregarDados = async () => {
    setLoading(true);
    await recuperarPessoas();
  };

  useEffect(() => {
    carregarDados();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <Content></Content>
      <FlashList
        data={pessoas}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={renderizarClientes}
        estimatedItemSize={200}
      />
    </Container>
  );
};

export default Clientes;
