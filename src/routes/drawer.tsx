import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Pedidos from "../pages/Pedidos";
import Clientes from "../pages/Clientes";
import Produtos from "../pages/Produtos";
import Config from "../pages/Config";

const Drawer = createDrawerNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator initialRouteName="Pedidos">
      <Drawer.Screen name="Pedidos" component={Pedidos} />
      <Drawer.Screen name="Clientes" component={Clientes} />
      <Drawer.Screen name="Produtos" component={Produtos} />
      <Drawer.Screen name="Config" component={Config} />
    </Drawer.Navigator>
  );
}

export default DrawerScreens;
