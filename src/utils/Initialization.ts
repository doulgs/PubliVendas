import { getRealm } from "../database/realm";

const InitializationTable = async () => {
  const realm = await getRealm();
  try {
    const response = realm.objects("UserSchema").filtered("Login = 'admin'");
    if (response.length === 0) {
      try {
        realm.write(() => {
          const createdUserRealm = realm.create("UserSchema", {
            Handle: 1,
            Nome: "admin",
            Login: "admin",
            Password: "admin",
            Ativo: 1,
            EhAdministrador: "1",
            created_at: new Date(),
            updated_at: new Date(),
          });
          console.log("Sync", `Tabela de usuários criada com sucesso`);
        });

        // Retorna true se a tabela foi criada com sucesso
        return true;
      } catch (error) {
        console.log("Erro na criação da tabela de usuários -->", error);
        // Retorna false em caso de erro
        return false;
      }
    }
  } catch (error) {
    console.log("Não foi possível carregar os usuários cadastrados -->", error);
    // Retorna false em caso de erro
    return false;
  } finally {
    realm.close();
  }
};

export default InitializationTable;
