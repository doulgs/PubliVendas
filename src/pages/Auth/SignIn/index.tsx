import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AreaInput, Background, Container, Copyright, Logo } from "./styles";

import Button from "../../../Helpers/Button";
import Input from "../../../Helpers/Input";
import Gradient from "../../../components/Gradient";
import { useAuth } from "../../../context";

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const { signIn } = useAuth();
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  function handleSubmit() {
    if (usuario === "" || senha === "") {
      return;
    } else {
      signIn(usuario, senha);
      setUsuario("");
      setSenha("");
    }
  }

  function handleSettings() {
    navigation.navigate("Settings");
  }

  return (
    <Gradient>
      <>
        <Background>
          <Container enabled>
            <Logo
              source={require("../../../assets/images/PublisoftWhite.png")}
              resizeMode="contain"
            />

            <AreaInput>
              <Input
                value={usuario}
                onChangeText={(t) => setUsuario(t)}
                placeholder="Email do usuario"
                autoCapitalize="none"
                iconVisible
                iconName="user"
              />
            </AreaInput>

            <AreaInput>
              <Input
                value={senha}
                onChangeText={(t) => setSenha(t)}
                placeholder="Senha do usuario"
                autoCapitalize="none"
                secureTextEntry
                iconVisible
                iconName="lock"
              />
            </AreaInput>

            <Button
              title="Acessar"
              colorBackground="#d7d6dc"
              onPress={() => handleSubmit()}
            />
            <Button
              title="Configurações"
              colorBackground="#d7d6dc"
              onPress={() => handleSettings()}
            />
          </Container>
        </Background>
        <Copyright>2024 © PubliVendas by Publisoft Informática.</Copyright>
      </>
    </Gradient>
  );
};

export default SignIn;
