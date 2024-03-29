import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models/app.routesTypes";

import { useTheme } from "styled-components/native";

import DrawerScreens from "./drawer";
import Produtos from "../pages/Produtos";
import ClienteDetalhe from "../components/ClienteDetalhe";
import AddCliente from "../pages/AddCliente";

const Stack = createNativeStackNavigator<propsNavigationStack>();

function AppRoutes() {
  const { colors, colorBase } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colorBase.White,
        headerStyle: { backgroundColor: colors.Primary },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={DrawerScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen
        name="ClienteDetalhe"
        component={ClienteDetalhe}
        options={{ headerTitle: "Detalhes" }}
      />
      <Stack.Screen
        name="AddCliente"
        component={AddCliente}
        options={{
          headerTitle: "Cadastro de Cliente",
        }}
      />
    </Stack.Navigator>
  );
}

export { AppRoutes };
