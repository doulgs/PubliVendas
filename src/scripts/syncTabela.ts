import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntTabela } from "../database/interface/IntTabela";

async function syncTabela() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Tabela");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntTabela) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "TabelaSchema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
              Descricao: obj.Descricao,
              Preco1: obj.Preco1,
              Preco2: obj.Preco2,
              Preco3: obj.Preco3,
              HandleFormula: obj.HandleFormula,
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
