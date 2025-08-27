import { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Display from "./Display";
import History from "./History";
import Keypad from "./Keypad";
import * as Haptics from "expo-haptics";

const Calculator = (props) => {
  const{ darkMode, history, setHistory } = props
  const [input, setInput] = useState("0");
  
  const screenWidth = Dimensions.get("window").width;
  const buttonSize = screenWidth / 4 - 12;

  const handlePress = (btn) => {
    if(btn !== "=") {
      Haptics.selectionAsync();
    }

    switch (btn) {
      case "AC":
        setInput("0");
        break;

      case "DEL":
        setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
        break;
        
      case "=":
        try {
          const expression = input
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/%/g, "/100");

          const result = eval(expression).toString();
          setHistory((prev) => {
            const updated = [...prev, `${input} = ${result}`];
            return updated.slice(-3);
          });
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          setInput(result);
        } catch {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          setInput("Error");
        }
        break;

      default:
        setInput((prev) => {
          const operators = ["+", "-", "×", "÷", "%", "="];

          // Replace "0" with the new input
          if (prev === "0") return btn;

          // Append with space if it's an operator
          return prev + (operators.includes(btn) ? ` ${btn} ` : btn);
        });
        break;
    }
  };

  return (
    <View style={[styles.container, darkMode ? styles.dark : styles.light]}>
      {/* History visible at the top */}
      <History 
        darkMode={darkMode}
        history={history}
      />

      {/* Main display */}
      <Display 
        input={input} 
        darkMode={darkMode}
      />

      {/* Keypad */}
      <Keypad 
        darkMode={darkMode}
        buttonSize={buttonSize}
        handlePress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end" },
  light: {
    backgroundColor: '#ffffff'
  },
  dark: {
    backgroundColor: '#000000'
  },
});

export default Calculator;
