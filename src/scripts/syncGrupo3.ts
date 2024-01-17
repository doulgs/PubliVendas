import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntGrupo3 } from "../database/interface/IntGrupo3";

async function syncGrupo3() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Grupo3");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntGrupo3) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "Grupo3Schema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Nome2: obj.Nome2,
              Reduzido: obj.Reduzido,
              Inativo: obj.Inativo,
              QuantidadeItensComposicao: obj.QuantidadeItensComposicao,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Grupo3 realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync Grupo3Schema -->", error);
      }
    });
  }
  return { MsgGrupo3: successMsg };
}

export { syncGrupo3 };
