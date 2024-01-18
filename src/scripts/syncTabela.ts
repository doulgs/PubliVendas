import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntTabela } from "../database/interface/IntTabela";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncTabela() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("Tabela");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntTabela) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "TabelaSchema",
            {
              Descricao: obj.Descricao,
              Preco1: obj.Preco1,
              Preco2: obj.Preco2,
              Preco3: obj.Preco3,
              HandleFormula: obj.HandleFormula,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Tabela realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync TabelaSchema -->", error);
      }
    });
  }
  return { MsgTabela: successMsg };
}

export { syncTabela };
