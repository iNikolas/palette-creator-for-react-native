import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Color, NewPalette, Palette } from "../types";
import { fetchColorPalettes } from "../api";
import { HomeScreenProps } from "../navigation";
import { SCREEN_HOME } from "../constants";

export function usePalletsData() {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [palettes, setPalettes] = React.useState<Palette[]>([]);

  const fetchData = React.useCallback(async () => {
    try {
      setIsRefreshing(true);
      const data = await fetchColorPalettes();
      setPalettes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddNewPalette = (newPalette: NewPalette) => {
    setPalettes((prev) => [
      {
        ...newPalette,
        id: Math.max(...palettes.map((palette) => palette.id)) + 1,
      },
      ...prev,
    ]);
  };

  return {
    palettes,
    isRefreshing,
    handleRefresh: fetchData,
    handleAddNewPalette,
  };
}

export function useNewPaletteHandler(name: string, palette: Color[]) {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();

  const handleAddNewPalette = () => {
    const errors = [];

    if (!name.trim()) {
      errors.push("Please add meaningful name for your palette.");
    }

    if (palette.length < 3) {
      errors.push("You should add at least 3 colors to your palette.");
    }

    if (errors.length) {
      Alert.alert(errors.join(" "));
      return;
    }

    navigation.navigate(SCREEN_HOME, {
      newPalette: { paletteName: name, colors: palette },
    });
  };

  return handleAddNewPalette;
}
