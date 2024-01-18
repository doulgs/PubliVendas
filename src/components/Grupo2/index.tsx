import React from "react";
import { TouchableOpacityProps } from "react-native";
import { IntGrupo2 } from "../../database/interface/IntGrupo2";

import { Touchable, Codigo, Container, Title, Img } from "./styles";

interface Props extends TouchableOpacityProps {
  data: IntGrupo2;
}

const MyImage = "../../assets/icons/IcoPublisoftLogoDefault.png";

const Grupo2: React.FC<Props> = ({ data, ...rest }) => {
  const imageAPI = data?.FotoByte || null;

  const source = imageAPI
    ? { uri: `data:image/jpeg;base64,${imageAPI}` }
    : require("../../assets/icons/IcoPublisoftLogoDefault.png");

  //console.log(source);
  return (
    <Touchable style={{ elevation: 5 }} {...rest}>
      <Codigo>{data.Codigo}</Codigo>
      <Container>
        <Img
          source={source}
          //source={require("../../assets/icons/IcoPublisoftLogoDefault.png")}
          resizeMode="contain"
        />
        <Title numberOfLines={2}>{data.Nome}</Title>
      </Container>
    </Touchable>
  );
};

export { Grupo2 };
