import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text, TextInput, useTheme } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import {
  Button,
  SocialLogin,
  IconDivider,
  KeyboardAvoidingView,
} from "../../components";
import { TNavigationProps } from "../../navigation/types";

import { IUsuario } from "../../services/usuario";

export const CriarConta = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [usuario, setUsuario] = useState<Omit<IUsuario, "id">>({
    nome: "",
    email: "",
  });

  const theme = useTheme();
  const navigation = useNavigation<TNavigationProps>();

  return (
    <ScrollView>
      <View>
        <View
          style={{
            marginTop: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }} variant="titleLarge">
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
            onPress={() => {
              navigation.navigate("Login");
              console.error("Chegou aqui");
            }}
          >
            Criar uma conta
          </Text>
        </View>
        <View style={{ paddingTop: 24, paddingLeft: 40, paddingRight: 40 }}>
          <KeyboardAvoidingView>
            <View>
              <TextInput
                label="Nome"
                mode="outlined"
                style={{ marginBottom: 16 }}
                value={usuario.nome}
                onChangeText={(text) =>
                  setUsuario((value) => ({ ...value, nome: text }))
                }
              />
              <TextInput
                label="Email"
                mode="outlined"
                autoCapitalize="none"
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
          <View
            style={{
              marginTop: 16,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Já tem uma conta?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: theme.colors.primary, fontWeight: "bold" }}>
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
          <IconDivider icon="account-circle" />
          <SocialLogin />
        </View>
      </View>
    </ScrollView>
  );
};
