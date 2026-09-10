import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PerfilScreen({navigation}:any) {
  

  return (
    <ImageBackground source={{uri: "https://i.postimg.cc/zDQtrv6Q/pikura-pixel-art-7284052-1920.png"}} style={styles.container}>
        
          {/* Foto de perfil */}
          <Image 
            source={{ uri: "https://i.postimg.cc/fRN1GkSp/perfilgenerico.jpg" }} 
            style={styles.avatar} 
          />

          {/* Nombre de usuario */}
          <Text style={styles.name}>Usuario sin registrar</Text>

          {/* Correo */}
          <Text style={styles.email}>usuario@email.com</Text>

          {/* Botón para volver al catálogo */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate("Catalogo")}
          >
            <Text style={styles.buttonText}>Volver al Catálogo</Text>
          </TouchableOpacity>
        
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgb(4, 4, 4)",
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
