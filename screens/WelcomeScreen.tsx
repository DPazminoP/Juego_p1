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

export default function PortadaBichosScreen({ navigation }: any) {
  // 👇 Hook para reproducir audio local
    const player = useAudioPlayer(require('../assets/sounds/dragon-studio-game-over-retro-8bit-sfx-499656.mp3'));

    const playLocalSound = () => {
        player.play();
    };

    return (
        <ImageBackground 
        source={{ uri: "https://i.postimg.cc/TwrWYXnH/Fondo3.jpg" }} 
        style={styles.container}
        >
            <View style={styles.row}>
                <Image
                source={{ uri: 'https://i.postimg.cc/LXf09hCX/LOGO1-(1).png' }}
                style={styles.logo}
                />
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                playLocalSound();
                navigation.navigate('Catalogo');
                }}
            >
                <Image
                source={{ uri: 'https://i.postimg.cc/pTmbv28C/Boton-Inicio1-(1).png' }}
                style={styles.imgbt}
                />
                
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                // ocupa toda la pantalla
        //resizeMode: 'cover',    // asegura que la imagen se expanda sin deformarse
        //justifyContent: 'center', // centra contenido verticalmente
        //alignItems: 'center',     // centra contenido horizontalmente
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical:100,
    },
    logo: {
        width: 350,
        height: 150,
    },
    imgbt: {
        width: 310,
        height: 100,
    },
    button: {
        //backgroundColor: '#0d1ca1',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 200,
    },
    butonTxt: {
        tintColor:'#83530a',
        //color: '#c0770b',
        fontSize: 56,
        fontWeight: 'bold',
        marginTop: 5,
    },
});
