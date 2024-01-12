import { getRealm } from "../database/realm";
import uuid from "react-native-uuid";
import { Alert } from "react-native";

const InitializationTable = async () => {
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
          Alert.alert("Sync", `Tabela de usuarios criada com sucesso `);
        });
      } catch (error) {
        console.log("Erro na criação da tabela usuario -->", error);
      }
    }
  } catch (error) {
    console.log("Não foi possivel carregar os usuarios cadastrados -->", error);
  } finally {
    realm.close();
  }
};

export default InitializationTable;
