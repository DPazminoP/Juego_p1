import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useAudioPlayer } from 'expo-audio';

// 👇 Define las rutas del BottomTabNavigator
type BottomTabParamList = {
  PBichos: undefined;
  ListaBichos: undefined;
  InfoBichos: { 
    insecto: { 
      nombre: string; 
      especie: string; 
      imagen: string; 
      habitat: string; 
      informacion: string; 
      sonido?: string;
    } 
  };
};

type Props = {
  informacion: {
    nombre: string;
    especie: string;
    imagen: string;
    habitat: string;
    informacion: string;
    sonido?: string;
  };
};

export default function Tarjeta({ informacion }: Props) {
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList, "InfoBichos">>();
  const [ocultar, setOcultar] = useState(false);

  // 👇 Hook para reproducir sonido dinámico con fallback
  const player = useAudioPlayer(
    informacion.sonido ? { uri: informacion.sonido } : require('../assets/sounds/error1.mp3')
  );

  const playCry = () => {
    player.play();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => setOcultar(true)}>
      <View style={styles.listaContainer}>
        <Text style={styles.idText}>{informacion.nombre}</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: informacion.imagen }} style={styles.imageList} />
        </View>
      </View>

      <Modal visible={ocultar} transparent>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalName}>{informacion.nombre}</Text>
            <Text style={styles.modalId}>Especie: {informacion.especie}</Text>

            {/* Botón para reproducir sonido */}
            <TouchableOpacity style={styles.spriteContainer} onPress={playCry}>
              <Image style={styles.spriteImage} source={{ uri: informacion.imagen }} />
            </TouchableOpacity>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setOcultar(false);
                  navigation.navigate('InfoBichos', { insecto: informacion });
                }}
              >
                <Text style={styles.modalButtonText}>Ver más información</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={() => setOcultar(false)}>
                <Text style={styles.modalButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { padding: 2, margin: 2, alignItems: 'center' },
  listaContainer: {
    backgroundColor: '#a4e1a5',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#080804',
    alignItems: 'center',
  },
  imageList: {
    width: 90,
    height: 90,
    resizeMode: 'contain', // 👈 asegura que la imagen se vea completa
    //resizeMode: 'cover', // 👈 alternativa si quieres llenar el espacio
    //resizeMode: 'stretch', // 👈 alternativa si quieres estirar
  },
  imageContainer: {
    backgroundColor: '#f8f3f3e4',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#0b0b0a',
  },

  /////////////////////////////////////
  /////////////////////////////////////
  //////// Para el modal //////////////
  /////////////////////////////////////
  /////////////////////////////////////

  idText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ecece7',
    backgroundColor: '#0e450a',
    marginBottom: 5,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  spriteContainer: {
    backgroundColor: '#f8f3f3',
    borderRadius: 20,
    padding: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#766d1a',
  },
  spriteImage: {
    width: 250,
    height: 280,
    resizeMode: 'contain', // 👈 mantiene proporción
    //resizeMode: 'cover',
    //resizeMode: 'stretch',
  },
  modalContainer: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#937722',
  },
  modal: { backgroundColor: '#00000067', flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalName: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  modalId: { fontSize: 18, marginBottom: 10, color: '#060303', textAlign: 'center' },
  modalButtonContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  modalButton: {
    backgroundColor: '#937722',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  modalButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
