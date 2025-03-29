import { StyleSheet } from "react-native";
import { Button as RNPButton, ButtonProps } from "react-native-paper";

export const Button = (props: ButtonProps) => {
  return <RNPButton style={styles.button} {...props} />;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
  },
});
