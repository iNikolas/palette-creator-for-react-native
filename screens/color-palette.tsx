import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

import { ColourBox } from "../components";
import { ColorPaletteScreenProps } from "../navigation";
import { commonStyles } from "../styles";

export function ColorPalette({ route }: ColorPaletteScreenProps) {
  const { paletteName, colors } = route.params;

  return (
    <View style={[commonStyles.container, styles.container]}>
      <Text style={styles.title}>{paletteName}</Text>
      <FlatList
        keyExtractor={(item) => item.colorName}
        style={styles.list}
        data={colors}
        renderItem={({ item }) => (
          <ColourBox
            blackText={
              parseInt(item.hexCode.replace("#", ""), 16) > 0xffffff / 1.1
            }
            style={{ backgroundColor: item.hexCode }}
          >
            {item.colorName}
          </ColourBox>
        )}
        ItemSeparatorComponent={() => <View style={commonStyles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    alignItems: "center",
    flex: 1,
    gap: 4,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 18,
    marginBottom: 10,
  },
  list: { width: "100%" },
});
