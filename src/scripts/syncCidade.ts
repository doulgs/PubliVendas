import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntCidade } from "../database/interface/IntCidade";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncCidade() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("Cidade");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntCidade) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "CidadeSchema",
            {
              UF: obj.UF,
              Nome: obj.Nome,
              Ibge: obj.Ibge,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Cidade realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync CidadeSchema -->", error);
      }
    });
  }
  return { MsgCidade: successMsg };
}

export { syncCidade };
