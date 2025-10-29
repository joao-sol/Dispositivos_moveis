import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";
import ThemeContextProvider from "./src/contexts/ThemeContext";
import Container from "./src/components/Container";

import AppContextProvider from "./src/contexts/AppContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <Container style={styles.container}>
          <Home />
        </Container>
      </AppContextProvider>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
