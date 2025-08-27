import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Display = ({ input, darkMode }) => {
  return (
    <View style={styles.display}>
      <Text style={[styles.displayText,  darkMode ? styles.light : styles.dark]}>
        {input}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    padding: 20,
    alignItems: "flex-end",
  },
  light: {
    color: '#ffffff'
  },
  dark: {
    color: '#000000'
  },
  displayText: { 
    fontSize: 64, 
    fontWeight: "300"
  },
});

export default Display;