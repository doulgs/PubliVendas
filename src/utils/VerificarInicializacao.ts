import { getRealm } from "../database/realm";

const VerificarInicializacao = async () => {
  const realm = await getRealm();
  try {
    const existingUser = realm
      .objects("UserSchema")
      .filtered("Login = 'admin'");

    if (existingUser.length === 0) {
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
        console.log("Sync-Init", "Usuario Administrador inserido com sucesso");
      });
      return true; // Retorna true se a tabela foi criada com sucesso
    } else if (existingUser.length > 1) {
    }
  } catch (error) {
    console.log("Erro durante a inicialização -->", error);
  } finally {
    realm.close();
  }

  return false; // Retorna false em caso de erro
};

export { VerificarInicializacao };
