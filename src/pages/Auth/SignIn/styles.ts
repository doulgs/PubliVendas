import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Background = styled.SafeAreaView`
  flex: 1;
  //background-color: ${(props) => props.theme.colors.Background[50]};
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Logo = styled.Image`
  width: 90%;
  height: 20%;
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#8c8c8c",
})`
  background-color: ${(props) => props.theme.colors.Background[100]};
  width: 90%;
  border-radius: 8px;
  font-size: 17px;
  padding: 10px;
  color: ${(props) => props.theme.colorBase.White};
  margin-bottom: 15px;
`;

export const Copyright = styled.Text`
  margin: 4px;
  color: ${(props) => props.theme.colorBase.White};
`;
