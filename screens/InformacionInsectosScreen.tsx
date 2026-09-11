import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// 👇 Define el tipo de parámetros del stack
type RootStackParamList = {
  InformacionInsectos: { 
    insecto: { 
      nombre: string; 
      especie: string; 
      imagen: string; 
      sonido?: any; // opcional si tu JSON lo incluye
    } 
  };
};

type Props = {
  route: RouteProp<RootStackParamList, 'InformacionInsectos'>;
  navigation: StackNavigationProp<RootStackParamList, 'InformacionInsectos'>;
};

export default function InformacionInsectosScreen({ route }: Props) {
  const { insecto } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: insecto.imagen }} style={styles.image} />
      <Text style={styles.title}>{insecto.nombre}</Text>
      <Text style={styles.text}>Especie: {insecto.especie}</Text>
      {/* Aquí puedes mostrar más campos del JSON, como descripción, hábitat, etc. */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'rgb(4, 4, 4)',
    alignItems: 'center',
  },
  image: { 
    width: '100%', 
    height: 200, 
    borderRadius: 8, 
    marginBottom: 15,
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginVertical: 10, 
    color: '#FACC15', 
    textAlign: 'center',
  },
  text: { 
    fontSize: 16, 
    color: '#E5E7EB', 
    textAlign: 'center',
  },
});
