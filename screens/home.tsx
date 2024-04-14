import React from "react";
import {
  View,
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import { PalettePreview } from "../components";
import { commonStyles } from "../styles";
import { usePalletsData } from "../utils";
import { HomeScreenProps } from "../navigation";
import { SCREEN_ADD_NEW_PALETTE, SCREEN_COLOR_PALETTE } from "../constants";

export function Home({ navigation, route }: HomeScreenProps) {
  const newPalette = route.params?.newPalette;
  const { palettes, isRefreshing, handleRefresh, handleAddNewPalette } =
    usePalletsData();

  React.useEffect(() => {
    if (newPalette) {
      handleAddNewPalette(newPalette);
    }
  }, [newPalette]);

  return (
    <View style={commonStyles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREEN_ADD_NEW_PALETTE)}
      >
        <Text style={styles.pressableText}>Add a color scheme</Text>
      </TouchableOpacity>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        keyExtractor={(item) => item.paletteName}
        data={palettes}
        renderItem={({ item }) => (
          <PalettePreview
            paletteName={item.paletteName}
            colors={item.colors.slice(0, 5)}
            onPress={() =>
              navigation.navigate(SCREEN_COLOR_PALETTE, {
                paletteName: item.paletteName,
                colors: item.colors,
              })
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={commonStyles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pressableText: {
    color: "lime",
    fontWeight: "bold",
    fontSize: 20,
  },
});
