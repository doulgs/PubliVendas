import { getRealm } from "../database/realm";
import api from "../services/api";

interface getAllProps {
  SiteName: string;
  MyToken: string;
  Table: TableName;
}

type TableName =
  | "UserSchema"
  | "BairroSchema"
  | "CidadeSchema"
  | "CondicaoSchema"
  | "FormulaSchema"
  | "Grupo1Schema"
  | "Grupo2Excecao"
  | "Grupo2Schema"
  | "Grupo3Schema"
  | "GrupoExcecaoSchema"
  | "ItemExcecaoAutoSchema"
  | "ItemSchema"
  | "PessoaItemSchema"
  | "PessoaSchema"
  | "PromocaoItemSchema"
  | "TabelaSchema"
  | "UnidadeSchema";

async function getAll({ SiteName, MyToken, Table }: getAllProps) {
  try {
    const response = await api.post(
      `/pbl/Filial/${Table}`,
      {
        siteName: `${SiteName}`,
      },
      {
        headers: {
          Authorization: `Bearer ${MyToken}`,
        },
      }
    );

    const IsValid = response.data.IsValid;
    const Message = response.data.Message;
    const Data = response.data.Data;

    return { IsValid, Message, Data };
  } catch (err) {
    console.error(`"Erro na solicitação da tabela :"${Table}`, err);
  }
}

export { getAll };
