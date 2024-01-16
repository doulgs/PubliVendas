import { ObjectSchema } from "realm";

export const FormulaSchema: ObjectSchema = {
  name: "FormulaSchema",

  properties: {
    Handle: "int",
    HandleFilial: "int",
    HandleTrade: "int",
    Plataforma: "int",
    Descricao: "string",
    Fator11: "double",
    Fator12: "double",
    Fator13: "double",
    Fator21: "double",
    Fator22: "double",
    Fator23: "double",
    Fator31: "double",
    Fator32: "double",
    Fator33: "double",
    Desc11: "double",
    Desc12: "double",
    Desc13: "double",
    Desc21: "double",
    Desc22: "double",
    Desc23: "double",
    Desc31: "double",
    Desc32: "double",
    Desc33: "double",
    Arredonda: "double",
    Utiliza1: "string",
    Utiliza2: "string",
    Utiliza3: "string",
    Icms: "int",
  },

  primaryKey: "Handle",
};
