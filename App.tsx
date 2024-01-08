import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvaider } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";
import Routes from "./src/routes";
import { THEME } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AuthProvaider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Routes />
        </NavigationContainer>
      </AuthProvaider>
    </ThemeProvider>
  );
}
