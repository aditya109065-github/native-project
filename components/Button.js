import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../colors";

const Button = (props) => {
  const { content, type = "dark", onPress, buttonSize, darkMode } = props;
  const { width, height } = buttonSize;
  let style = styles.darkButton; // default
  if (type === "gray") style = styles.grayButton;
  if (type === "orange") {
    style = darkMode ? styles.orangeButton : styles.grayButton;
  }

  return (
    <TouchableOpacity
      style={[styles.button, style, { width, height }]}
      onPress={() => onPress(content)}
    >
      {(() => {
        switch (content) {
          case "AC":
            return (
              <MaterialCommunityIcons
                name="delete-forever"
                size={24}
                color="#fff"
              />
            );
          case "DEL":
            return <Ionicons name="backspace" size={24} color="#fff" />;
          default:
            return <Text style={styles.text}>{content}</Text>;
        }
      })()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  grayButton: { backgroundColor: Colors.gray500 },
  darkButton: { backgroundColor: Colors.dark800 },
  orangeButton: { backgroundColor: Colors.orange500 },
  text: { fontSize: 20, color: Colors.light, fontWeight: "500" },
});

export default Button;
