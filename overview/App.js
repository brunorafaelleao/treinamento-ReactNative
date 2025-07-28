import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import imgOn from "./assets/img-over/standby-silver.png";
import imgOff from "./assets/img-over/standby-black.png";

export default function App() {
  const isOn = false;
  const txt = isOn ? "App on!!" : "App off!!";
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={isOn ? styles.textOn : styles.textOff}>{txt}</Text>
        <Image source={isOn ? imgOn : imgOff}></Image>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  textOn: {
    color: "#fff",
  },
  textOff: {
    color: "#333",
  },
});
