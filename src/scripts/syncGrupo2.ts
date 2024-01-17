import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntGrupo2 } from "../database/interface/IntGrupo2";

async function syncGrupo2() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Grupo2");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntGrupo2) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "Grupo2Schema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Reduzido: obj.Reduzido,
              Tipo: obj.Tipo,
              Foto: obj.Foto,
              PossuiComposicao: obj.PossuiComposicao,
              PermiteItemSemValor: obj.PermiteItemSemValor,
              AbrirTelaExcecoes: obj.AbrirTelaExcecoes,
              Plataforma: obj.Plataforma,
              PossuiCaracteristicaItem: obj.PossuiCaracteristicaItem,
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
