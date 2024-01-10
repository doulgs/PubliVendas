import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/Auth/SignIn";
import Settings from "../pages/Auth/Settings";
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  const { colors, colorBase } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.Primary },
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: "Configurações",
          headerTintColor: colorBase.White,
        }}
      />
    </Stack.Navigator>
  );
}

export { AuthRoutes };
