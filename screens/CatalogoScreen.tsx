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
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("PerfilUser")}
        >
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Favoritos")}
        >
          <Text style={styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={juegos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} 
        columnWrapperStyle={styles.row} 
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Bottom', { screen: 'PBichos' })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.genre}>🎭 {item.genre}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgb(4, 4, 4)",
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
  },
  buttonText: {
    color: "#1E3A8A",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    justifyContent: "space-around",
  },
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 4,
  },
  genre: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
});
