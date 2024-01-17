import { syncGrupo1 } from "./syncGrupo1";
import { syncGrupo2 } from "./syncGrupo2";

async function executarSync() {
  try {
    console.log("Inicializando o Sync");
    const { MsgGrupo1 } = await syncGrupo1();
    const { MsgGrupo2 } = await syncGrupo2();

    console.log(MsgGrupo1, MsgGrupo2);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finalizando o Sync");
  }
}

export { executarSync };
