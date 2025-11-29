// src/pages/Home.tsx
import { Text, StyleSheet } from "react-native";
import React from "react";
import Timeline from "../components/Timeline";
import Control from "../components/Control";
import Container from "../components/Container";
import { useThemeContext } from "../contexts/ThemeContext";

type HomeProps = {
  onSelectTrack: () => void;
};

export default function Home({ onSelectTrack }: HomeProps) {
  const theme = useThemeContext();

  return (
    <Container>
      <Text style={[styles.text, { color: theme.colors.textColor }]}>
        Home - Music Player
      </Text>

      <Timeline />
      <Control onSelectTrack={onSelectTrack} />
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
