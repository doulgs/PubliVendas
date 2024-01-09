import { useState, useContext, createContext, useEffect } from "react";
import { getRealm } from "../database/realm";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  loadingAuth: boolean;
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

interface UserRealProps {
  Handle: string;
  Login: string;
  Password: string;
  Ativo: boolean;
  EhGerente: boolean;
  EhAdministrador: boolean;
  token: string;
  created_at: Date;
  updated_at: Date;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvaider = ({ children }: any) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<true | false>(false);

  useEffect(() => {
    //handleInitialization();
  }, []);

  async function signIn(login: string, password: string) {
    const realm = await getRealm();
    setLoadingAuth(true);

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
      setLoadingAuth(false);
      console.log(user);
      //TODO dar sequencia nas validacoes
    }
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signIn, user, isAuthenticated: !!user, loadingAuth, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
