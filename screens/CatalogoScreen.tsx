import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Juegos } from '../types/Juegos';
import gamesData from '../data/juegos_catalogo_ppd.json';

type Props = {
  navigation: any;
};

export default function CatalogoScreen({ navigation }: Props) {
  const [juegos, setJuegos] = useState<Juegos[]>([]);

  useEffect(() => {
    setJuegos(gamesData.juegos);
  }, []);

  return (
    <ImageBackground 
      source={{ uri: "https://i.postimg.cc/fTMYykqw/Fonfo2.jpg" }} 
      style={styles.container}
    >
      <Text style={styles.title}>🎮 Catálogo de Juegos 🎮</Text>

      {/* Botones de navegación */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PerfilUser")}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Favoritos")}>
          <Text style={styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

      {/* Catálogo en 3 columnas tipo grid */}
      <FlatList
        data={juegos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Bottom', { screen: 'PBichos' })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.genre}>🎭 {item.genre}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FACC15",
    textAlign: "center",
    marginVertical: 20,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FACC15",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#1E3A8A",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    justifyContent: "space-between", // distribución uniforme
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    flex: 1,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  textContainer: {
    backgroundColor: "#FACC15",
    paddingVertical: 6,
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    flexWrap: "wrap",
  },
  genre: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    marginTop: 2,
  },
});
