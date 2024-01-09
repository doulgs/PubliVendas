import { useState, useContext, createContext } from "react";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  loadingAuth: boolean;
  signIn: Function;
  signOut: Function;
}

interface UserProps {
  name: string;
  password: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvaider = ({ children }: any) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<true | false>(false);

  async function signIn(name: string, password: string) {
    setLoadingAuth(true);
    setUser({ name, password });
    setLoadingAuth(false);
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
