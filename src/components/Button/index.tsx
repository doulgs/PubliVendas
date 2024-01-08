import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
};

export default Button;
