import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntGrupoExcecao } from "../database/interface/IntGrupoExececao";

async function syncGrupoExcecao() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("GrupoExcecao");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntGrupoExcecao) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "GrupoExcecaoSchema",
            {
              HandleFilial: obj.HandleFilial,
              HandleGrupo2: obj.HandleGrupo2,
              HandleItem: obj.HandleItem,
              HandleTrade: obj.HandleTrade,
              Descricao: obj.Descricao,
              SelecaoMinima: obj.SelecaoMinima,
              SelecaoMaxima: obj.SelecaoMaxima,
              Quantidade: obj.Quantidade,
              ValorGrupo: obj.ValorGrupo,
              Ordem: obj.Ordem,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync GrupoExcecao realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync GrupoExcecaoSchema -->", error);
      }
    });
  }
  return { MsgGrupoExcecao: successMsg };
}

export { syncGrupoExcecao };
