import React, { useEffect } from "react";
import uuid from "react-native-uuid";
import { getRealm } from "../database/realm";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Initialization = () => {
  const navigation = useNavigation();

  useEffect(() => {
    InitializationTable();
  }, []);

  async function InitializationTable() {
    const realm = await getRealm();
    try {
      const response = realm.objects("UserSchema").filtered("Login = 'admin'");
      if (response.length === 0) {
        try {
          realm.write(() => {
            const createdUserRealm = realm.create("UserSchema", {
              Handle: uuid.v4(),
              Login: "admin",
              Password: "admin",
              Ativo: true,
              EhGerente: true,
              EhAdministrador: true,
              token: "admin",
              created_at: new Date(),
              updated_at: new Date(),
            });
            console.log("Sync", `Tabela de usuarios criada com sucesso `);
            navigation.navigate("Settings");
          });
        } catch (error) {
          console.log("Erro na criação da tabela usuario -->", error);
        }
      }
      //console.log("Os seguintes dados foram localizados -->", response);
    } catch (error) {
      console.log(
        "Não foi possivel carregar os usuarios cadastrados -->",
        error
      );
    } finally {
      realm.close();
    }
  }

  return null;
};

export default Initialization;
