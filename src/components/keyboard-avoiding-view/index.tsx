import { KeyboardAvoidingView as Component } from "react-native";
import { Text, TextInput } from "react-native-paper";

interface IProps {
  children?: React.ReactNode;
}

export const KeyboardAvoidingView = ({ children }: IProps) => {
  return <Component behavior="padding">{children}</Component>;
};
