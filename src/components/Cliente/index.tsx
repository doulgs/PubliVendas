import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Text } from "react-native-paper";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps {
  data: IntPessoas;
}

const Cliente: React.FC<Props> = ({ data, ...rest }) => {
  const { colors, colorBase } = useTheme();
  const labelName = data.Nome?.toUpperCase()
    ? data.Nome.toUpperCase().slice(0, 2)
    : "";

  const syncColor =
    data.HandleTrade !== null ? colorBase.Success : colorBase.Error;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Avatar.Text
        size={40}
        label={labelName}
        style={{ backgroundColor: colors.Primary }}
      />
      <View style={styles.content}>
        <Text
          numberOfLines={1}
          style={{ textTransform: "uppercase", maxWidth: "90%" }}
        >
          {data?.Handle} - {data?.Nome}
        </Text>
        <MaterialCommunityIcons
          name="cloud-sync-outline"
          size={24}
          color={syncColor}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
  },
});

export { Cliente };
