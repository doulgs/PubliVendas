import Realm from "realm";
import {
  UserSchema,
  BairroSchema,
  CidadeSchema,
  CondicaoSchema,
  FormulaSchema,
  Grupo1Schema,
  Grupo2Excecao,
  Grupo2Schema,
  Grupo3Schema,
  GrupoExcecaoSchema,
  ItemExcecaoAutoSchema,
  ItemSchema,
  PessoaItemSchema,
  PessoaSchema,
  PromocaoItemSchema,
  TabelaSchema,
  UnidadeSchema,
} from "./schemas";

export const getRealm = async () =>
  await Realm.open({
    path: "publiDataBase",
    schema: [
      UserSchema,
      BairroSchema,
      CidadeSchema,
      CondicaoSchema,
      FormulaSchema,
      Grupo1Schema,
      Grupo2Excecao,
      Grupo2Schema,
      Grupo3Schema,
      GrupoExcecaoSchema,
      ItemExcecaoAutoSchema,
      ItemSchema,
      PessoaItemSchema,
      PessoaSchema,
      PromocaoItemSchema,
      TabelaSchema,
      UnidadeSchema,
    ],
  });
