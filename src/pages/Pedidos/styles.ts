import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.Background[50]};

  align-items: center;
  justify-content: center;
`;
