import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PerfilScreen({navigation}:any) {
  

  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Image 
        source={{ uri: "https://picsum.photos/200" }} 
        style={styles.avatar} 
      />

      {/* Nombre de usuario */}
      <Text style={styles.name}>Usuario Genérico</Text>

      {/* Correo */}
      <Text style={styles.email}>usuario@email.com</Text>

      {/* Botón para volver al catálogo */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Catalogo")}
      >
        <Text style={styles.buttonText}>Volver al Catálogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3A8A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#FACC15",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: "#E5E7EB",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FACC15",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#1E3A8A",
    fontSize: 16,
    fontWeight: "bold",
  },
});
