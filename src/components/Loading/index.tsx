import { View, ActivityIndicator } from "react-native";
import React from "react";

const Laoding = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={"#0A3750"} size={42} />
    </View>
  );
};

export default Laoding;
