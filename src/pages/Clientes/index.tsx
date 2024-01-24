import React, { useState, useEffect, useLayoutEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { getRealm } from "../../database/realm";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { Container, Content } from "./styles";
import { LoadingScreen } from "../../components/LoadingScreen";
import { FlashList } from "@shopify/flash-list";
import { useNavigation, useIsFocused } from "@react-navigation/native"; // Adicione useIsFocused
import { propsStack } from "../../routes/Models/app.routesTypes";
import { Cliente } from "../../components/Cliente";

const Clientes: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const isFocused = useIsFocused(); // Adicione useIsFocused para verificar se a tela está focada
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

  const carregarDados = async () => {
    setLoading(true);
    await recuperarPessoas();
  };

  useEffect(() => {
    if (isFocused) {
      carregarDados();
    }
  }, [isFocused]);

  const handleNavigationDetalheCliente = (cliente: IntPessoas) => {
    navigation.navigate("ClienteDetalhe", { cliente });
  };

  const renderizarClientes = ({ item }: { item: IntPessoas }) => (
    <Cliente data={item} onPress={() => handleNavigationDetalheCliente(item)} />
  );

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <Content>
        {/* Se você quiser adicionar algum conteúdo adicional aqui, sinta-se à vontade */}
      </Content>
      <FlashList
        data={pessoas}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={renderizarClientes}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Clientes;
