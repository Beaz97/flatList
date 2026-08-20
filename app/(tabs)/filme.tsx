import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function Netflix() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.logo}>N</Text>
        </View>

        <View style={styles.capa}>
          <Text style={styles.capaTitulo}>
            BARBIE
          </Text>

          <Text style={styles.capaSubtitulo}>
            2023
          </Text>
        </View>

        <View style={styles.informacoes}>

          <Text style={styles.titulo}>
            Barbie
          </Text>

          <Text style={styles.dados}>
            2023 • 12 anos • 1h 54min
          </Text>

          <Text style={styles.generos}>
            Comédia • Fantasia • Aventura
          </Text>

          <View style={styles.botaoAssistir}>
            <Text style={styles.textoBotao}>
              ▶ Assistir
            </Text>
          </View>

          <Text style={styles.tituloResumo}>
            Barbie
          </Text>

          <Text style={styles.resumo}>
            Barbie vive uma vida perfeita na Barbieland, onde todos
            os dias são cheios de diversão. Porém, quando ela começa
            a enfrentar situações inesperadas, decide viajar para o
            mundo real em busca de respostas.
          </Text>

          <Text style={styles.detalhes}>
            Direção: Greta Gerwig
          </Text>

          <Text style={styles.detalhes}>
            Elenco: Margot Robbie, Ryan Gosling e America Ferrera
          </Text>

          <Text style={styles.detalhes}>
            Classificação: 12 anos
          </Text>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  logo: {
    color: "#E50914",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 2,
  },

  capa: {
    width: "100%",
    height: 380,
    backgroundColor: "#0f3460",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30,
  },

  capaTitulo: {
    color: "#fff",
    fontSize: 55,
    fontWeight: "900",
    letterSpacing: 4,
  },

  capaSubtitulo: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },

  informacoes: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 30,
  },

  titulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  dados: {
    color: "#aaa",
    fontSize: 13,
    marginBottom: 8,
  },

  generos: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 18,
  },

  botaoAssistir: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 13,
    alignItems: "center",
    marginBottom: 22,
  },

  textoBotao: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },

  tituloResumo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  resumo: {
    color: "#ddd",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 15,
  },

  detalhes: {
    color: "#888",
    fontSize: 12,
    marginBottom: 6,
  },
});