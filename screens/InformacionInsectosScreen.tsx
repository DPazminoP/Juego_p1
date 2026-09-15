import { Image, StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  InformacionInsectos: { 
    insecto: { 
      nombre: string; 
      especie: string; 
      imagen: string; 
      habitat: string; 
      informacion: string; 
      sonido: string; 
    } 
  };
  PBichos: undefined;     
  ListaBichos: undefined; 
  Catalogo: undefined;    
};

type Props = {
  route: RouteProp<RootStackParamList, 'InformacionInsectos'>;
  navigation: StackNavigationProp<RootStackParamList, 'InformacionInsectos'>;
};

export default function InformacionInsectosScreen({ route, navigation }: Props) {
  const { insecto } = route.params;

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
    <ImageBackground source={{uri: "https://i.postimg.cc/g2YNZmsC/Fondo1.gif"}} style={styles.background1}>
      
      {/* Botón flotante arriba a la derecha */}
      <View style={styles.buttonExit}>
        <TouchableOpacity style={styles.button} onPress={confirmarSalida}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: insecto.imagen }} style={styles.image} />
        <Text style={styles.title}>{insecto.nombre}</Text>
        <Text style={styles.text}>Especie: {insecto.especie}</Text>
        <Text style={styles.text}>Hábitat: {insecto.habitat}</Text>
        <Text style={styles.text}>{insecto.informacion}</Text>
      </ScrollView>

      {/* Barra flotante fija con botones abajo */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PBichos")}>
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ListaBichos")}>
          <Text style={styles.buttonText}>Lista</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background1: { flex: 1 },
  scrollContent: {
    paddingTop: 100,
    alignItems: 'center',
    paddingBottom: 80, // 👈 deja espacio para que el scroll no quede tapado por la barra inferior
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'contain', // 👈 mantiene la imagen completa
    //resizeMode: 'cover',
    //resizeMode: 'stretch',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#FACC15',
    textAlign: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
    color: '#E5E7EB',
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonsRow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#00000099', // 👈 semitransparente para destacar
  },
  buttonExit: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#00000099',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#FACC15',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
