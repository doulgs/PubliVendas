import React from "react";
import { TextInputProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Container, InputArea } from "./styles";

interface Props extends TextInputProps {
  iconVisible?: boolean;
  iconName?: keyof typeof FontAwesome.glyphMap;
  iconColor?: string;
}

const Input: React.FC<Props> = ({
  iconVisible = false,
  iconName = "user",
  iconColor = "#3d3b43",
  ...rest
}) => {
  return (
    <Container>
      {iconVisible && (
        <FontAwesome name={iconName} size={20} color={iconColor} />
      )}
      <InputArea {...rest} />
    </Container>
  );
};

export default Input;
