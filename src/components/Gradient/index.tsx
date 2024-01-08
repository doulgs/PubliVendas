import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Box, BoxContainer, Logo } from "./styles";

interface Props {
  children: React.ReactElement;
}

const Gradient: React.FC<Props> = ({ children }: any) => {
  return (
    <LinearGradient colors={["#0094D8", "#0A3750"]} style={styles.container}>
      <Logo
        source={require("../../assets/images/Publisoft.png")}
        resizeMode="contain"
      />
      <BoxContainer>
        <Box>{children}</Box>
      </BoxContainer>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Gradient;
