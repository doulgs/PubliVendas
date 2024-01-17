import Realm from "realm";
import { getRealm } from "../database/realm";
import { obterDadosDaTabela } from "../utils/obterDadosDaTabela";
import { IntPessoa } from "../database/interface/IntPessoa";

async function syncPessoa() {
  const realm = await getRealm();
  const dadosApi = await obterDadosDaTabela("Pessoas");
  let successMsg: string | null = null;

  if (dadosApi?.IsValid) {
    const dados = dadosApi?.Data;

    dados.forEach((obj: IntPessoa) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "PessoaSchema",
            {
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Fantasia: obj.Fantasia,
              CnpjCpf: obj.CnpjCpf,
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
              HandleTabela: obj.HandleTabela,
              Uf: obj.Uf,
              HandleUsuario: obj.HandleUsuario,
              Insc: obj.Insc,
              Bloqueado: obj.Bloqueado,
              ObservacaoPessoa: obj.ObservacaoPessoa,
              HandleCondicao: obj.HandleCondicao,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Pessoa realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync PessoaSchema -->", error);
      }
    });
  }
  return { MsgPessoa: successMsg };
}

export { syncPessoa };
