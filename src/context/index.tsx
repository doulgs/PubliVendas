import { useState, useContext, createContext, useEffect } from "react";
import { getRealm } from "../database/realm";
import { getToken } from "../utils/getToken";
import { registerPhone } from "../utils/registerPhone";

import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  registerMobile: Function;
  signIn: Function;
  signOut: Function;
}

interface UserProps {
  Login: string;
  Password: string;
  Ativo: boolean;
  EhGerente: boolean;
  EhAdministrador: boolean;
  token: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvaider = ({ children }: any) => {
  const navigation = useNavigation();
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  async function registerMobile(
    activationKey: string,
    deviceId: string,
    plataforma: string,
    modelo: string,
    versao: string
  ) {
    setIsLoading(true);
    const realm = await getRealm();
    const MyToken = await getToken();
    try {
      const registerApp = await registerPhone({
        activationKey,
        deviceId,
        plataforma,
        modelo,
        versao,
        MyToken,
      });

      if (registerApp?.Message === "Aparelho já registrado na base de dados!") {
        navigation.navigate("SignIn");
        Alert.alert("Aparelho já registrado na base de dados!");
      } else if (registerApp?.IsValid === false) {
        console.log("Erro -->", registerApp);
      } else {
        const responseData = await registerApp?.Data.Usuarios;

        if (responseData) {
          Object.values(responseData).forEach((obj: any) => {
            try {
              realm.write(() => {
                const createdUserRealm = realm.create("UserSchema", {
                  Handle: obj.Handle,
                  Nome: obj.Nome,
                  Login: obj.Login,
                  Password: obj.Senha,
                  Ativo: obj.Vendedor_SowPublisoft,
                  EhAdministrador: obj.Role,
                  created_at: new Date(),
                  updated_at: new Date(),
                });

                console.log(
                  "Sync",
                  `criação do registro do usuario com o Handle ${obj.Handle} `
                );
                const response = realm.objects("UserSchema");
                console.log(response);
              });
            } catch (error) {
              console.log("Erro na criação do registro -->", error);
            }
          });
        }
        navigation.navigate("SignIn");
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    } finally {
      realm.close();
      setIsLoading(false);
    }
  }

  async function signIn(login: string, password: string) {
    const realm = await getRealm();
    setIsLoading(true);

    try {
      const response = realm
        .objects("UserSchema")
        .filtered(`Login = '${login}'`, `Password = '${password}'`)[0];
      if (response.length !== 0) {
        setUser({
          Login: response.Login as string,
          Password: response.Password as string,
          Ativo: response.Ativo as boolean,
          EhGerente: response.EhGerente as boolean,
          EhAdministrador: response.EhAdministrador as boolean,
          token: response.token as string,
        });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
      console.log(user);
      //TODO dar sequencia nas validacoes
    }
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        registerMobile,
        signIn,
        user,
        isAuthenticated: !!user,
        isLoading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
