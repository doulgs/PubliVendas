import React from "react";
import { FAB, Portal, PaperProvider } from "react-native-paper";
import { Container } from "./styles";

const Pedido = () => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }: any) => setState({ open });
  const { open } = state;

  return (
    <PaperProvider>
      <Container></Container>
      <Portal>
        <FAB.Group
          color="#FFF"
          backdropColor="transparent"
          fabStyle={{ backgroundColor: "#0A3750" }}
          open={open}
          visible
          icon={"apps"}
          actions={[
            {
              icon: "sync",
              label: "Sync",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "account-multiple",
              label: "Clientes",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "clipboard-text-outline",
              label: "Produtos",
              onPress: () => console.log("Pressed star"),
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
    </PaperProvider>
  );
};

export default Pedido;
