import React from "react";

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
        <Texto>TESTE</Texto>
      </ContentTexto>
      <ContentTexto>
        <TextHelper>Plataforma:</TextHelper>
        <Texto>TESTE</Texto>
      </ContentTexto>
      <ContentTexto>
        <TextHelper>Modelo:</TextHelper>
        <Texto>TESTE</Texto>
      </ContentTexto>
      <ContentTexto>
        <TextHelper>Versão:</TextHelper>
        <Texto>TESTE</Texto>
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
