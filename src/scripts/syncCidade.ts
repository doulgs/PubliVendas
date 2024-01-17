import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntCidade } from "../database/interface/IntCidade";

async function syncCidade() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Cidade");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntCidade) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "CidadeSchema",
            {
              Handle: obj.Handle,
              Nome: obj.Nome,
              Ibge: obj.Ibge,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              UF: obj.UF,
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
