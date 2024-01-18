import { syncBairro } from "./syncBairro";
import { syncCidade } from "./syncCidade";
import { syncCondicao } from "./syncCondicao";
import { syncFormula } from "./syncFormula";
import { syncGrupo1 } from "./syncGrupo1";
import { syncGrupo2 } from "./syncGrupo2";
import { syncGrupo2Excecao } from "./syncGrupo2Excecao";
import { syncGrupo3 } from "./syncGrupo3";
import { syncGrupoExcecao } from "./syncGrupoExcecao";
import { syncItem } from "./syncItem";
import { syncItemExcecaoAuto } from "./syncItemExcecaoAuto";
import { syncPessoas } from "./syncPessoas";
import { syncPessoasItens } from "./syncPessoasItens";
import { syncPromocaoItem } from "./syncPromocaoItem";
import { syncTabela } from "./syncTabela";
import { syncUnidade } from "./syncUnidade";

async function executarSync() {
  try {
    console.log("Inicializando o Sync");

    const { MsgBairro } = await syncBairro();
    const { MsgCidade } = await syncCidade();
    const { MsgCondicao } = await syncCondicao();
    const { MsgFormula } = await syncFormula();
    const { MsgGrupo1 } = await syncGrupo1();
    const { MsgGrupo2 } = await syncGrupo2();
    const { MsgGrupo2Excecao } = await syncGrupo2Excecao();
    const { MsgGrupo3 } = await syncGrupo3();
    const { MsgGrupoExcecao } = await syncGrupoExcecao();
    const { MsgIntItem } = await syncItem();
    const { MsgItemExcecaoAuto } = await syncItemExcecaoAuto();
    const { MsgPessoas } = await syncPessoas();
    const { MsgPessoasItens } = await syncPessoasItens();
    const { MsgPromocaoItem } = await syncPromocaoItem();
    const { MsgTabela } = await syncTabela();
    const { MsgUnidade } = await syncUnidade();

    console.log(
      MsgBairro,
      MsgCidade,
      MsgCondicao,
      MsgFormula,
      MsgGrupo1,
      MsgGrupo2,
      MsgGrupo2Excecao,
      MsgGrupo3,
      MsgGrupoExcecao,
      MsgIntItem,
      MsgItemExcecaoAuto,
      MsgPessoas,
      MsgPessoasItens,
      MsgPromocaoItem,
      MsgTabela,
      MsgUnidade
    );
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finalizando o Sync");
  }
}

export { executarSync };
