export const UserSchema = {
  name: "UserSchema",

  properties: {
    Handle: "string",
    Login: "string",
    Password: "string",
    Ativo: "bool",
    EhGerente: "bool",
    EhAdministrador: "bool",
    token: "string",
    created_at: "date",
    updated_at: "date",
  },

  primaryKey: "Handle",
};
