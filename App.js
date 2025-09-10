import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, StyleSheet, View, Switch, Text, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Calculator from "./components/calculator";
import Colors from "./colors";

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  const { darkMode, setDarkMode, setHistory } = props;
  
  return (
    <View style={styles.drawer}>
      <View style={styles.drawerRow}>
        <Ionicons
          name={darkMode ? "moon" : "sunny"}
          size={28}
          color={darkMode ? Colors.light :Colors.dark}
          style={{ marginRight: 10 }}
        />
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? Colors.light : Colors.dark800}
          trackColor={{ false: Colors.switch.disabled, true: Colors.switch.enabled }}
        />
      </View>
      <View style={styles.drawerRow}>
        <Text
          style={[styles.text, darkMode ? styles.lightText : styles.darkText]}
        >
          Clear History
        </Text>
        <MaterialIcons
          onPress={() => setHistory([])}
          name="delete"
          size={24}
          color="red"
          style={{ paddingRight: 10 }}
        />
      </View>
    </View>
  );
}

function CalculatorScreen(props) {
  const { darkMode } = props;
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: darkMode ? "#000" : "#fff" }}
    >
      <StatusBar style={darkMode ? "light" : "dark"} />
      <View style={styles.rootScreen}>
        <Calculator {...props} />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { width } = useWindowDimensions();
  const [history, setHistory] = useState([]);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: darkMode ? Colors.header.dark : Colors.light,
          },
          headerStatusBarHeight: width > 450 ? 20 : 50,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 600,
          },
          headerTintColor: darkMode ? Colors.light :  Colors.dark800, // header text + drawer icon
          drawerStyle: {
            backgroundColor: darkMode ?  Colors.dark : Colors.light, // drawer bg
          },
          drawerActiveTintColor: darkMode ? Colors.light : Colors.dark,
          drawerInactiveTintColor: darkMode ? Colors.drawer.active : Colors.drawer.inactive,
        }}
        drawerContent={() => (
          <DrawerContent
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setHistory={setHistory}
          />
        )}
      >
        <Drawer.Screen name="Calculator">
          {() => (
            <CalculatorScreen
              darkMode={darkMode}
              history={history}
              setHistory={setHistory}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: 'center',
  },
  drawer: {
    padding: 16,
    marginTop: 40,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lightText: {
    color: Colors.light
  },
  darkText: {
    color: Colors.dark
  },
});
