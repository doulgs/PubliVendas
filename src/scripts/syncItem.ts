import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntItem } from "../database/interface/IntItem";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncItem() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("Item");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntItem) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "ItemSchema",
            {
              HandleGrupo1: obj.HandleGrupo1,
              HandleGrupo2: obj.HandleGrupo2,
              HandleGrupo3: obj.HandleGrupo3,
              HandleUnidade: obj.HandleUnidade,
              ClassificacaoMarketPlace: obj.ClassificacaoMarketPlace,
              Codigo: obj.Codigo,
              Descricao: obj.Descricao,
              Complemento: obj.Complemento,
              DescReduzida: obj.DescReduzida,
              Foto: obj.Foto,
              PrecoValor: obj.PrecoValor,
              Composicao: obj.Composicao,
              DescLonga: obj.DescLonga,
              ComposicaoBarra: obj.ComposicaoBarra,
              NaoPermiteDesconto: obj.NaoPermiteDesconto,
              DescricaoDif: obj.DescricaoDif,
              VendaValor: obj.VendaValor,
              ValorPromocional: obj.ValorPromocional,
              VendaFrete: obj.VendaFrete,
              CustoValor: obj.CustoValor,
              Observacao: obj.Observacao,
              Quantidade: obj.Quantidade,
              FotoByte: obj.FotoByte,
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
