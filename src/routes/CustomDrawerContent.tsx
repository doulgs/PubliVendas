import * as React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, StyleSheet, Linking } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CustomDrawerContentProps = DrawerContentComponentProps;

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../assets/images/UserPublisoft.png")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Publisoft</Title>
                <Caption style={styles.caption}>@Publisoft</Caption>
              </View>
            </View>
          </View>

          <View style={styles.drawerSection}>
            <DrawerItem
              {...props}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="format-list-text"
                  color={color}
                  size={size}
                />
              )}
              label="Pedidos"
              onPress={() => {
                props.navigation.navigate("Pedidos");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-details-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Clientes"
              onPress={() => {
                props.navigation.navigate("Clientes");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-box-multiple-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Produtos"
              onPress={() => {
                props.navigation.navigate("Produtos");
              }}
            />

            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="application-cog-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Configurações"
              onPress={() => {
                props.navigation.navigate("Config");
              }}
            /> */}
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="robot-confused-outline"
              color={color}
              size={size}
            />
          )}
          label="Suporte"
          onPress={() =>
            Linking.openURL(
              "https://api.whatsapp.com/send/?phone=5544997721110&text=Ol%C3%A1,%20estou%20utilizando%20o%20Aplicativo%20PubliVendas%20e%20estou%20com%20algumas%20d%C3%BAvidas/erros,%20gostaria%20de%20iniciar%20um%20atendimento%20com%20o%20suporte%20da%20Publisoft"
            )
          }
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sair da aplicação"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderBottomColor: "#f4f4f4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export { CustomDrawerContent };
