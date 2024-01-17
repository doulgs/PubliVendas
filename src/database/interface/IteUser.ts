import Realm from "realm";

export interface IteUser {
  Handle: number;
  Nome: string | null;
  Login: string | null;
  Password: string | null;
  Ativo: number | null;
  EhAdministrador: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export type IteUserObject = IteUser & Realm.Object;
