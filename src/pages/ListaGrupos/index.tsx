import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";
import { IntGrupo2 } from "../../database/interface/IntGrupo2";
import { Container } from "./styles";
import { getRealm } from "../../database/realm";
import { Grupo2 } from "../../components/Grupo2";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Models/app.routesTypes";

const ListaGrupos: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [grupo2, setGrupo2] = useState<IntGrupo2[]>([]);

  async function handleNavigationProdutos(handle: number) {
    console.log(handle);
    navigation.navigate("Produtos", { handle });
  }

  useFocusEffect(
    React.useCallback(() => {
      const recuperarGrupo2 = async () => {
        const realm = await getRealm();
        try {
          const result = realm.objects<IntGrupo2>("Grupo2Schema");
          setGrupo2(Array.from(result));
        } catch (error) {
          console.error("Error fetching Grupo2 objects:", error);
        }
      };

      recuperarGrupo2();
    }, [])
  );

  return (
    <Container>
      <FlatList
        data={grupo2}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={({ item }) => (
          <Grupo2
            data={item}
            onPress={() => handleNavigationProdutos(item.Handle)}
          />
        )}
        numColumns={3}
        contentContainerStyle={{ flex: 1, alignItems: "center" }}
      />
    </Container>
  );
};

export default ListaGrupos;
