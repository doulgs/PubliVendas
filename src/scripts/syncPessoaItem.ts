import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntPessoaItem } from "../database/interface/IntPessoaItem";

async function syncPessoaItem() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("PessoaItem");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntPessoaItem) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "PessoaItemSchema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              ItemHandle: obj.ItemHandle,
              PessoaHandle: obj.PessoaHandle,
              Preco: obj.Preco,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync PessoaItem realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync PessoaItemSchema -->", error);
      }
    });
  }
  return { MsgPessoaItem: successMsg };
}

export { syncPessoaItem };
