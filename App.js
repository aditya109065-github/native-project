import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, StyleSheet, View, Switch, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Calculator from "./components/calculator";

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  const { darkMode, setDarkMode, setHistory } = props;
  
  return (
    <View style={styles.drawer}>
      <View style={styles.drawerRow}>
        <Ionicons
          name={darkMode ? "moon" : "sunny"}
          size={28}
          color={darkMode ? "#fff" : "#000"}
          style={{ marginRight: 10 }}
        />
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? "#ffffff" : "#333333"}
          trackColor={{ false: "#a5a5a5", true: "#cccccc" }}
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
      <Calculator {...props} />
    </SafeAreaView>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: darkMode ? "#222831" : "#a5a5a5",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 600,
          },
          headerTintColor: darkMode ? "#fff" : "#333333", // header text + drawer icon
          drawerStyle: {
            backgroundColor: darkMode ? "#000000" : "#ffffff", // drawer bg
          },
          drawerActiveTintColor: darkMode ? "#fff" : "#000",
          drawerInactiveTintColor: darkMode ? "#aaa" : "#555",
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
    color: "#ffffff",
  },
  darkText: {
    color: "#000000",
  },
});
