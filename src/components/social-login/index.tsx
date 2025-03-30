import React from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";

export const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <List.Item
        title="Continuar com o Google"
        left={() => <List.Icon style={styles.icon} icon="google" />}
        style={styles.button}
        onPress={() => console.log("Google")}
      />

      <List.Item
        title="Continuar com a conta Microsoft"
        left={() => <List.Icon style={styles.icon} icon="microsoft" />}
        style={styles.button}
        onPress={() => console.log("Microsoft")}
      />

      <List.Item
        title="Continuar com a Apple"
        left={() => <List.Icon style={styles.icon} icon="apple" />}
        style={styles.button}
        onPress={() => console.log("Apple")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  icon: { marginLeft: 16 },
});
