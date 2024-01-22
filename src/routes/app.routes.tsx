import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models/app.routesTypes";

import DrawerScreens from "./drawer";
import Produtos from "../pages/Produtos";
import { useTheme } from "styled-components/native";
import ClienteDetalhe from "../components/ClienteDetalhe";

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
      <Stack.Screen name="ClienteDetalhe" component={ClienteDetalhe} />
    </Stack.Navigator>
  );
}

export { AppRoutes };
