import { StyleSheet, View } from "react-native";
import Button from "./Button";
const Keypad = (props) => {
  const { buttonSize, handlePress, darkMode } = props;
  return (
    <View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="AC"
          type="gray"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="DEL"
          type="gray"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="%"
          type="gray"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="÷"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="7"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="8"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="9"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="×"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="4"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="5"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="6"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="-"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="1"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="2"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="3"
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="+"
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="0"
          size={buttonSize}
          flex={2}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="."
          size={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="="
          type="orange"
          size={buttonSize}
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
});
