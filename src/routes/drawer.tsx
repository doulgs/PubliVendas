import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./CustomDrawerContent";

import Pedidos from "../pages/Pedidos";
import Clientes from "../pages/Clientes";
import ListaGrupos from "../pages/ListaGrupos";
import Config from "../pages/Config";

import { useTheme } from "styled-components/native";

const Drawer = createDrawerNavigator();

function DrawerScreens() {
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
      <Drawer.Screen name="Clientes" component={Clientes} />
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
