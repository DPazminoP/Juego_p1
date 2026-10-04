import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Juegos } from '../types/Juegos';
import gamesData from '../data/juegos_catalogo_ppd.json';
import GameCard from '../components/GameCard';
import { startAfter } from 'firebase/database';

type Props = {
    navigation: any;
};

export default function CatalogoNoLoginScreen({ navigation }: Props) {
        const [juegos, setJuegos] = useState<Juegos[]>([]);

        useEffect(() => {
            setJuegos(gamesData.juegos);
        }, []);

        return (
            <ImageBackground 
            source={{ uri: "https://i.postimg.cc/fTMYykqw/Fonfo2.jpg" }} 
            style={styles.container}
            >
            <Text style={styles.title}>🎮 Catálogo de Juegos 🎮</Text>

            <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Ingresar")}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Registrarse")}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>

            

            
            <FlatList
                data={juegos}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                
                <View style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.name}>{item.nombre}</Text>
                    
                </View>

                )}
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
            marginHorizontal: 5,
        },
        buttonText: {
            color: "#1E3A8A",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
        },
        row: { justifyContent: "space-between" },
        listContainer: { paddingBottom: 20 },
        card: {
            backgroundColor: "#ffffff38",
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 10,
            flex: 1,
            alignItems: "center",
            padding: 8,
        },
        image: {
            width: 100,
            height: 80,
            borderRadius: 8,
            marginBottom: 8,
        },
        name: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#1E3A8A",
            textAlign: "center",
            marginBottom: 4,
        },
        genre: {
            fontSize: 12,
            color: "#333",
            textAlign: "center",
        },
});