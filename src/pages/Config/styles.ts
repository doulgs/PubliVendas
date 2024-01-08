import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Background[50]};
`;

export const ButtonArea = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.Secondary};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colorBase.White};
`;
