import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 90%;
  height: 45px;
  padding: 8px;
  border-width: 0.7px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.Background[900]};
  border-color: ${(props) => props.theme.colorBase.Black};
`;
