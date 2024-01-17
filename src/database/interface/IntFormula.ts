import Realm from "realm";

export interface IntFormula {
  Handle: number;
  HandleFilial: number;
  HandleTrade: number;
  Plataforma: number;
  Descricao: string;
  Fator11: number;
  Fator12: number;
  Fator13: number;
  Fator21: number;
  Fator22: number;
  Fator23: number;
  Fator31: number;
  Fator32: number;
  Fator33: number;
  Desc11: number;
  Desc12: number;
  Desc13: number;
  Desc21: number;
  Desc22: number;
  Desc23: number;
  Desc31: number;
  Desc32: number;
  Desc33: number;
  Arredonda: boolean;
  Utiliza1: string;
  Utiliza2: string;
  Utiliza3: string;
  Icms: number;
}

export type IntFormulaObject = IntFormula & Realm.Object;
