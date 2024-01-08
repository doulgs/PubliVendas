import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/Auth/SignIn";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export { AuthRoutes };
