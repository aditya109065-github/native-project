import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Button from "./Button";
import Display from "./Display";
import History from "./History";

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

          setHistory([`${input} = ${result}`, ...history]);
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
      <View style={styles.row}>
        <Button
          content="AC"
          type="gray"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          content="DEL"
          type="gray"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          content="%"
          type="gray"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          content="÷"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button content="7" size={buttonSize} onPress={handlePress} />
        <Button content="8" size={buttonSize} onPress={handlePress} />
        <Button content="9" size={buttonSize} onPress={handlePress} />
        <Button
          content="×"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button content="4" size={buttonSize} onPress={handlePress} />
        <Button content="5" size={buttonSize} onPress={handlePress} />
        <Button content="6" size={buttonSize} onPress={handlePress} />
        <Button
          content="-"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button content="1" size={buttonSize} onPress={handlePress} />
        <Button content="2" size={buttonSize} onPress={handlePress} />
        <Button content="3" size={buttonSize} onPress={handlePress} />
        <Button
          content="+"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button content="0" size={buttonSize} flex={2} onPress={handlePress} />
        <Button content="." size={buttonSize} onPress={handlePress} />
        <Button
          content="="
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", justifyContent: "flex-end" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
});

export default Calculator;
