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

import { useAuth } from "../../../context";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";
import { getRealm } from "../../../database/realm";

const Settings: React.FC = ({}) => {
  const navigation = useNavigation();
  const { registerMobile, isLoading } = useAuth();
  const { colorBase } = useTheme();

  const [activationKey, setActivationKey] = React.useState("");
  const [deviceId, setDeviceId] = React.useState<string | null>("null");
  const [plataforma, setPlataforma] = React.useState<string | null>("null");
  const [modelo, setModelo] = React.useState<string | null>("null");
  const [versao, setVersao] = React.useState<string | null>("null");

  const handleInit = async () => {
    Keyboard.dismiss();
    await registerMobile(activationKey, deviceId, plataforma, modelo, versao);
  };

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
          value={activationKey}
          onChangeText={(t) => setActivationKey(t)}
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
          isLoading={isLoading}
          title="Salvar Configuração"
          colorTitle={colorBase.White}
          colorBackground={colorBase.Alert}
          onPress={handleInit}
        />
        <ButtonHelper
          title="Acessar"
          colorTitle={colorBase.White}
          colorBackground={colorBase.Success}
          onPress={() => navigation.navigate("SignIn")}
        />
      </ContentButton>
    </Container>
  );
};

export default Settings;
