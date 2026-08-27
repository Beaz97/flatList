import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";

export default function Netflix() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logo}>N</Text>
        </View>

        <ImageBackground
          source={{
            uri: "https://wallpaperaccess.com/full/2475837.jpg",
          }}
          style={styles.capa}
          resizeMode="cover"
        >
          <View style={styles.sombra}>
            <Text style={styles.capaTitulo}>
              Spider-man: Brand New Day
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.informacoes}>
          <Text style={styles.titulo}>
            Spider-man: Brand New Day
          </Text>

          <Text style={styles.dados}>
            2026 • 12 anos • 2h 25min
          </Text>

          <Text style={styles.generos}>
            Aventura • Ação • Fantasia • Ficção Científica
          </Text>

          <View style={styles.botaoAssistir}>
            <Text style={styles.textoBotao}>
              ▶ Assistir
            </Text>
          </View>

          <Text style={styles.tituloResumo}>
            Spider-man: Brand New Day
          </Text>

          <Text style={styles.resumo}>
            Homem-Aranha: Um Novo Dia explora a vida de Peter Parker após os
            acontecimentos de Homem-Aranha: Sem Volta Para Casa. Vivendo em
            Nova York depois que sua identidade foi apagada da memória de
            todos, o amigão da vizinhança tenta seguir em frente anonimamente
            enquanto concilia a rotina universitária com a missão de proteger
            a cidade como super-herói.
          </Text>

          <Text style={styles.detalhes}>
            Direção: Destin Daniel Cretton
          </Text>

          <Text style={styles.detalhes}>
            Elenco: Tom Holland, Zendaya, Sadie Sink, Jacob Batalon, Jon
            Bernthal, Florence Pugh, Tramell Tillman, Marisa Tomei, Mark Ruffalo
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
    backgroundColor: "#141414",
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
    justifyContent: "flex-end",
  },

  sombra: {
    width: "100%",
    paddingTop: 100,
    paddingBottom: 30,
    paddingHorizontal: 15,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },

  capaTitulo: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "900",
    letterSpacing: 2,
    textAlign: "center",
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
