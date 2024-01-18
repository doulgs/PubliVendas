import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntGrupo2 } from "../database/interface/IntGrupo2";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncGrupo2() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("Grupo2");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntGrupo2) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "Grupo2Schema",
            {
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Reduzido: obj.Reduzido,
              Tipo: obj.Tipo,
              Foto: obj.Foto,
              PossuiComposicao: obj.PossuiComposicao,
              PermiteItemSemValor: obj.PermiteItemSemValor,
              AbrirTelaExcecoes: obj.AbrirTelaExcecoes,
              PossuiCaracteristicaItem: obj.PossuiCaracteristicaItem,
              FotoByte: obj.FotoByte,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Grupo2 realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync Grupo2Schema -->", error);
      }
    });
  }
  return { MsgGrupo2: successMsg };
}

export { syncGrupo2 };
