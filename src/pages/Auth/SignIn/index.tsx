import React from "react";

import {
  AreaInput,
  Background,
  Container,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
} from "./styles";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Gradient from "../../../components/Gradient";

const SignIn: React.FC = () => {
  return (
    <Background>
      <Container enabled>
        <Logo
          source={require("../../../assets/images/Publisoft.png")}
          resizeMode="contain"
        />

        <AreaInput>
          <Input
            //value={usuario}
            //onChangeText={(t) => setUsuario(t)}
            placeholder="Nome de Usuario"
            autoCapitalize="none"
          />
        </AreaInput>
        <AreaInput>
          <Input
            //value={senha}
            //onChangeText={(t) => setSenha(t)}
            placeholder="Senha do usuario"
            autoCapitalize="none"
            secureTextEntry
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignIn;
