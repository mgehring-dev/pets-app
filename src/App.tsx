import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";

import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "react-query";

import { Layout } from "./layout";
import { Navigation } from "./navigation";
import { queryClient } from "./config/queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <View style={styles.container}>
          <Layout>
            <Navigation />
            {/* <Rascunho /> */}
          </Layout>
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
