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
  margin: 0px 5%;
`;

export const Copyright = styled.Text`
  margin: 4px;
  color: ${(props) => props.theme.colorBase.White};
`;
