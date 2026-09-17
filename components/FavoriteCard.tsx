import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase/config';

export default function FavoriteCard(props: any) {
    let favorito = props.datos;
    const { navigation } = props; // 👈 recibimos navigation desde FavoritosScreen

    function eliminar(id: string) {
        remove(ref(db, 'favoriteGames/' + id));
    }

    return (
        <View style={styles.container}>
        {/* Nombre del juego */}
        <Text style={styles.nombre}>{favorito.nombre}</Text>

        {/* Imagen del juego */}
        {favorito.photo && (
            <Image source={{ uri: favorito.photo }} style={styles.image} />
        )}

        {/* Botones */}
        <View style={styles.buttonsRow}>
            <Button 
            title="Eliminar" 
            color="red" 
            onPress={() => eliminar(favorito.id)} 
            />
            <Button 
            title="Ir al juego" 
            color="green" 
            onPress={() => navigation.navigate("Bottom", { screen: "PBichos" })} 
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        width: '80%',              // 👈 ocupa siempre el 80% del ancho
        borderRadius: 12,
        marginVertical: 10,
        alignSelf: 'center',       // 👈 centra la tarjeta horizontalmente
        padding: 12,
        alignItems: 'center',
    },
    nombre: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FACC15',
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});
