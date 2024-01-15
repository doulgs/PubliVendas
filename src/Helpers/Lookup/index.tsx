import React, { useState } from "react";
import { Card } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import { Dropdown } from "react-native-searchable-dropdown-kj";
import { MaterialIcons as Icon } from "@expo/vector-icons";

interface SelectProps {
  label?: string;
  backgroundColor?: string;
  colorFocused?: string;
  searchPlaceHolder?: string;
  nameIcon?: keyof typeof Icon.glyphMap;
  data: Item[];
  onValueChange: (selectedValue: string | null) => void;
}

interface Item {
  label: string;
  value: string;
}

const Lookup: React.FC<SelectProps> = ({
  label = "Itens",
  backgroundColor = "#ffffff", //#f8f3f9
  colorFocused = "#67e473",
  searchPlaceHolder = "Buscar...",
  nameIcon,
  data,
  onValueChange,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            // { backgroundColor: backgroundColor },
            isFocus && { color: colorFocused },
          ]}
        >
          {label}
        </Text>
      );
    }
    return null;
  };

  const handleValueChange = (item: Item) => {
    setValue(item.value);
    setIsFocus(false);
    onValueChange(item.value);
  };

  return (
    <Card style={{ backgroundColor: backgroundColor }}>
      <Card.Content style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: colorFocused }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? `${label}` : "..."}
          searchPlaceholder={`${searchPlaceHolder}`}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleValueChange}
          renderLeftIcon={() => (
            <Icon
              style={styles.icon}
              color={isFocus ? colorFocused : "black"}
              name={nameIcon}
              size={20}
            />
          )}
        />
      </Card.Content>
    </Card>
  );
};

export default Lookup;

const styles = StyleSheet.create({
  container: {
    margin: -10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    //borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

{
  /*
Exemplo de como Utilizar esse componente
<Select data={dataItens} onValueChange={handleSelectChange} />

const handleSelectChange = (selectedValue: string | null) => {
  console.log("Selected Value:", selectedValue);
};
*/
}
