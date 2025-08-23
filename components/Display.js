import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Display = ({ input }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText} numberOfLines={1}>
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
  displayText: { fontSize: 64, color: "white", fontWeight: "300" },
});

export default Display;