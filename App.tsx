import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Home from "./src/pages/Home";
import Select from "./src/pages/Select";
import ThemeContextProvider from "./src/contexts/ThemeContext";
import Container from "./src/components/Container";
import AppContextProvider from "./src/contexts/AppContext";

type Screen = "home" | "select";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");

  const goToSelect = () => setScreen("select");
  const goToHome = () => setScreen("home");

  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <Container style={styles.container}>
          {screen === "home" ? (
            <Home onSelectTrack={goToSelect} />
          ) : (
            <Select onDone={goToHome} />
          )}
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
