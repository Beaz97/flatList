import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

export interface FilmeProps {
  id?: string;
  titulo?: string;
  subtitulo?: string;
  ano?: string;
  duracao?: string;
  classificacao?: string;
  nota?: string;
  genero?: string;
  sinopse?: string;
  elenco?: string;
  direcao?: string;
  imagem?: string;
}

const filmeExemploPadrao: FilmeProps = {
  id: '1a',
  titulo: 'Spider-man: Brand New Day',
  ano: '2026',
  duracao: '2h 25min',
  classificacao: '12 anos',
  nota: '67',
  genero: 'Aventura • Ação • Fantasia • Ficção Científica',
  sinopse:
    'Homem-Aranha: Um Novo Dia explora a vida de Peter Parker após os acontecimentos de Homem-Aranha: Sem Volta Para Casa. Vivendo em Nova York depois que sua identidade foi apagada da memória de todos, o amigão da vizinhança tenta seguir em frente anonimamente enquanto concilia a rotina universitária com a missão de proteger a cidade como super-herói.',
  elenco:
    'Tom Holland, Zendaya, Sadie Sink, Jacob Batalon, Jon Bernthal, Florence Pugh, Tramell Tillman, Marisa Tomei, Mark Ruffalo',
  direcao: 'Destin Daniel Cretton',
  imagem:
    'https://wallpaperaccess.com/full/2475837.jpg',
};

export default function Filme(props?: FilmeProps) {
  const params = useLocalSearchParams<Record<string, string>>();

  const filme: FilmeProps = {
    id: props?.id || params.id || filmeExemploPadrao.id,
    titulo: props?.titulo || params.titulo || filmeExemploPadrao.titulo,
    subtitulo:
      props?.subtitulo ||
      params.subtitulo ||
      filmeExemploPadrao.subtitulo,
    ano: props?.ano || params.ano || filmeExemploPadrao.ano,
    duracao:
      props?.duracao ||
      params.duracao ||
      filmeExemploPadrao.duracao,
    classificacao:
      props?.classificacao ||
      params.classificacao ||
      filmeExemploPadrao.classificacao,
    nota: props?.nota || params.nota || filmeExemploPadrao.nota,
    genero:
      props?.genero ||
      params.genero ||
      filmeExemploPadrao.genero,
    sinopse:
      props?.sinopse ||
      params.sinopse ||
      filmeExemploPadrao.sinopse,
    elenco:
      props?.elenco ||
      params.elenco ||
      filmeExemploPadrao.elenco,
    direcao:
      props?.direcao ||
      params.direcao ||
      filmeExemploPadrao.direcao,
    imagem:
      props?.imagem ||
      params.imagem ||
      filmeExemploPadrao.imagem,
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.posterContainer}>
        <Image
          source={{ uri: filme.imagem }}
          style={styles.poster}
          resizeMode="cover"
        />
      </View>

      <View style={styles.detalhesContainer}>
        <Text style={styles.titulo}>
          {filme.titulo}
        </Text>

        {filme.subtitulo ? (
          <Text style={styles.subtitulo}>
            {filme.subtitulo}
          </Text>
        ) : null}

        <View style={styles.tagsContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>
              {filme.ano}
            </Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>
              {filme.duracao}
            </Text>
          </View>

          <View
            style={[
              styles.badge,
              styles.badgeClassificacao,
            ]}
          >
            <Text style={styles.badgeTexto}>
              {filme.classificacao}
            </Text>
          </View>

          <View style={styles.ratingContainer}>
            <Ionicons
              name="star"
              size={16}
              color="#FFD700"
            />

            <Text style={styles.ratingTexto}>
              {filme.nota}
            </Text>
          </View>
        </View>

        <Text style={styles.genero}>
          {filme.genero}
        </Text>

        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={styles.botaoAssistir}
            activeOpacity={0.8}
          >
            <Ionicons
              name="play"
              size={20}
              color="#000"
            />

            <Text style={styles.textoBotaoAssistir}>
              Assistir
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoMinhaLista}
            activeOpacity={0.8}
          >
            <Ionicons
              name="add"
              size={20}
              color="#FFF"
            />

            <Text style={styles.textoBotaoMinhaLista}>
              Minha Lista
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoConteudo}>
            {filme.sinopse}
          </Text>
        </View>

        <Text style={styles.detalhes}>
          Direção: {filme.direcao}
        </Text>

        <Text style={styles.detalhes}>
          Elenco: {filme.elenco}
        </Text>

        <Text style={styles.detalhes}>
          Classificação: {filme.classificacao}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },

  scrollContent: {
    paddingBottom: 40,
  },

  posterContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#000',
  },

  poster: {
    width: '100%',
    height: '100%',
  },

  detalhesContainer: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 30,
    backgroundColor: '#141414',
  },

  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 14,
    color: '#aaa',
    fontStyle: 'italic',
    marginBottom: 12,
  },

  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },

  badge: {
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  badgeClassificacao: {
    backgroundColor: '#E50914',
  },

  badgeTexto: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 4,
  },

  ratingTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  genero: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 18,
  },

  botoesContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },

  botaoAssistir: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },

  textoBotaoAssistir: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },

  botaoMinhaLista: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: '#444',
  },

  textoBotaoMinhaLista: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

  secao: {
    marginBottom: 18,
  },

  secaoConteudo: {
    color: '#ddd',
    fontSize: 14,
    lineHeight: 21,
  },

  detalhes: {
    color: '#888',
    fontSize: 12,
    marginBottom: 6,
  },
});
