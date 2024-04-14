import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator } from "./stack-navigator";

export function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
