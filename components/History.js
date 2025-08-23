import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

const History = ({ history }) => {
  return (
    <ScrollView style={styles.history}>
      {history.map((item, index) => (
        <Text key={index} style={styles.historyText}>
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
    color: "#6ee7b7",
    textAlign: "right",
    marginBottom: 5,
  },
});

export default History;
