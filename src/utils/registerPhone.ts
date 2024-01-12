import api from "../services/api";

interface registerPhoneProps {
  activationKey: string;
  deviceId: string;
  plataforma: string;
  modelo: string;
  versao: string;
  MyToken: string;
}

async function registerPhone({
  activationKey,
  deviceId,
  plataforma,
  modelo,
  versao,
  MyToken,
}: registerPhoneProps) {
  try {
    const response = await api.post(
      "/pbl/Filial/CadastrarAparelho",
      {
        ChaveApps: `${activationKey}`,
        UUID: `${deviceId}`,
        Modelo: `${modelo}`,
        Dispositivo: `${plataforma + "-" + versao}`,
      },
      {
        headers: {
          Authorization: `Bearer ${MyToken}`,
        },
      }
    );

    const IsValid = response.data.IsValid;
    const Message = response.data.Message;
    const Data = response.data.Data;

    return { IsValid, Message, Data };
  } catch (err) {
    console.error("Erro na solicitação de token:", err);
  }
}

export { registerPhone };
