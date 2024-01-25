import * as React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { withTheme } from "react-native-paper";

interface Props extends TextInputProps {}

const InputText = ({ ...rest }: Props) => {
  const { colors, colorBase } = useTheme();

  return (
    <TextInput
      mode="outlined"
      autoCapitalize="none"
      outlineColor={colors.Primary}
      activeOutlineColor={colors.Secondary}
      style={{
        backgroundColor: "#f0f4ff",
      }}
      {...rest}
    />
  );
};

export { InputText };
