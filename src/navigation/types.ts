import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  CriarConta: undefined;
  Login: undefined;
  // adicione mais rotas se tiver
};

export type TNavigationProps = NativeStackNavigationProp<RootStackParamList>;
