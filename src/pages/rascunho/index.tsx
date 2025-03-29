import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

import {
  Button,
  SocialLogin,
  IconDivider,
  KeyboardAvoidingView,
} from "../../components";

import { IUsuario } from "../../services/usuario";

export const Rascunho = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [usuario, setUsuario] = useState<Omit<IUsuario, "id">>({
    nome: "",
    email: "",
  });

  return (
    <ScrollView>
      <View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <IconButton style={{ marginTop: 60, marginBottom: -8 }} icon="cat" size={40} /> */}
          <Text
            style={{ marginTop: 60, fontWeight: "bold" }}
            variant="titleLarge"
          >
            Lord Of Pets
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginTop: 24,
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: "#2d333a",
            }}
          >
            Que bom que{"\n"}você voltou!
          </Text>
        </View>
        <View style={{ paddingTop: 24, paddingLeft: 40, paddingRight: 40 }}>
          <KeyboardAvoidingView>
            <View>
              <TextInput
                label="Email"
                mode="outlined"
                style={{ marginBottom: 16 }}
                value={usuario.email}
                onChangeText={(text) =>
                  setUsuario((value) => ({ ...value, email: text }))
                }
              />
              <TextInput
                label="Senha"
                mode="outlined"
                secureTextEntry={secureTextEntry}
                right={
                  <TextInput.Icon
                    icon={secureTextEntry ? "eye" : "eye-off"}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                }
                style={{ marginBottom: 16 }}
              />
              <Button mode="contained">Continuar</Button>
            </View>
          </KeyboardAvoidingView>
          <IconDivider icon="account-circle" />
          <SocialLogin />
        </View>
      </View>
    </ScrollView>
  );
};
