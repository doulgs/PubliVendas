import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface LoadingComponentProps {
  message?: string;
}

const Laoding: React.FC<LoadingComponentProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0A3750" />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default Laoding;
