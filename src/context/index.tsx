import { useState, useContext, createContext } from "react";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
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

  async function signIn({ name, password }: UserProps) {
    console.log(name, password);
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signIn, user, isAuthenticated: !!user, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
