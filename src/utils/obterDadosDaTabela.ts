import api from "../services/api";

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

interface Props {
  SiteName: string;
  MyToken: string;
  Table: TableName;
}

async function obterDadosDaTabela({ SiteName, MyToken, Table }: Props) {
  try {
    const { data } = await api.post(
      `/pbl/Filial/${Table}`,
      { siteName: SiteName },
      { headers: { Authorization: `Bearer ${MyToken}` } }
    );

    return {
      IsValid: data.IsValid,
      Message: data.Message,
      Data: data.Data,
    };
  } catch (err) {
    console.error(`Erro na solicitação da tabela: ${Table}`, err);
  }
}

export { obterDadosDaTabela };
