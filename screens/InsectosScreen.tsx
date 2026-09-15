import { FlatList, StyleSheet, Text, View, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import React from 'react';
import ListaInsectos from '../data/info_insects.json';
import Tarjeta from '../components/Tarjeta';

type Insecto = {
  nombre: string;
  especie: string;
  imagen: string;
  habitat: string;
  informacion: string;
  sonido?: string;
};

type RootStackParamList = {
  PBichos: undefined;   // 👈 coincide con Bottom.Screen
  Catalogo: undefined;  // 👈 coincide con Stack.Screen
};

export default function InsectosScreen({ navigation }: any) {
  const confirmarSalida = () => {
    Alert.alert(
      "Confirmar salida",
      "¿Deseas regresar al catálogo?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => navigation.navigate("Catalogo") }
      ]
    );
  };

  return (
    <ImageBackground 
      source={{uri: "https://i.postimg.cc/g2YNZmsC/Fondo1.gif"}} 
      style={styles.container}
    >
      {/* Botón flotante arriba a la derecha */}
      <View style={styles.buttonExit}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("PBichos")}
        >
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={confirmarSalida}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <Text style={styles.title}>🪲 Catálogo de Insectos</Text>
        
        <FlatList
          data={ListaInsectos as Insecto[]}
          renderItem={({ item }) => <Tarjeta informacion={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  container2: {
    flex: 1,
    padding: 10,
    paddingTop: 40, // 👈 deja espacio para que el título no se tape con el botón
    //backgroundColor: 'rgb(4, 4, 4)', // 👈 comentario para pruebas
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f0f0d',
    textAlign: 'center',
    marginVertical: 15,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonExit: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    backgroundColor: '#e3d8d899', // 👈 semitransparente para destacar
  },
  button: {
    backgroundColor: '#76eb9f',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#1E3A8A',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
