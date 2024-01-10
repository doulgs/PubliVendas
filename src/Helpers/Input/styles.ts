import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.Background[100]};
`;
export const InputArea = styled.TextInput`
  flex: 1;
  padding: 8px;
  color: ${(props) => props.theme.colors.Background[900]};
`;
