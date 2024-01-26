import { useState, useContext, createContext, useEffect } from "react";
import { Alert } from "react-native";
import { getRealm } from "../database/realm";
import { obterToken } from "../utils/obterToken";
import { registrarTelefone } from "../utils/registrarTelefone";
import { criptografarParaMD5 } from "../utils/criptografarParaMD5";
import { useNavigation } from "@react-navigation/native";
import { gerarHandle } from "../utils/gerarHandle";
import { FormCadClienteProps } from "../pages/AddCliente";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  registerMobile: Function;
  cadastrarCliente: Function;
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
    navigation.navigate("LoadingScreen");
    const realm = await getRealm();
    const MyToken = await obterToken();

    try {
      const registerApp = await registrarTelefone({
        activationKey,
        deviceId,
        plataforma,
        modelo,
        versao,
        MyToken,
      });

      if (registerApp?.Message === "Aparelho já registrado na base de dados!") {
        navigation.goBack();
        Alert.alert("Aparelho já registrado na base de dados!");
      } else if (registerApp?.IsValid === false) {
        console.log("Erro -->", registerApp);
      } else {
        saveUserData(realm, registerApp?.Data.Usuarios);
        saveFilialData(realm, registerApp?.Data.Filial);
        navigation.navigate("SignIn");
      }
    } catch (err) {
      console.log(err);
      navigation.navigate("Settings");
    } finally {
      realm.close();
      setIsLoading(false);
    }
  }

  function saveUserData(realm: Realm, responseDataUsuario?: any) {
    if (responseDataUsuario) {
      responseDataUsuario.forEach((obj: any) => {
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
              "Sync-Usuario",
              `criação do registro do usuario --> ${obj.Login}`
            );
          });
        } catch (error) {
          console.log("Erro na criação do registro de Usuario -->", error);
        }
      });
    }
  }

  function saveFilialData(realm: Realm, responseDataFilial?: any) {
    if (responseDataFilial) {
      try {
        realm.write(() => {
          const createdFilialRealm = realm.create("FilialSchema", {
            Handle: responseDataFilial.Handle,
            Nome: responseDataFilial.Nome,
            Razao: responseDataFilial.Razao,
            Fone: responseDataFilial.Fone,
            CnpjCpf: responseDataFilial.CnpjCpf,
            NomeSite: responseDataFilial.NomeSite,
            Endereco: responseDataFilial.Endereco,
            Numero: responseDataFilial.Numero,
            Complemento: responseDataFilial.Complemento,
            Bairro: responseDataFilial.Bairro,
            Cep: responseDataFilial.Cep,
            Cidade: responseDataFilial.Cidade,
            Estado: responseDataFilial.Estado,
          });
          console.log("Sync-Filial");
        });
      } catch (error) {
        console.log("Erro na criação do registro de Filial -->", error);
      }
    }
  }

  async function signIn(login: string, password: string) {
    const passwordCrypto = criptografarParaMD5(password);
    const realm = await getRealm();
    setIsLoading(true);

    try {
      const response = realm
        .objects("UserSchema")
        .filtered(`Login = '${login}'`, `Password = '${passwordCrypto}'`)[0];
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
    }
  }

  async function signOut() {
    setUser(null);
  }

  async function cadastrarCliente(data: FormCadClienteProps) {
    const MyHandle = await gerarHandle("PessoasSchema");
    const realm = await getRealm();
    try {
      realm.write(() => {
        const createdPessoaRealm = realm.create("PessoasSchema", {
          Handle: MyHandle,
          Nome: data?.Nome,
          Fantasia: data?.Fantasia,
          CnpjCpf: data?.CnpjCpf,
          Insc: data?.Insc,
          Endereco: data?.Endereco,
          Numero: parseInt(data?.Numero),
          Bairro: data?.Bairro,
          Cep: data?.CEP,
          Cidade: data?.Cidade,
          Email: data?.Email,
          Telefone: data?.Telefone,
          Observacao: data?.Observacao,
          Uf: data?.UF,
          Tipo: "F",
          Plataforma: 4,
        });
      });
      console.log("Pessoa Registrada com sucesso");
    } catch (error) {
      console.log("Erro na criação do registro de Usuario -->", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        registerMobile,
        signIn,
        user,
        isAuthenticated: !!user,
        isLoading,
        cadastrarCliente,
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
