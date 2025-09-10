import {
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import Button from "./Button";

const Keypad = ({ handlePress, darkMode }) => {
  const { width, height } = useWindowDimensions();

  const checkIsTablet = () => {
    const minDimension = Math.min(width, height);
    return { isTablet: minDimension >= 600, isLandscape: width > height };
  };

  const isLandscape = checkIsTablet()?.isLandscape;
  const isTablet = checkIsTablet().isTablet

  // Button sizing based on orientation
  const buttonSize = {
    width: isLandscape ? 120 : width / 4 - 12,
    height: isLandscape ? height * 0.1 : 60,
  };

  if (isLandscape) {
    return (
      <View style={[styles.landscapeContainer, { marginBottom: isTablet ? 30 : null }]}>
        <View style={styles.numpad}>
          <View style={styles.row}>
            <Button
              darkMode={darkMode}
              content="7"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="8"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="9"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="AC"
              type="gray"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="DEL"
              type="gray"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
          </View>

          <View style={styles.row}>
            <Button
              darkMode={darkMode}
              content="4"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="5"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="6"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="÷"
              type="gray"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="×"
              type="gray"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
          </View>
          <View style={styles.row}>
            <Button
              darkMode={darkMode}
              content="1"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="2"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="3"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="+"
              type="orange"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="-"
              type="orange"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
          </View>
          <View style={styles.row}>
            <Button
              darkMode={darkMode}
              content="x²"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="x³"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="."
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="%"
              type="orange"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
            <Button
              darkMode={darkMode}
              content="="
              type="orange"
              buttonSize={buttonSize}
              onPress={handlePress}
            />
          </View>
        </View>
      </View>
    );
  }

  // Portrait (default layout)
  return (
    <View style={[styles.potraitContainer, { marginBottom: isTablet ? 30 : 50 }]}>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="AC"
          type="gray"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="DEL"
          type="gray"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="%"
          type="gray"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="÷"
          type="orange"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="7"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="8"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="9"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="×"
          type="orange"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="4"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="5"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="6"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="-"
          type="orange"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="1"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="2"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="3"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="+"
          type="orange"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
      </View>
      <View style={styles.row}>
        <Button
          darkMode={darkMode}
          content="x²"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="x³"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="."
          buttonSize={buttonSize}
          onPress={handlePress}
        />
        <Button
          darkMode={darkMode}
          content="="
          type="orange"
          buttonSize={buttonSize}
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  potraitContainer: {
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 4,
  },
  landscapeContainer: {
    flexDirection: "row",
    paddingTop: 0,
  },
  numpad: {
    flex: 1,
    width: "100%",
    padding: 14,
    justifyContent: "flex-end",
  },
});
