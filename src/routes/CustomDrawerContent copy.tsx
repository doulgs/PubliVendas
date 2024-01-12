import * as React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";
import { useTheme } from "styled-components/native";

type CustomDrawerContentProps = DrawerContentComponentProps;

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const { colors, colorBase } = useTheme();
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: colors.Background[50] }}
      {...props}
    >
      <View
        style={[styles.HeaderContainer, { backgroundColor: colors.Primary }]}
      ></View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
  },
  MenuStyle: {
    height: 50,
    width: "100%",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  TextStyle: {
    fontSize: 14,
  },
});

export default CustomDrawerContent;
