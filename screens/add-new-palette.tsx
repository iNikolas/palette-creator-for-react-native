import React from "react";
import { TextInput, View, FlatList, StyleSheet, Button } from "react-native";

import { Color } from "../types";
import { ColorSwitch } from "../components";
import { useNewPaletteHandler } from "../utils";
import { COLORS } from "../data";

export function AddNewPalette() {
  const [name, setName] = React.useState("");
  const [palette, setPalette] = React.useState<Color[]>([]);

  const handleAddNewPalette = useNewPaletteHandler(name, palette);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Please enter Palette name"
      />
      <FlatList
        data={COLORS}
        renderItem={({ item }) => {
          const isEnabled = Boolean(
            palette.find((color) => color.colorName === item.colorName),
          );
          const handleChange = () =>
            setPalette((prev) =>
              isEnabled
                ? prev.filter((color) => color.colorName !== item.colorName)
                : [...prev, item],
            );
          return (
            <ColorSwitch
              color={item}
              isSelected={isEnabled}
              onChange={handleChange}
            />
          );
        }}
      />
      <Button onPress={handleAddNewPalette} color="#2C7865" title="Submit!" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  container: { flex: 1, gap: 4, padding: 12 },
});
