import React from "react";

import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import DadosDoFilme from '../dados/DadosDoFilme'
import renderCategoria from '../dados/CardCategorias'
const categorias = DadosDoFilme();

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 20,
  }
})