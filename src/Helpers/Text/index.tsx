import React from "react";
import { TextProps } from "react-native";
import { Texto } from "./styles";

interface Props extends TextProps {}

const TextHelper: React.FC<Props> = ({ ...props }) => {
  return <Texto {...props} />;
};

export default TextHelper;
