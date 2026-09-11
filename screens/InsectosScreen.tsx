import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ListaInsectos from '../data/info_insects.json';
import Tarjeta from '../components/Tarjeta';

// 👇 Tipo de insecto según tu JSON
type Insecto = {
  nombre: string;
  especie: string;
  imagen: string;
  sonido?: any;
};

export default function InsectosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🪲 Catálogo de Insectos</Text>
      <FlatList
        data={ListaInsectos as Insecto[]} // 👈 tipado explícito
        renderItem={({ item }) => <Tarjeta informacion={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(4, 4, 4)',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FACC15',
    textAlign: 'center',
    marginVertical: 15,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
