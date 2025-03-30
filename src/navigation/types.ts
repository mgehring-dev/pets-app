import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Usuario: undefined;
  CriarConta: undefined;
};

export type TNavigationProps = NativeStackNavigationProp<RootStackParamList>;
