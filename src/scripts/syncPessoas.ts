import Realm from "realm";
import { getRealm } from "../database/realm";
import { IntPessoas } from "../database/interface/IntPessoas";
import { obterDadosDaTabelaAPI } from "../utils/obterDadosDaTabela";

async function syncPessoas() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabelaAPI("Pessoas");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntPessoas) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "PessoasSchema",
            {
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Fantasia: obj.Fantasia,
              CnpjCpf: obj.CnpjCpf,
              Insc: obj.Insc,
              Endereco: obj.Endereco,
              Numero: obj.Numero,
              Complemento: obj.Complemento,
              Proximidade: obj.Proximidade,
              Bairro: obj.Bairro,
              Cep: obj.Cep,
              Cidade: obj.Cidade,
              Email: obj.Email,
              Telefone: obj.Telefone,
              Observacao: obj.Observacao,
              Tipo: obj.Tipo,
              Uf: obj.Uf,
              HandleTabela: obj.HandleTabela,
              HandleUsuario: obj.HandleUsuario,
              HandleCondicao: obj.HandleCondicao,
              Bloqueado: obj.Bloqueado,
              ObservacaoPessoa: obj.ObservacaoPessoa,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Pessoas realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync PessoasSchema -->", error);
      }
    });
  }
  return { MsgPessoas: successMsg };
}

export { syncPessoas };
