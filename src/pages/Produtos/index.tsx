import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator, FlatList } from "react-native";
import { Container } from "./styles";
import { getRealm } from "../../database/realm";
import { propsStack } from "../../routes/Models/app.routesTypes";
import { useRoute } from "@react-navigation/native";
import { IntItem } from "../../database/interface/IntItem";
import { Text } from "react-native-paper";
import { Products } from "../../components/Products";
import { IntIteTabFor } from "../../database/interface/IntIteTabFor";
import { IntUnidade } from "../../database/interface/IntUnidade";
import { LoadingScreen } from "../../components/LoadingScreen";
import { IntGrupo2 } from "../../database/interface/IntGrupo2";

type ScreenProps = {
  handle: number;
};

const Produtos: React.FC = () => {
  const { handle } = useRoute().params as ScreenProps;
  const [itens, setItens] = useState<IntItem[]>([]);
  const [loading, setLoading] = useState(true); // Adiciona estado de carregamento

  useFocusEffect(
    React.useCallback(() => {
      const recuperarItens = async () => {
        const realm = await getRealm();
        try {
          const result = realm
            .objects<IntItem>("ItemSchema")
            .filtered(`HandleGrupo2 = '${handle}'`);

          realm.write(() => {
            result.forEach(async (obj: IntItem) => {
              const obterIteTabFor = realm
                .objects<IntIteTabFor>("IteTabForSchema")
                .filtered(`HandleItem = '${obj.Handle}'`);

              const obterUnidade = realm
                .objects<IntUnidade>("UnidadeSchema")
                .filtered(`Handle = '${obj.HandleUnidade}'`);

              const obterGrupo2 = realm
                .objects<IntGrupo2>("Grupo2Schema")
                .filtered(`Handle = '${obj.HandleGrupo2}'`);

              // Adicione as propriedades desejadas ao objeto 'obj' dentro da transação
              obj.VendaValor = obterIteTabFor[0]?.Preco;
              obj.Unidade = obterUnidade[0]?.Sigla;
              obj.Grupo2Nome = obterGrupo2[0]?.Nome;
            });
          });

          setItens(Array.from(result));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching ItemSchema objects:", error);
          setLoading(false);
        }
      };

      recuperarItens();
    }, [])
  );

  if (loading) {
    return <LoadingScreen />;
  }

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
