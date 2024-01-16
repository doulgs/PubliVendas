import { ObjectSchema } from "realm";

export const UserSchema: ObjectSchema = {
  name: "UserSchema",

  properties: {
    Handle: "int",
    Nome: "string",
    Login: "string",
    Password: "string",
    Ativo: "int",
    EhAdministrador: "string",
    created_at: "date",
    updated_at: "date",
  },

  primaryKey: "Handle",
};
