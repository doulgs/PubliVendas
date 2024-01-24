import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./CustomDrawerContent";
import { Ionicons } from "@expo/vector-icons";
import Pedidos from "../pages/Pedidos";
import Clientes from "../pages/Clientes";
import ListaGrupos from "../pages/ListaGrupos";
import Config from "../pages/Config";

import { useTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function DrawerScreens() {
  const navigation = useNavigation();
  const { colors, colorBase } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Pedidos"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTintColor: colorBase.White,
        headerStyle: { backgroundColor: colors.Primary },
      }}
    >
      <Drawer.Screen name="Pedidos" component={Pedidos} />
      <Drawer.Screen
        name="Clientes"
        component={Clientes}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ marginRight: 16, padding: 8 }}
                onPress={() => navigation.navigate("AddCliente")}
              >
                <Ionicons name="person-add" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="ListaGrupos"
        component={ListaGrupos}
        options={{ headerTitle: "Selecione um Grupo" }}
      />
      <Drawer.Screen name="Config" component={Config} />
    </Drawer.Navigator>
  );
}

export default DrawerScreens;
