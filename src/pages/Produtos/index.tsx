import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Container } from "./styles";
import { getRealm } from "../../database/realm";
import { propsStack } from "../../routes/Models/app.routesTypes";
import { useRoute } from "@react-navigation/native";
import { IntItem } from "../../database/interface/IntItem";
import { Text } from "react-native-paper";
import { Products } from "../../components/Products";

type ScreenProps = {
  handle: number;
};

const Produtos: React.FC = () => {
  const { handle } = useRoute().params as ScreenProps;
  const [itens, setItens] = useState<IntItem[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const recuperarItens = async () => {
        const realm = await getRealm();
        try {
          const result = realm
            .objects<IntItem>("ItemSchema")
            .filtered(`HandleGrupo2 = '${handle}'`);
          setItens(Array.from(result));
        } catch (error) {
          console.error("Error fetching ItemSchema objects:", error);
        }
      };

      recuperarItens();
    }, [])
  );
  return (
    <Container>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={({ item }) => <Products data={item} />}
      />
    </Container>
  );
};

export default Produtos;
