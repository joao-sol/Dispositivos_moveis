import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Timeline from "../components/Timeline";
import Control from "../components/Control";
import Container from "../components/Container";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const theme = useThemeContext();

  return (
    <Container>
      <Text style={[styles.text, { color: theme.colors.textColor }]}>
        Home - Music Player
      </Text>

      <Timeline />
      <Control />
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
    
  },
});
