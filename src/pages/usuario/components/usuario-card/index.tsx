import { View } from "react-native";
import { Text } from "react-native-paper";

import { IUsuario } from "../../../../services/usuario";

interface IProps {
  usuario: IUsuario;
}

export const UsuarioCard = ({ usuario }: IProps) => {
  return (
    <View
      style={{
        marginBottom: 12,
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{usuario.nome}</Text>
      <Text>{usuario.email}</Text>
    </View>
  );
};
