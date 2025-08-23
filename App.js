import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  SafeAreaView,
} from "react-native";
import Calculator from "./components/Calculator";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Calculator />
    </SafeAreaView>
  );
}
  