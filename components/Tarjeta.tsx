import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAudioPlayer } from 'expo-audio';

// 👇 Define el tipo de navegación
type RootStackParamList = {
  InfoBichos: { insecto: { nombre: string; especie: string; imagen: string; sonido?: any } };
};

type Props = {
  informacion: {
    nombre: string;
    especie: string;
    imagen: string;
    sonido?: any;
  };
};

export default function Tarjeta({ informacion }: Props) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'InfoBichos'>>();
  const [ocultar, setOcultar] = useState(false);

  // 👇 Hook para reproducir sonido
  const player = useAudioPlayer(
    informacion.sonido ? informacion.sonido : require('../assets/sounds/Tono1_Bichos.mp3')
  );

  const playCry = () => {
    player.play();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => setOcultar(true)}>
      <View style={styles.listaContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.idText}>{informacion.nombre}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: informacion.imagen }} style={styles.imageList} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{informacion.especie}</Text>
        </View>
      </View>

      <Modal visible={ocultar} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.modalName}>{informacion.nombre}</Text>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.modalId}>Especie: {informacion.especie}</Text>
              </View>
            </View>

            {/* Botón para reproducir sonido */}
            <TouchableOpacity style={styles.spriteContainer} onPress={playCry}>
              <Image style={styles.spriteImage} source={{ uri: informacion.imagen }} />
            </TouchableOpacity>

            <View style={styles.descriptionContainer}>
              <Text style={styles.modalStats}>Especie: {informacion.especie}</Text>
            </View>

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
  container: { padding: 1, margin: 1, alignItems: 'center' },
  listaContainer: {
    alignItems: 'flex-start', // 👈 corregido
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#766d1a',
  },
  imageList: { width: 90, height: 90 },
  imageContainer: {
    backgroundColor: '#f8f3f3',
    borderRadius: 50,
    padding: 3,
    marginVertical: 3,
    borderWidth: 1,
    borderColor: '#766d1a',
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  infoContainer: {
    backgroundColor: '#caaf14',
    paddingHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#766d1a',
  },
  idText: { fontWeight: 'bold', fontSize: 15, color: '#282703' },
  spriteContainer: {
    backgroundColor: '#f8f3f3',
    borderRadius: 200,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#766d1a',
  },
  spriteImage: { width: 270, height: 300, resizeMode: 'contain' },
  modalContainer: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 40,
    borderRadius: 20,
    borderWidth: 10,
    borderColor: '#937722',
  },
  modal: { backgroundColor: '#00000067', flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  modalId: { fontSize: 20, marginBottom: 5, color: '#060303', textAlign: 'center', alignSelf: 'stretch' },
  descriptionContainer: {
    width: '100%',
    backgroundColor: '#caaf14',
    borderRadius: 12,
    padding: 10,
    marginVertical: 0,
    borderWidth: 1,
    borderColor: '#7c710f',
  },
  modalStats: { fontSize: 18, marginTop: 5, textAlign: 'center', color: '#333' },
  modalButtonContainer: { flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 5 },
  modalButton: {
    backgroundColor: '#937722',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#766d1a',
  },
  modalButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
