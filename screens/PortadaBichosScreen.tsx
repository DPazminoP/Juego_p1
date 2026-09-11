import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAudioPlayer } from 'expo-audio';

// 👇 Ajusta el tipo de navegación según tu stack
type RootStackParamList = {
  ListaBichos: undefined;
  Insectos: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ListaBichos'>;
};

export default function PortadaBichosScreen({ navigation }: Props) {
  // 👇 Hook para reproducir audio local
  const player = useAudioPlayer(require('../assets/sounds/Tono1_Bichos.mp3'));

  const playLocalSound = () => {
    player.play();
  };

  return (
    <ImageBackground 
      source={{ uri: "https://i.postimg.cc/65nwNxKQ/Portada3.jpg" }} 
      style={styles.container}
    >
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
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(4, 4, 4)",
    borderRadius: 10,
    padding: 8,
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
    backgroundColor: '#FACC15',
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
});
