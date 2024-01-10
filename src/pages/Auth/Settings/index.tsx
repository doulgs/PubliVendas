import React from "react";
import DeviceInfo from "react-native-device-info";
import * as Device from "expo-device";
import {
  Container,
  Content,
  ContentButton,
  ContentTexto,
  ContentTitle,
  Texto,
  Title,
} from "./styles";
import TextHelper from "../../../Helpers/Text";
import InputHelper from "../../../Helpers/Input";
import ButtonHelper from "../../../Helpers/Button";
import { useTheme } from "styled-components/native";

const Settings: React.FC = () => {
  const { colorBase } = useTheme();

  const [deviceId, setDeviceId] = React.useState<string | null>("null");
  const [plataforma, setPlataforma] = React.useState<string | null>("null");
  const [modelo, setModelo] = React.useState<string | null>("null");
  const [versao, setVersao] = React.useState<string | null>("null");

  React.useEffect(() => {
    async function getPlataforma() {
      const uniqueId = await DeviceInfo.getUniqueId();
      setDeviceId(uniqueId);

      const Plataforma = Device.osName;
      setPlataforma(Plataforma);

      const Modelo = Device.deviceName;
      setModelo(Modelo);

      const Versao = Device.osVersion;
      setVersao(Versao);

      //console.log(uniqueId, Plataforma, Modelo, Versao);
    }

    getPlataforma();
  }, []);
  return (
    <Container>
      <Content>
        <TextHelper>Chave de ativação:</TextHelper>
        <InputHelper
          iconVisible
          iconName="edit"
          autoCapitalize="none"
          placeholder="Digite aqui a chave de ativação da empresa..."
        />
      </Content>
      <ContentTitle>
        <Title>Configurações do Dispositivo</Title>
      </ContentTitle>
      <ContentTexto>
        <TextHelper>UUID:</TextHelper>
        <Texto>{deviceId}</Texto>
      </ContentTexto>
      <ContentTexto>
        <TextHelper>Plataforma:</TextHelper>
        <Texto>{plataforma}</Texto>
      </ContentTexto>
      <ContentTexto>
        <TextHelper>Modelo:</TextHelper>
        <Texto>{modelo}</Texto>
      </ContentTexto>
      <ContentTexto>
        <TextHelper>Versão:</TextHelper>
        <Texto>{versao}</Texto>
      </ContentTexto>

      <ContentButton>
        <ButtonHelper
          title="Salvar Configuração"
          colorTitle={colorBase.White}
          colorBackground={colorBase.Success}
        />
        <ButtonHelper
          title="Limpar base de dados"
          colorTitle={colorBase.White}
          colorBackground={colorBase.Error}
        />
      </ContentButton>
    </Container>
  );
};

export default Settings;
