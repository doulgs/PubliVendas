import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntGrupo2Excecao } from "../database/interface/IntGrupo2Excecao";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncGrupo2Excecao() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("Grupo2Excecao");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntGrupo2Excecao) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "Grupo2ExcecaoSchema",
            {
              HandleGrupo2: obj.HandleGrupo2,
              HandleItem: obj.HandleItem,
              HandleGrupoExcecao: obj.HandleGrupoExcecao,
              Excecao: obj.Excecao,
              Valor: obj.Valor,
              Ativa: obj.Ativa,
              Ordem: obj.Ordem,
              IteHandle: obj.IteHandle,
              IteQuantidade: obj.IteQuantidade,
              IteTipoValor: obj.IteTipoValor,
              IteValorInformado: obj.IteValorInformado,
              Quantidade: obj.Quantidade,
              Mark: obj.Mark,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Grupo2Excecao realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync Grupo2ExcecaoSchema -->", error);
      }
    });
  }
  return { MsgGrupo2Excecao: successMsg };
}

export { syncGrupo2Excecao };
