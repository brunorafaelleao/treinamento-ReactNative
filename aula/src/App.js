import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Primeiro01 from "./components/Primeiro01";
import Multi from "./components/Multi";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>COFAP é bom</Text>
      <Text>O Rafa gosta do COFAP e muito</Text>
      <Primeiro01 />
      <Multi />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
