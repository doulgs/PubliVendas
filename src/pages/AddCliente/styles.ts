import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.Background[50]};
`;
export const Content = styled.ScrollView`
  margin: 0px 0px 100px 0px;
`;
export const InputText = styled.TextInput`
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorBase.White};
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  padding: 10px;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colorBase.White};
  font-size: 18px;
  font-weight: bold;
`;
