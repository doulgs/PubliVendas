import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

import { THEME } from "./src/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
