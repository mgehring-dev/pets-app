import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

export const IconDivider = ({ icon }: { icon: IconSource }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <IconButton icon="paw" size={20} style={styles.icon} />
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  icon: {
    marginHorizontal: 8,
  },
});
