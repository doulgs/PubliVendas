import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntItemExcecaoAuto } from "../database/interface/IntItemExcecaoAuto";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncItemExcecaoAuto() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("ItemExcecaoAuto");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntItemExcecaoAuto) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "ItemExcecaoAutoSchema",
            {
              HandleItem: obj.HandleItem,
              HandleExcecao: obj.HandleExcecao,
              Quantidade: obj.Quantidade,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync ItemExcecaoAuto realizado";
          }
        });
      } catch (error) {
        console.log(
          "Falha no processo de Sync ItemExcecaoAutoSchema -->",
          error
        );
      }
    });
  }
  return { MsgItemExcecaoAuto: successMsg };
}

export { syncItemExcecaoAuto };
