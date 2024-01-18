import Realm from "realm";
import {
  BairroSchema,
  CidadeSchema,
  CondicaoSchema,
  FilialSchema,
  FormulaSchema,
  Grupo1Schema,
  Grupo2ExcecaoSchema,
  Grupo2Schema,
  Grupo3Schema,
  GrupoExcecaoSchema,
  ItemExcecaoAutoSchema,
  ItemSchema,
  PessoasItensSchema,
  PessoasSchema,
  PromocaoItemSchema,
  TabelaSchema,
  UnidadeSchema,
  IteTabForSchema,
  UserSchema,
} from "./schemas";

export const getRealm = async () =>
  await Realm.open({
    path: "publiDataBase",
    schema: [
      BairroSchema,
      CidadeSchema,
      CondicaoSchema,
      FilialSchema,
      FormulaSchema,
      Grupo1Schema,
      Grupo2ExcecaoSchema,
      Grupo2Schema,
      Grupo3Schema,
      GrupoExcecaoSchema,
      ItemExcecaoAutoSchema,
      ItemSchema,
      PessoasItensSchema,
      PessoasSchema,
      PromocaoItemSchema,
      TabelaSchema,
      UnidadeSchema,
      IteTabForSchema,
      UserSchema,
    ],
  });
