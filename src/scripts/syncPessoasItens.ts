import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntPessoasItens } from "../database/interface/IntPessoasItens";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncPessoasItens() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("PessoasItens");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntPessoasItens) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "PessoasItensSchema",
            {
              ItemHandle: obj.ItemHandle,
              PessoaHandle: obj.PessoaHandle,
              Preco: obj.Preco,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync PessoasItens realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync PessoasItensSchema -->", error);
      }
    });
  }
  return { MsgPessoasItens: successMsg };
}

export { syncPessoasItens };
