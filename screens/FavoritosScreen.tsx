import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/config';

export default function FavoritosScreen({ navigation }: any) {
  const [favoritos, setFavoritos] = useState<any[]>([]);

  useEffect(() => {
    leerFavoritos();
  }, []);

  function leerFavoritos() {
    const starCountRef = ref(db, 'favoriteGames/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // 👇 Convertimos objeto en array con id incluido
        const lista = Object.entries(data).map(([id, value]: any) => ({
          id,
          ...value,
        }));
        setFavoritos(lista);
      } else {
        setFavoritos([]);
      }
    });
  }

  return (
    <ImageBackground source={{ uri: "https://i.postimg.cc/fTMYykqw/Fonfo2.jpg" }} style={styles.container}>
      <Text style={styles.title}>🎮 Lista de Juegos Favoritos 🎮</Text>

      {/* Botones de navegación */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PerfilUser")}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Catalogo")}>
          <Text style={styles.buttonText}>Volver al catálogo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de favoritos */}
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FavoriteCard datos={item} navigation={navigation}x />}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
});
