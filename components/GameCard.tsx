// GameCard.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Juegos } from '../types/Juegos';

type Props = {
    juego: Juegos;
    navigation: any;
};

export default function GameCard({ juego, navigation }: Props) {
    const [visible, setVisible] = useState(false);

    return (
        <>
        {/* Tarjeta del juego */}
        <TouchableOpacity style={styles.card} onPress={() => setVisible(true)}>
            <Image source={{ uri: juego.image }} style={styles.image} />
            <View style={styles.textContainer}>
            <Text style={styles.name}>{juego.name}</Text>
            <Text style={styles.genre}>🎭 {juego.genre}</Text>
            </View>
        </TouchableOpacity>

        {/* Modal con información */}
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>{juego.name}</Text>
                <Image source={{ uri: juego.image }} style={styles.modalImage} />
                <Text style={styles.modalGenre}>Género: {juego.genre}</Text>

                {/* Botones dentro del modal */}
                <View style={styles.modalButtons}>
                <TouchableOpacity 
                    style={styles.modalButton} 
                    onPress={() => {
                    setVisible(false);
                    navigation.navigate('Bottom', { screen: 'PBichos' }); // 👈 ejemplo de navegación
                    }}
                >
                    <Text style={styles.modalButtonText}>Ir al juego</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.modalButton} 
                    onPress={() => {
                    setVisible(false);
                    navigation.navigate('Favoritos'); // 👈 ejemplo: agregar a favoritos
                    }}
                >
                    <Text style={styles.modalButtonText}>Agregar a favoritos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.modalButton} onPress={() => setVisible(false)}>
                    <Text style={styles.modalButtonText}>Cerrar</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        flex: 1,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 100,
        resizeMode: "cover",
    },
    textContainer: {
        backgroundColor: "#FACC15",
        paddingVertical: 6,
        alignItems: "center",
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#1E3A8A",
        textAlign: "center",
        flexWrap: "wrap",
    },
    genre: {
        fontSize: 12,
        color: "#333",
        textAlign: "center",
        marginTop: 2,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "#00000099",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#1E3A8A",
    },
    modalImage: {
        width: 200,
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
    },
    modalGenre: {
        fontSize: 14,
        marginBottom: 15,
        color: "#333",
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    modalButton: {
        backgroundColor: "#FACC15",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    modalButtonText: {
        color: "#1E3A8A",
        fontWeight: "bold",
        fontSize: 14,
    },
});
