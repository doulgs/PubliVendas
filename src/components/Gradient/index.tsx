import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  children: React.ReactElement;
}

const Gradient: React.FC<Props> = ({ children }: any) => {
  return (
    <LinearGradient colors={["#02609e", "#034570"]} style={styles.container}>
      {children}
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
