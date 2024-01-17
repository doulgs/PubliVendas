import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntItem } from "../database/interface/IntItem";

async function syncItem() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Item");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntItem) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "ItemSchema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleGrupo1: obj.HandleGrupo1,
              HandleGrupo2: obj.HandleGrupo2,
              HandleGrupo3: obj.HandleGrupo3,
              HandleUnidade: obj.HandleUnidade,
              HandleTrade: obj.HandleTrade,
              Codigo: obj.Codigo,
              Descricao: obj.Descricao,
              Complemento: obj.Complemento,
              DescReduzida: obj.DescReduzida,
              Foto: obj.Foto,
              PrecoValor: obj.PrecoValor,
              Composicao: obj.Composicao,
              Descinta: obj.Descinta,
              ComposicaoBarra: obj.ComposicaoBarra,
              NaoPermiteDesconto: obj.NaoPermiteDesconto,
              DescricaoDif: obj.DescricaoDif,
              Plataforma: obj.Plataforma,
              VendaValor: obj.VendaValor,
              VendaFrete: obj.VendaFrete,
              CustoValor: obj.CustoValor,
              ClassificacaoMarketPlace: obj.ClassificacaoMarketPlace,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Item realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync ItemSchema -->", error);
      }
    });
  }
  return { MsgIntItem: successMsg };
}

export { syncItem };
