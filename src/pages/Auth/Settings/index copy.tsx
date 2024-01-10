import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import DeviceInfo from "react-native-device-info";

const Settings = () => {
  const [deviceId, setDeviceId] = useState("Clique para obter o ID único");

  const getDeviceId = async () => {
    const uniqueId = await DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
    console.log(uniqueId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{deviceId}</Text>
        <TouchableOpacity
          onPress={getDeviceId}
          activeOpacity={0.5}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>OBTER O ID DO DISPOSITIVO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#0000FF",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 10,
    padding: 20,
    color: "#f00",
  },
});

export default Settings;
