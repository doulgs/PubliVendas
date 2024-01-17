import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntUnidade } from "../database/interface/IntUnidade";

async function syncUnidade() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Unidade");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntUnidade) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "UnidadeSchema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Sigla: obj.Sigla,
              Descricao: obj.Descricao,
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
