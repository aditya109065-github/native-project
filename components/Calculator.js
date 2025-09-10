import { useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Display from "./Display";
import History from "./History";
import Keypad from "./Keypad";
import * as Haptics from "expo-haptics";
import Colors from "../colors";

const Calculator = (props) => {
  const { darkMode, history, setHistory } = props;
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const [input, setInput] = useState("0");

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

      case "x²":
        try {
          const num = parseFloat(input);
          if (!isNaN(num)) {
            const result = (num * num).toString();
            setHistory((prev) => {
              const updated = [...prev, `${num}² = ${result}`];
              return updated.slice(-3);
            });
            setInput(result);
          }
        } catch {
          setInput("Error");
        }
        break;

      case "x³":
        try {
          const num = parseFloat(input);
          if (!isNaN(num)) {
            const result = (num * num * num).toString();
            setHistory((prev) => {
              const updated = [...prev, `${num}³ = ${result}`];
              return updated.slice(-3);
            });
            setInput(result);
          }
        } catch {
          setInput("Error");
        }
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

          if (prev === "0") return btn;
          return prev + (operators.includes(btn) ? ` ${btn} ` : btn);
        });
        break;
    }
  };

  const containerStyles = [
    styles.container,
    darkMode ? styles.dark : styles.light,
    { maxWidth: width >= 800 ? width * 0.8 : "100%" },
  ];

  return (
    <View style={containerStyles}>
      {!isLandscape && (
        <History
          isLandscape={isLandscape}
          darkMode={darkMode}
          history={history}
        />
      )}

      {/* Main display */}
      <Display 
        isLandscape={isLandscape} 
        input={input} 
        darkMode={darkMode} 
        />

      {/* Keypad */}
      <Keypad
        isLandscape={isLandscape}
        darkMode={darkMode}
        handlePress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "space-between",
    
  },
  light: {
    backgroundColor: Colors.light
  },
  dark: {
    backgroundColor: Colors.dark
  },
});

export default Calculator;
