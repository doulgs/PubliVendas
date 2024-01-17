import Realm from "realm";

export interface IteUser {
  Handle: number;
  Nome: string;
  Login: string;
  Password: string;
  Ativo: number;
  EhAdministrador: string;
  created_at: Date;
  updated_at: Date;
}

export type IteUserObject = IteUser & Realm.Object;
