import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";

export default function Primeiro01() {
  return (
    <View>
      <Text style={estilo.texto}>Teste do App agora com Expo</Text>
      <Text style={estilo.texto}>{1 + 1}</Text>
    </View>
  );
}
