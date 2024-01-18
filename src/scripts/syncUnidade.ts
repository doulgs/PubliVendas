import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntUnidade } from "../database/interface/IntUnidade";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncUnidade() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("Unidade");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntUnidade) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "UnidadeSchema",
            {
              Sigla: obj.Sigla,
              Descricao: obj.Descricao,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Unidade realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync UnidadeSchema -->", error);
      }
    });
  }
  return { MsgUnidade: successMsg };
}

export { syncUnidade };
