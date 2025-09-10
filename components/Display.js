import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../colors";

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
    padding: 16,
    flex: 1,
    alignItems: "flex-end",
    justifyContent: 'flex-end',

  },
  light: {
    color: Colors.light
  },
  dark: {
    color: Colors.dark
  },
  displayText: { 
    fontSize: 64, 
    fontWeight: "300"
  },
});

export default Display;