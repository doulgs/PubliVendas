import api from "../services/api";

interface Props {
  activationKey: string;
  deviceId: string;
  plataforma: string;
  modelo: string;
  versao: string;
  MyToken: string;
}

async function registrarTelefone({
  activationKey,
  deviceId,
  plataforma,
  modelo,
  versao,
  MyToken,
}: Props) {
  try {
    const { data } = await api.post(
      "/pbl/Filial/CadastrarAparelho",
      {
        ChaveApps: activationKey,
        UUID: deviceId,
        Modelo: modelo,
        Dispositivo: `${plataforma}-${versao}`,
      },
      {
        headers: {
          Authorization: `Bearer ${MyToken}`,
        },
      }
    );

    const { IsValid, Message, Data } = data;

    return { IsValid, Message, Data };
  } catch (err) {
    console.error("Erro na solicitação de token:", err);
  }
}

export { registrarTelefone };
