import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  colorBackground?: string;
}
interface TextProps extends TouchableOpacityProps {
  colorTitle?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => props.colorBackground};
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<TextProps>`
  font-size: 20px;
  color: ${(props) => props.colorTitle};
`;
