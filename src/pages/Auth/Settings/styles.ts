import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  margin: 8px 5% 16px 5%;
`;
export const ContentTitle = styled.View`
  padding: 2px;
  background-color: ${(props) => props.theme.colors.Background[200]};
`;
export const Title = styled.Text`
  margin: 0px 5%;
  font-size: 16px;
`;
export const ContentTexto = styled.View`
  padding: 8px 5%;
  border-bottom-width: 0.5px;
`;
export const Texto = styled.Text`
  margin: 0px 2%;
  font-size: 16px;
  font-weight: bold;
`;
export const ContentButton = styled.View`
  flex: 1;
  margin-top: 25px;
  align-items: center;
`;
