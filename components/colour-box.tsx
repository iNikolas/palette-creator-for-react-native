import React from "react";
import { StyleSheet, View, Text, ViewProps, StyleProp, TextStyle } from "react-native";

export function ColourBox({
  style,
  children,
  blackText = false,
  ...props
}: ViewProps & { blackText?: boolean }) {
  const textStyles: StyleProp<TextStyle> = [styles.text];

  if (blackText) {
    textStyles.push(styles.blackText);
  }
  
  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={textStyles}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  text: { fontWeight: "bold", color: "#fff" },
  blackText: { color: "#000" },
});
