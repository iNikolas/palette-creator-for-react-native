import React from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

import { Color } from "../types";

export function ColorSwitch({
  color,
  isSelected,
  onChange,
  ...props
}: { color: Color; isSelected: boolean, onChange: () => void } & TouchableOpacityProps) {
  return (
    <TouchableOpacity onPress={onChange} {...props}>
      <View style={styles.switch}>
        <Text>{color.colorName}</Text>
        <Switch onChange={onChange} ios_backgroundColor="#3e3e3e" value={isSelected} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 4,
    borderTopColor: "grey",
    borderTopWidth: 1,
  },
});
