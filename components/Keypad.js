import { StyleSheet, View } from 'react-native'
import Button from "./Button";
const Keypad = (props) => {
const { buttonSize, handlePress } = props
  return (
    <View>
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
  )
}

export default Keypad

const styles = StyleSheet.create({
    row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
})