import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Button = ({ content, type = "dark", flex = 1, onPress, size }) => {
  let style = styles.darkButton;
  if (type === "gray") style = styles.grayButton;
  if (type === "orange") style = styles.orangeButton;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { width: size * flex + (flex - 1) * 10, height: size },
      ]}
      onPress={() => onPress(content)}
    >
      {content === "AC" ? (
        <MaterialCommunityIcons name="delete-forever" size={28} color="white" />
      ) : content === "DEL" ? (
        <Ionicons name="backspace" size={28} color="white" />
      ) : (
        <Text style={styles.text}>{content}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  grayButton: { backgroundColor: "#a5a5a5" },
  darkButton: { backgroundColor: "#333333" },
  orangeButton: { backgroundColor: "#ff9f0a" },
  text: { fontSize: 30, color: "white", fontWeight: "500" },
});

export default Button;
