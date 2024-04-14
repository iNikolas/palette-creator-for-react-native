import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Color, NewPalette } from "../types";
import { SCREEN_ADD_NEW_PALETTE, SCREEN_COLOR_PALETTE, SCREEN_HOME } from "../constants";

export type RootStackParamList = {
  [SCREEN_HOME]: { newPalette?: NewPalette };
  [SCREEN_COLOR_PALETTE]: { colors: Color[]; paletteName: string };
  [SCREEN_ADD_NEW_PALETTE]: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_HOME
>;

export type ColorPaletteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_COLOR_PALETTE
>;

export type AddNewPaletteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  typeof SCREEN_ADD_NEW_PALETTE
>;
