import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function LoginScreen({navigation}:any) {
    
    const [correo, setCorreo] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    
    function login(){
        signInWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate('PerfilUser')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //Alert.alert(errorCode, errorMessage)
                if("auth/invalid-email"==errorCode){
                    Alert.alert("Correo inválido","Por favor escriba un correo válido o regístrese.")
                }else if ("auth/missing-password"==errorCode){
                    Alert.alert("Contraseña inválida","La contraseña no puede estar en blanco.")
                }else{
                    Alert.alert(errorCode, errorMessage)
                }
            });
        }
    
    useEffect(() => {
        
    }, [])
    


    return (
        <ImageBackground 
            source={{ uri: "https://i.postimg.cc/fTMYykqw/Fonfo2.jpg" }} 
            style={styles.container}
        >
            <Text style={styles.title}>🔒 Ingresa a tu cuenta 🔒</Text>
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
                <Button title='Iniciar Sesion' color={"dark orange"} onPress={login}/>
                <Text style={styles.text}>¿No tienes cuenta?</Text>
                <TouchableOpacity 
                    style={styles.cambio}
                    onPress={()=>{navigation.navigate('Registrarse')}}
                >
                    <Text style={styles.text}>Crea una cuenta</Text>
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