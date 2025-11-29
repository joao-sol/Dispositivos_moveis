import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useThemeContext } from "../contexts/ThemeContext";

type SelectProps = {
  onDone: () => void;
};

export default function Select({ onDone }: SelectProps) {
  const theme = useThemeContext();

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.textColor, marginBottom: 16 }}>
        Select Track Screen
      </Text>
      <Button title="Voltar para Home" onPress={onDone} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
});
