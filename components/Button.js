import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Button = ({ content, type = "dark", flex = 1, onPress, size, darkMode }) => {
  let style = styles.darkButton; // default
  if (type === "gray") style = styles.grayButton;
  if (type === "orange") {
    style = darkMode ? styles.orangeButton : styles.grayButton; // 🔑 orange in dark, gray in light
  }

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
        <MaterialCommunityIcons name="delete-forever" size={28} color="#fff"/>
      ) : content === "DEL" ? (
        <Ionicons name="backspace" size={28} color="#fff" />
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
  text: { fontSize: 30, color: "#ffffff" ,fontWeight: "500" },
});

export default Button;
