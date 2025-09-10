import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../colors";

const History = ({ history, darkMode, isLandscape }) => {
  return (
    <ScrollView style={[styles.history, {maxHeight: isLandscape ? 40 : 100}]}>
      {history.map((item, index) => (
        <Text key={index} style={[styles.historyText,  { color: darkMode ? Colors.historyTextDark : Colors.dark }]}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  history: {
    flex: 1,
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
