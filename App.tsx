import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvaider } from "./src/context";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";
import { THEME } from "./src/theme";
import Routes from "./src/routes";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { Inicializacao } from "./src/scripts/Inicializacao";

export default function App() {
  Inicializacao();

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <PaperProvider>
          <AuthProvaider>
            <StatusBar style="auto" />
            <Routes />
          </AuthProvaider>
        </PaperProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
