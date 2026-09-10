import { StyleSheet, Text, View, ImageBackground, FlatList, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Juegos } from '../types/Juegos'
import gamesData from '../data/juegos_catalogo_ppd.json'
import { useNavigation } from '@react-navigation/native';

export default function CatalogoScreen({navigation}:any) {
  const [juegos, setJuegos] = useState<Juegos[]>([]);
  //const navigation = useNavigation();

  useEffect(() => {
    setJuegos(gamesData.juegos);
    }, [])
  

  return (
    <ImageBackground source={{uri: "https://i.postimg.cc/zDQtrv6Q/pikura-pixel-art-7284052-1920.png"}} style={styles.container}>
      
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
      </View>

        <FlatList
        data={juegos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            /*onPress={() => navigation.navigate("Bottom", { screen: "PBichos" })}*/
            
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.genre}>Género: {item.genre}</Text>
          </TouchableOpacity>
        )}
      />
      
    </ImageBackground>
  )
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
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E3A8A",
  },
  genre: {
    fontSize: 14,
    color: "#333",
  },
})