import { IntFilial } from "../database/interface/IntFilial";
import { getRealm } from "../database/realm";
import { obterToken } from "./obterToken";
import api from "../services/api";

type TableName =
  | "User"
  | "Filial"
  | "Formula"
  | "Tabela"
  | "Grupo1"
  | "Grupo2"
  | "Grupo3"
  | "Condicao"
  | "Unidade"
  | "Item"
  | "IteTabFor"
  | "GrupoExcecao"
  | "Grupo2Excecao"
  | "ItemExcecaoAuto"
  | "PromocaoItem"
  | "Cidade"
  | "Bairro"
  | "Pessoas"
  | "PessoasItens";

async function obterDadosDaTabelaAPI(Table: TableName) {
  try {
    const realm = await getRealm();
    const MyToken = await obterToken();
    const filial = realm.objects<IntFilial>("FilialSchema");
    const site = filial.length > 0 ? filial[0].NomeSite : null;

    const { data } = await api.post(
      `/pbl/${Table}/GetAll`,
      { siteName: site },
      { headers: { Authorization: `Bearer ${MyToken}` } }
    );

    //console.log(data.Data);
    return { IsValid: data.IsValid, Message: data.Message, Data: data.Data };
  } catch (err) {
    console.error(`Erro na solicitação da tabela: ${Table}`, err);
  }
}

export { obterDadosDaTabelaAPI };
