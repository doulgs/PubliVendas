import React, { useState, useEffect } from "react";
import { getRealm } from "../../database/realm";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { Container } from "./styles";
import { LoadingScreen } from "../../components/LoadingScreen";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Cliente } from "../../components/Cliente";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models/app.routesTypes";

const Clientes: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [pessoas, setPessoas] = useState<IntPessoas[]>([]);
  const [loading, setLoading] = useState(true);

  const recuperarPessoas = async () => {
    const realm = await getRealm();
    try {
      const result = realm.objects<IntPessoas>("PessoasSchema").sorted("Nome");
      setPessoas(Array.from(result));
    } catch (error) {
      console.error("Error fetching PessoasSchema objects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const carregarDados = async () => {
      setLoading(true);
      await recuperarPessoas();
    };

    carregarDados();
  }, []); // O array vazio indica que esse efeito só deve ser executado quando o componente é montado

  if (loading) {
    return <LoadingScreen />;
  }

  function handleNavigationDetalheCliente(cliente: IntPessoas) {
    navigation.navigate("ClienteDetalhe", { cliente });
  }

  function renderizarClientes({ item }: ListRenderItemInfo<IntPessoas>) {
    return (
      <Cliente
        data={item}
        onPress={() => handleNavigationDetalheCliente(item)}
      />
    );
  }

  return (
    <Container>
      <FlatList
        data={pessoas}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={renderizarClientes}
        contentContainerStyle={{ marginHorizontal: 8 }}
      />
    </Container>
  );
};

export default Clientes;
