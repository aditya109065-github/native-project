import { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Display from "./Display";
import History from "./History";
import Keypad from "./Keypad";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [history, setHistory] = useState([]);
  const screenWidth = Dimensions.get("window").width;
  const buttonSize = screenWidth / 4 - 12;

  const handlePress = (btn) => {
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
          setInput(result);
        } catch {
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
    <View style={styles.container}>
      {/* History visible at the top */}
      <History history={history} />

      {/* Main display */}
      <Display input={input} />

      {/* Keypad */}
      <Keypad 
        buttonSize={buttonSize}
        handlePress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", justifyContent: "flex-end" },
  
});

export default Calculator;
