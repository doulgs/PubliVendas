import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Text, TextInput } from "react-native-paper";

import { Container } from "./styles";
import { useTheme } from "styled-components/native";

import Lookup from "../../Helpers/Lookup";
import { Products } from "../../components/Products";

import { itensFake } from "../../mocks/itensFake";
import { filterProduct } from "../../static/filterProduct";

const Produtos: React.FC = () => {
  const { colors } = useTheme();
  const dataItens = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const [productsData, setProductsData] = useState(itensFake);
  const [search, setSearch] = useState("");

  const handleSelectChange = (selectedValue: string | null) => {
    console.log("Selected Value:", selectedValue);
  };
  const handleSelectChange1 = (selectedValue: string | null) => {
    console.log("Selected Value1:", selectedValue);
  };
  const handleSelectFiltro = (selectedValue: string | null) => {
    console.log("Selected Value1:", selectedValue);
  };

  useEffect(() => {
    if (search === "") {
      setProductsData(itensFake);
    } else {
      setProductsData(
        itensFake.filter(
          (item) =>
            item.descricao.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
      );
    }
  }, [search]);

  return (
    <Container>
      <FlatList
        data={productsData}
        keyExtractor={(item) => String(item.handle)}
        renderItem={({ item }) => <Products data={item} />}
        ListHeaderComponent={() => (
          <View style={{ gap: 16, marginBottom: 24 }}>
            <Lookup
              label="Tabela"
              nameIcon="search"
              colorFocused={colors.Secondary}
              data={dataItens}
              onValueChange={handleSelectChange}
            />
            <Lookup
              label="Categoria"
              nameIcon="search"
              colorFocused={colors.Secondary}
              data={dataItens}
              onValueChange={handleSelectChange1}
            />
            <View style={{ marginTop: 16 }}>
              <Card.Content
                style={{
                  flexDirection: "row",
                  margin: -16,
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Card style={{ flex: 2, backgroundColor: "#FFF" }}>
                  <Card.Content style={{ margin: -10 }}>
                    <TextInput
                      mode="flat"
                      placeholder="Buscar..."
                      style={{
                        height: 47,
                        backgroundColor: "#FFF",
                      }}
                      value={search}
                      onChangeText={(t) => setSearch(t)}
                    />
                  </Card.Content>
                </Card>
                <View style={{ flex: 1 }}>
                  <Lookup
                    label="Filtro"
                    colorFocused={colors.Secondary}
                    data={filterProduct}
                    onValueChange={handleSelectFiltro}
                  />
                </View>
              </Card.Content>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Produtos;
