import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { formatarParaMoeda } from "../../utils/formatarParaMoeda";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  data: IntPessoas;
}

const Cliente: React.FC<Props> = ({ data, ...rest }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const labelName = data.Nome?.toUpperCase()
    ? data.Nome.toUpperCase().slice(0, 2)
    : "";

  const handleButtonPress = () => {
    navigation.navigate("Pedidos");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleButtonPress}>
          <MaterialCommunityIcons
            name="account-search"
            size={30}
            color="white"
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Avatar.Text
        size={40}
        label={labelName}
        style={{ backgroundColor: colors.Primary }}
      />
      <View style={styles.content}>
        <Text numberOfLines={1} style={{ textTransform: "uppercase" }}>
          {data?.Handle} - {data?.Nome}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#c2c2",
  },
  content: {
    flex: 1,
    paddingBottom: 8,
    marginHorizontal: 8,
    borderColor: "#000",
    borderBottomWidth: 0.2,
  },
});

export { Cliente };
