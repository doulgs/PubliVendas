import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, HeaderButton, ButtonText } from "./styles";
import { useAuth } from "../../context";
import { InputText } from "../../Helpers/InputText";
import { useForm, Controller } from "react-hook-form";
import { View } from "react-native";

const AddCliente: React.FC = () => {
  const { cadastrarCliente } = useAuth();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => {}}>
          <ButtonText>Salvar</ButtonText>
        </HeaderButton>
      ),
    });
  }, [navigation]);

  const handleSubmitt = async () => {
    //await insertPessoa(data);
    //navigation.navigate("Clientes");
  };

  return (
    <Container>
      <Content>
        <Controller
          name="Nome"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText label={"Nome"} value={value} onChangeText={onChange} />
          )}
        />
        <Controller
          name="Fantasia"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText
              label={"Fantasia"}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="Cnpj/Cpf"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText
              label={"CNPJ - CPF"}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="Insc"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText
              label={"Inscrição Estadual"}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="Endereco"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText
              label={"Endereço"}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="Bairro"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText label={"Bairro"} value={value} onChangeText={onChange} />
          )}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 8,
          }}
        >
          <Controller
            name="CEP"
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputText
                label={"CEP"}
                value={value}
                onChangeText={onChange}
                style={{ flex: 1, backgroundColor: "#f0f4ff" }}
              />
            )}
          />
          <Controller
            name="Numero"
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputText
                label={"Numero"}
                value={value}
                onChangeText={onChange}
                style={{ flex: 1, backgroundColor: "#f0f4ff" }}
              />
            )}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 8,
          }}
        >
          <Controller
            name="Cidade"
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputText
                label={"Cidade"}
                value={value}
                onChangeText={onChange}
                style={{ flex: 1, backgroundColor: "#f0f4ff" }}
              />
            )}
          />
          <Controller
            name="UF"
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputText
                label={"UF"}
                value={value}
                onChangeText={onChange}
                style={{ width: "30%", backgroundColor: "#f0f4ff" }}
              />
            )}
          />
        </View>
        <Controller
          name="Email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText label={"Email"} value={value} onChangeText={onChange} />
          )}
        />
        <Controller
          name="Telefone"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText
              label={"Telefone"}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="Observacao"
          control={control}
          render={({ field: { value, onChange } }) => (
            <InputText
              label={"Observação"}
              value={value}
              onChangeText={onChange}
              multiline={true}
              style={{
                backgroundColor: "#f0f4ff",
              }}
            />
          )}
        />
      </Content>
    </Container>
  );
};

export default AddCliente;
