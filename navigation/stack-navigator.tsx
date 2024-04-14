import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, ColorPalette, AddNewPalette } from "../screens";
import { RootStackParamList } from "./types";
import { SCREEN_ADD_NEW_PALETTE, SCREEN_COLOR_PALETTE, SCREEN_HOME } from "../constants";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name={SCREEN_HOME} component={Home} />
        <Stack.Screen
          name={SCREEN_COLOR_PALETTE}
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name={SCREEN_ADD_NEW_PALETTE}
          component={AddNewPalette}
          options={{ title: "Add New Palette" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
