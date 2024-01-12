import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Pedidos from "../pages/Pedidos";
import Clientes from "../pages/Clientes";
import Produtos from "../pages/Produtos";
import Config from "../pages/Config";
import CustomDrawerContent from "./CustomDrawerContent";
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
      <Drawer.Screen name="Produtos" component={Produtos} />
      <Drawer.Screen name="Config" component={Config} />
    </Drawer.Navigator>
  );
}

export default DrawerScreens;
