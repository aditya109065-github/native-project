import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, StyleSheet, View, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Calculator from "./components/calculator";

const Drawer = createDrawerNavigator();

function DrawerContent({ darkMode, setDarkMode }) {
  return (
    <View style={styles.drawer}>
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
  );
}

function CalculatorScreen({ darkMode }) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: darkMode ? "#000" : "#fff" }}
    >
      <StatusBar style={darkMode ? "light" : "dark"} />
      <Calculator darkMode={darkMode} />
    </SafeAreaView>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

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
            fontWeight: 600
          },
          headerTintColor: darkMode ? "#fff" : "#333333", // header text + drawer icon
          drawerStyle: {
            backgroundColor: darkMode ? "#000000" : "#ffffff", // drawer bg
          },
          drawerActiveTintColor: darkMode ? "#fff" : "#000",
          drawerInactiveTintColor: darkMode ? "#aaa" : "#555",
        }}
        drawerContent={() => (
          <DrawerContent darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      >
        <Drawer.Screen name="Calculator">
          {() => <CalculatorScreen darkMode={darkMode} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    padding: 20,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
