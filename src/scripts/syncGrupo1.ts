import Realm from "realm";
import { IntGrupo1 } from "../database/interface/IntGrupo1";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";

async function syncGrupo1() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Grupo1");
  let successMsg: string | null = null; // Variável para armazenar a mensagem de sucesso

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;
    dados.forEach((obj: IntGrupo1) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "Grupo1Schema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Reduzido: obj.Reduzido,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          // Defina a mensagem de sucesso apenas uma vez
          if (!successMsg) {
            successMsg = "Sync Grupo1 realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync Grupo1Schema -->", error);
      }
    });
  }

  return { MsgGrupo1: successMsg }; // Retorna a mensagem de sucesso (pode ser null se não houver sucesso)
}

export { syncGrupo1 };
