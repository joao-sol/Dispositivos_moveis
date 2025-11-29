// src/components/Control.tsx
import { Button, StyleSheet } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import ControlFooter from "./ControlFooter";
import { useThemeContext } from "../contexts/ThemeContext";
import Container from "./Container";

type ControlProps = {
  onSelectTrack: () => void;
};

export default function Control({ onSelectTrack }: ControlProps) {
  const theme = useThemeContext();
  const app = useAppContext();

  const handlePrev = () => {
    app.prev();
  };
  const handleNext = () => {
    app.next();
  };

  console.log("Current theme:", theme.theme);
  return (
    <>
      <Container style={[styles.container]}>
        <Button title="Prev" onPress={handlePrev} />
        <Button title="Next" onPress={handleNext} />
        <Button title="Toggle Theme" onPress={theme.toggleTheme} />
        <Button title="Select other Track" onPress={onSelectTrack} />
      </Container>
      <ControlFooter />
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
});
