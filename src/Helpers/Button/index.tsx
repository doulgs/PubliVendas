import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";
import Laoding from "../../components/Loading";

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
  title: string;
  colorTitle?: string;
  colorBackground?: string;
}

const ButtonHelper: React.FC<Props> = ({
  isLoading = false,
  title,
  colorTitle = "#000000",
  colorBackground = "#ffffff",
  ...rest
}) => {
  return isLoading ? (
    <Container colorBackground={colorBackground}>
      <Laoding />
    </Container>
  ) : (
    <Container colorBackground={colorBackground} {...rest}>
      <Text colorTitle={colorTitle}>{title}</Text>
    </Container>
  );
};

export default ButtonHelper;
