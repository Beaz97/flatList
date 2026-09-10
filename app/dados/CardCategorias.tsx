import { View, Text, FlatList, ImageBackground, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function renderCategoria({ item }: { item: any }) {
  return (
    <View style={styles.categoria}>
      <Text style={styles.tituloCategoria}>
        {item.titulo}
      </Text>

      <FlatList
        data={item.filmes}
        keyExtractor={(filme) => filme.id}
        horizontal={true}
        // showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          
          
          <Link href="/filme">
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.cardFilme}
            imageStyle={styles.imagemCard}
          >
            <View style={styles.sombra}>
              <Text style={styles.filmeTitulo}>
                {item.titulo}
              </Text>
            </View>
          </ImageBackground>
          </Link>


        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 20,
  },

  categoria: {
    marginBottom: 25,
  },

  tituloCategoria: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },

  cardFilme: {
    width: 130,
    height: 190,
    marginLeft: 15,
    justifyContent: "flex-end",
    overflow: "hidden",
  },

  imagemCard: {
    borderRadius: 12,
    resizeMode: "cover",
  },

  sombra: {
    width: "100%",
    padding: 10,
    paddingTop: 30,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  filmeTitulo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});