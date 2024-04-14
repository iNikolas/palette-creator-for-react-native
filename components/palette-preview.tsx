import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  FlatList,
  View,
  StyleSheet,
} from "react-native";

import { Color } from "../types";

export function PalettePreview({
  colors,
  paletteName,
  ...props
}: {
  colors: Color[];
  paletteName: string;
} & TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.title}>{paletteName}</Text>
      <FlatList
        keyExtractor={(item) => item.colorName}
        style={styles.palettePreviewContainer}
        data={colors}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  palettePreviewContainer: { flexDirection: "row", gap: 4 },
  box: {
    width: 20,
    height: 20,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  title: { fontWeight: "bold", marginBottom: 4 },
});
