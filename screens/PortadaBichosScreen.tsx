import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAudioPlayer } from 'expo-audio';

// 👇 Ajusta el tipo de navegación según tu stack
type RootStackParamList = {
  PBichos: undefined;   // 👈 coincide con Bottom.Screen
  ListaBichos: undefined; // 👈 coincide con Bottom.Screen
  Catalogo: undefined;  // 👈 coincide con Stack.Screen
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'PBichos'>;
};


export default function PortadaBichosScreen({ navigation }: Props) {
  // 👇 Hook para reproducir audio local
  const player = useAudioPlayer(require('../assets/sounds/freesound_community-cricket-chirp-101026.mp3'));

  const playLocalSound = () => {
    player.play();
  };

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
      source={{ uri: "https://i.postimg.cc/76609R7D/Fondonatural1.jpg" }} 
      style={styles.container}
    >
      
      <View style={styles.buttonExit}>
              <TouchableOpacity 
                style={styles.button1} 
                onPress={confirmarSalida}
              >
                <Text style={styles.buttonText}>Salir</Text>
              </TouchableOpacity>
            </View>

      <View style={styles.row}>
        <Image
          source={{ uri: 'https://i.postimg.cc/q7rPrNLK/logo1.png' }}
          style={styles.logo}
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          playLocalSound();
          navigation.navigate('ListaBichos');
        }}
      >
        <Image
          source={{ uri: 'https://i.postimg.cc/FFnXSsry/Button1.png' }}
          style={styles.imgbt}
        />
        <Text style={styles.butonTxt}>Comenzar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,                // ocupa toda la pantalla
  resizeMode: 'cover',    // asegura que la imagen se expanda sin deformarse
  justifyContent: 'center', // centra contenido verticalmente
  alignItems: 'center',     // centra contenido horizontalmente
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 410,
    height: 350,
  },
  imgbt: {
    width: 110,
    height: 100,
  },
  button: {
    //backgroundColor: '#060605',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  butonTxt: {
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonExit: {
    position: 'absolute', // 👈 lo fija en la pantalla
    top: 15,              // 👈 distancia desde arriba
    right: 15,             // 👈 distancia desde la izquierda
    padding: 5,
    backgroundColor: '#e2dede25', // 👈 semitransparente para destacar
    borderRadius: 8,      // 👈 opcional, suaviza el fondo
  },

  button1: {
    //backgroundColor: '#a3f095',
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
