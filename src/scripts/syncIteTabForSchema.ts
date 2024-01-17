import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntIteTabFor } from "../database/interface/IntIteTabFor";

async function syncIteTabFor() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("IteTabFor");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntIteTabFor) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "IteTabForSchema",
            {
              Handle: obj.Handle,
              HandleItem: obj.HandleItem,
              HandleTabela: obj.HandleTabela,
              HandleFormula: obj.HandleFormula,
              HandleFilial: obj.HandleFilial,
              Preco: obj.Preco,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync IteTabFor realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync IteTabForSchema -->", error);
      }
    });
  }
  return { MsgIteTabFor: successMsg };
}

export { syncIteTabFor };
