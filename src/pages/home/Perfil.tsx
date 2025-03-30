import { StyleSheet, View } from "react-native";
import { Avatar, Divider, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components";
import { SettingsItem } from "./perfil/components";
import { TNavigationProps } from "../../navigation/types";

export const Perfil = () => {
  const navigate = useNavigation<TNavigationProps>();

  const handleLogOut = () => {
    navigate.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* <View style={{ paddingTop: 60 }}>
        <Text
          variant="bodyLarge"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Perfil
        </Text>
      </View> */}
      <View style={styles.header}>
        <Avatar.Image
          size={55}
          source={{
            uri: "https://avatars.githubusercontent.com/u/78505759?v=4",
          }}
        />
        <Text style={styles.username}>Miguel Gehring</Text>
      </View>
      <SettingsItem
        icon="bell-outline"
        title="Notificações"
        description="Minha central de notificações"
        onPress={() => console.error("Notificações")}
      />
      <Divider />
      <SettingsItem
        icon="account-outline"
        title="Dados da conta"
        description="Minhas informações da conta"
        onPress={() => console.error("Dados da conta")}
      />
      <View style={{ paddingTop: 24 }}>
        <Button mode="contained" icon="logout" onPress={handleLogOut}>
          Sair
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    paddingBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
