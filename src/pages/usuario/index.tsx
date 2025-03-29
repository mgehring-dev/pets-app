import { ScrollView } from "react-native";

import { Button, Text, TextInput } from "react-native-paper";
import { useMutation, useQuery } from "react-query";

import { UsuarioCard } from "./components/usuario-card";

import { UsuarioService } from "../../services/usuario";
import { useState } from "react";

export const Usuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const {
    refetch,
    data: usuarios = [],
    isLoading = true,
  } = useQuery(["getUsuarios"], UsuarioService.getUsuarios, {
    onError: (error: any) => console.error("Error fetching usuarios:", error),
  });

  const { mutate: handleSave, isLoading: isLoadingPost } = useMutation(
    () => UsuarioService.postUsuario({ nome, email }),
    {
      onSuccess: () => refetch(),
      onError: (error: any) => console.error("Error creating usuario:", error),
    }
  );

  if (isLoading) return <Text>Carregando...</Text>;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Usuários</Text>

      {usuarios.length === 0 ? (
        <Text>Nenhum usuário encontrado...</Text>
      ) : (
        usuarios.map((usuario) => (
          <UsuarioCard key={usuario.id} usuario={usuario} />
        ))
      )}

      <Text style={{ fontSize: 24, marginTop: 16 }}>Criar conta</Text>

      <TextInput
        mode="outlined"
        label="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button mode="contained" onPress={() => handleSave()}>
        {isLoadingPost ? "Criando..." : "Criar"}
      </Button>
    </ScrollView>
  );
};
