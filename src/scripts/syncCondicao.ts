import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntCondicao } from "../database/interface/IntCondicao";

async function syncCondicao() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Condicao");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntCondicao) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "CondicaoSchema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Descricao: obj.Descricao,
              EhDinheiro: obj.EhDinheiro,
              Plataforma: obj.Plataforma,
              EhPagamentoOnLine: obj.EhPagamentoOnLine,
              TipoPagto: obj.TipoPagto,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Condicao realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync CondicaoSchema -->", error);
      }
    });
  }
  return { MsgCondicao: successMsg };
}

export { syncCondicao };
