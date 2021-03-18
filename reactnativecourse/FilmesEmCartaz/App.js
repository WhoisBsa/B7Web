/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  Button,
  FlatList,
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState('');

  useEffect(() => {
    const requestMovies = async () => {
      setLoading(true);
      const req = await fetch('https://api.b7web.com.br/cinema/');
      const json = await req.json();

      if (json) {
        setMovies(json);
      }
      setLoading(false);
    };
    requestMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333" />
      {loading && (
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}> Carregando...</Text>
        </View>
      )}
      {!loading && (
        <>
          <Text style={styles.totalMoviesText}>
            Total de filmes: {movies.length}
          </Text>
          <FlatList
            style={styles.list}
            data={movies}
            renderItem={({item}) => (
              <View styles={styles.movieItem}>
                <Image
                  source={{uri: item.avatar}}
                  style={styles.movieImage}
                  resizeMode="contain"
                />
                <Text style={styles.movieTitle}>{item.titulo}</Text>
              </View>
            )}
            keyExtractor={(item) => item.titulo}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
  },
  totalMoviesText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  movieItem: {
    marginBottom: 30,
  },
  movieImage: {
    height: 400,
  },
  movieTitle: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
});
