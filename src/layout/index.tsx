import { View } from "react-native";
import { Text } from "react-native-paper";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <View style={{ flexDirection: "column", width: "100%", height: "100%" }}>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};
