import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      {
        id: "1a",
        titulo: "Spider-man: Brand New Day",
        cor: "#1a1a2e",
        image:
          "https://i.pinimg.com/736x/b6/05/0e/b6050ef2d569681460a68a15c82ead4d.jpg",
      },
      {
        id: "1b",
        titulo: "The Odyssey",
        cor: "#16213e",
        image:
          "https://pbs.twimg.com/media/HHhTDgCbIAAH6YJ.jpg",
      },
      {
        id: "1c",
        titulo: "the Drama",
        cor: "#0f3460",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.fyDtAxLojNL8WCYM3E7o2QHaKl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "1d",
        titulo: "Obsession",
        cor: "#533483",
        image:
          "https://th.bing.com/th/id/OIP.3obdGtxdrOAIHtdPX6SRvgAAAA?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "1e",
        titulo: "Backrooms",
        cor: "#2b2d42",
        image:
          "https://th.bing.com/th?id=OIF.hzTCDFXK%2fjHVCRIQqojyow&r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
  },
  {
    id: "2",
    titulo: "X-Men Series",
    filmes: [
      {
        id: "2a",
        titulo: "X-Men",
        cor: "#1b1b2f",
        image:
          "https://tse1.mm.bing.net/th/id/OIP.xWq6NwDHnBy3TMStPhN3zQHaK9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "2b",
        titulo: "X2",
        cor: "#162447",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.0AcAIlX3CcQOcLMtO_f8zQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "2c",
        titulo: "X-Men: The Last Stand",
        cor: "#1f4068",
        image:
          "https://th.bing.com/th/id/R.749c834d9717b047e9e2018c723ed48a?rik=EZwfLiGThsvAgg&pid=ImgRaw&r=0",
      },
      {
        id: "2d",
        titulo: "X-Men Origins: Wolverine",
        cor: "#1b262c",
        image:
          "https://image.tmdb.org/t/p/original/8TItaEDL9lRCVcGMkYFluceD2Od.jpg",
      },
      {
        id: "2e",
        titulo: "X-Men: First Class",
        cor: "#1b262c",
        image:
          "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/1000012291.jpg",
      },
      {
        id: "2f",
        titulo: "The Wolverine",
        cor: "#1b262c",
        image:
          "https://images5.alphacoders.com/511/511957.jpg",
      },
      {
        id: "2g",
        titulo: "X-Men: Days of Future Past",
        cor: "#1b262c",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzNiYWE4NjMtMTU4OS00NmM4LWE4ZjAtYmE5OTA5NjkzODExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: "2h",
        titulo: "X-Men: Apocalypse",
        cor: "#1b262c",
        image:
          "https://www.themoviedb.org/t/p/original/vsv91Fj4pxOEm2QJ96jq2EXS7QT.jpg",
      },
      {
        id: "2i",
        titulo: "X-Men: Dark Phoenix",
        cor: "#1b262c",
        image:
          "https://tse2.mm.bing.net/th/id/OIP.jgvEryBWZhZZPtSJaGF--AHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      
    ],
  },
  {
    id: "3",
    titulo: "Spider-Man Series",
    filmes: [
      {
        id: "3a",
        titulo: "Spider-Man",
        cor: "#2d132c",
        image:
          "https://tse1.mm.bing.net/th/id/OIP.odqjHHJk4XqWm-3QVhDhtQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "3b",
        titulo: "Spider-Man 2",
        cor: "#1c3334",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjIwNjAzYTYtZDI2Ny00OTg2LTgyODEtODhkOTE3NzExY2QzXkEyXkFqcGc@._V1_.jpg",
      },
      {
        id: "3c",
        titulo: "Spider-Man 3",
        cor: "#2c003e",
        image:
          "https://image.tmdb.org/t/p/original/hQyIZMlMZoEx2nhyPtPQyBtlwKp.jpg",
      },
      {
        id: "3d",
        titulo: "The Amazing Spider-Man",
        cor: "#2c003e",
        image:
          "https://th.bing.com/th/id/R.c2797e3fb809cc6ddac81b6e9b2aa5b4?rik=6fecNsw7CxwN%2bA&pid=ImgRaw&r=0",
      },
      {
        id: "3e",
        titulo: "The Amazing Spider-Man 2",
        cor: "#2c003e",
        image:
          "https://th.bing.com/th/id/R.2bb0896a89c2436b36d18a059c253cde?rik=PtT8aEDnK0%2b9Ng&pid=ImgRaw&r=0",
      },
      {
        id: "3f",
        titulo: "Spider-Man: Homecoming",
        cor: "#2c003e",
        image:
          "https://www.sonypictures.ca/sites/canada/files/2023-04/SPIDERMANHOMECOMING_ESTPROMOTIONAL_2000x3000_CA_1333x2000_thumbnail-min.jpg",
      },
      {
        id: "3g",
        titulo: "Spider-Man: Far From Home",
        cor: "#2c003e",
        image:
          "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89357/94633/Spider-Man-Far-From-Home-Final-Style-Double-sided-original-movie-poster-buy-now-at-starstills__72883.1599866592.jpg?c=2?imbypass=on",
      },
      {
        id: "3h",
        titulo: "Spider-Man: No Way Home",
        cor: "#2c003e",
        image:
          "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: "3i",
        titulo: "Spider-man: Brand New Day",
        cor: "#1a1a2e",
        image:
          "https://i.pinimg.com/736x/b6/05/0e/b6050ef2d569681460a68a15c82ead4d.jpg",
      },
    ],
  },
  {
    id: "4",
    titulo: "Jurassic Series",
    filmes: [
      {
        id: "4a",
        titulo: "Jurassic Park",
        cor: "#0d0d0d",
        image:
          "https://th.bing.com/th/id/R.42b78e5fb73c666ee33aab9a6b291685?rik=Zrjc23uyymzhQA&riu=http%3a%2f%2fwww.gurkankilicaslan.com%2fwp-content%2fuploads%2f2018%2f06%2fJurassic-Park.jpg&ehk=M9VXJOWMTnjVSfe0q47u9AWMOKZ%2bfa9WtUY%2fFWU4iK8%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: "4b",
        titulo: "The Lost World: Jurassic Park",
        cor: "#001011",
        image:
          "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tlwjp_1.jpeg",
      },
      {
        id: "4c",
        titulo: "Jurassic Park III",
        cor: "#002b36",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.LcJSWZ_IRBsU-Gc9g-7UFwHaK6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "4d",
        titulo: "Jurassic World",
        cor: "#002b36",
        image:
          "https://images.squarespace-cdn.com/content/v1/5fd3bb901659b8681a26145f/cde73557-a415-46f5-977e-1b86ad18e324/JW1.jpg",
      },
      {
        id: "4e",
        titulo: "Jurassic World: Fallen Kingdom",
        cor: "#002b36",
        image:
          "https://www.cinemundo.com.br/wp-content/uploads/2018/04/Jurassic-World-Reino-Amea%C3%A7ado.jpg",
      },
      {
        id: "4f",
        titulo: "Jurassic World: Dominion",
        cor: "#002b36",
        image:
          "https://tse2.mm.bing.net/th/id/OIP.fgkbTD_rRtbMyAsy6jzAlAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "4g",
        titulo: "Jurassic World Rebirth",
        cor: "#002b36",
        image:
          "https://www.dvdsreleasedates.com/posters/800/J/Jurassic-World-Rebirth-2025-movie-poster.jpg",
      },
    ],
  },
  {
    id: "5",
    titulo: "Mission: Impossible Series",
    filmes: [
      {
        id: "5a",
        titulo: "Mission: Impossible",
        cor: "#200122",
        image:
          "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: "5b",
        titulo: "Mission: Impossible II",
        cor: "#190a05",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmYzMWNjOTItNDQ5Zi00ZjRhLThhNGUtZTA3MjVlNTBhYWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: "5c",
        titulo: "Mission: Impossible III",
        cor: "#0a0a0a",
        image:
          "https://th.bing.com/th/id/R.eb32f93fb9aa68edd90b15353d1c7b4b?rik=ZudBupkD4zgxLA&riu=http%3a%2f%2fwww.impawards.com%2f2006%2fposters%2fmission_impossible_iii_ver3_xlg.jpg&ehk=RY50jkBF4%2f%2bGjk7paKeCHcMJLvW%2b1zBf4OyixcGwsUs%3d&risl=&pid=ImgRaw&r=0",
      },
       {
        id: "5d",
        titulo: "Mission: Impossible - Ghost Protocol",
        cor: "#0a0a0a",
        image:
          "https://tse4.mm.bing.net/th/id/OIP.ZxfnYjsatxbG1rlCAVk1oAHaLk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "5e",
        titulo: "Mission: Impossible - Rogue Nation",
        cor: "#0a0a0a",
        image:
          "https://image.tmdb.org/t/p/original/sGvcWcI99OTXLzghD7qXw00KaY5.jpg",
      },
      {
        id: "5f",
        titulo: "Mission: Impossible - Fallout",
        cor: "#0a0a0a",
        image:
          "https://tse4.mm.bing.net/th/id/OIP.ix1hg1H9IBe3Vpr-o52HpgHaK5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "5g",
        titulo: "Mission: Impossible - Dead Reckoning",
        cor: "#0a0a0a",
        image:
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/mission-impossible-dead-reckoning-poster.jpg",
      },
    ],
  },
];

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

function renderCategoria({ item }: { item: any }) {
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