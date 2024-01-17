import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntItemExcecaoAuto } from "../database/interface/IntItemExcecaoAuto";

async function syncItemExcecaoAuto() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("ItemExcecaoAuto");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntItemExcecaoAuto) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "ItemExcecaoAutoSchema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleItem: obj.HandleItem,
              HandleExcecao: obj.HandleExcecao,
              HandleTrade: obj.HandleTrade,
              Quantidade: obj.Quantidade,
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
