import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

export default function RegistroScreen({navigation}:any) {
    const [correo, setCorreo] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const [nombre, setNombre] = useState("")
    const [username, setUsername] = useState("")
    const [edad, setEdad] = useState("")

    function registro(){
        createUserWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                navigation.navigate('Ingresar')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                // ..
            });
    }
    
    return (
        <ImageBackground 
                    source={{ uri: "https://i.postimg.cc/fTMYykqw/Fonfo2.jpg" }} 
                    style={styles.container}
                >
                    <Text style={styles.title}>📝 Regístrate como usuario 📝</Text>
                    <View style={styles.logincard}>
                        <TextInput
                            placeholder='Correo'
                            value={correo}
                            onChangeText={setCorreo}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Contraseña'
                            value={contrasenia}
                            onChangeText={setContrasenia}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Nombre'
                            value={nombre}
                            onChangeText={setNombre}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Nombre de usuario o Nickname'
                            value={username}
                            onChangeText={setUsername}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Edad'
                            value={edad}
                            onChangeText={setEdad}
                            style={styles.input}
                        />
                        <Button title='Registrarse' color={"dark orange"} onPress={registro}/>
                        <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                        <TouchableOpacity 
                            style={styles.cambio}
                            onPress={()=>{navigation.navigate('Ingresar')}}
                        >
                            <Text style={styles.text}>Inicia sesión con tu cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            )
        }
        
        const styles = StyleSheet.create({
            container: { 
                flex: 1,
                justifyContent: 'center', // Centra el contenido verticalmente
                alignItems: 'center',     // Centra el contenido horizontalmente
            },
            title: {
                fontSize: 28,
                fontWeight: "bold",
                color: "#FACC15",
                textAlign: "center",
                marginVertical: 50,
            },
            logincard:{
                width: '85%',             // Controla qué tan ancho se verá el formulario
                padding: 20,
                backgroundColor: '#ffffff25',
                borderRadius: 12,
                justifyContent: 'center', // Centra el contenido verticalmente
                alignItems: 'center',     // Centra el contenido horizontalmente
            },
            input:{
                width: '95%',             // Controla qué tan ancho se verá el formulario
                height:55,
                padding: 15,
                backgroundColor: '#ece4e4e2',
                borderRadius: 12,
                marginVertical:20,
        
            },
            text:{
                fontSize: 15,
                fontWeight: "bold",
                color: "#181bc8dc",
                textAlign: "center",
                marginVertical: 10,
            },
            cambio:{
                width: '100%',             // Controla qué tan ancho se verá el formulario
                height:45,
                padding: 1,
                backgroundColor: '#e35d0ae2',
                borderRadius: 12,
                //marginVertical:20,
            },
        
        })