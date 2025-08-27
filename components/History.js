import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

const History = ({ history, darkMode }) => {
  return (
    <ScrollView style={styles.history}>
      {history.map((item, index) => (
        <Text key={index} style={[styles.historyText,  { color: darkMode ? '#6ee7b7': '#000000' }]}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  history: {
    maxHeight: 120,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  historyText: {
    fontSize: 20,
    textAlign: "right",
    marginBottom: 5,
  },
});

export default History;
