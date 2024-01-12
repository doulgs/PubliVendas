import React from "react";
import { Alert } from "react-native";

interface MessageProps {
  title: string;
  message: string;
}

const Message: React.FC<MessageProps> = ({ title, message }) => {
  React.useEffect(() => {
    const showAlert = () => {
      Alert.alert(`${title}`, `${message}`, [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
    };
    showAlert();
  }, [title, message]);
  return null;
};

export { Message };
