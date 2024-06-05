import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native';

import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider}
from 'firebase/auth';
  
const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const validateInput = () => {
        const emailRegex = /\S+@\S+\.\S+/;

        if (!emailRegex.test(email)) {
            setError('Por favor, introduce un correo electrónico válido.');
            return false;
        }

        if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres.');
            return false;
        }

        return true;
    }

    const login = async (email: string, password: string) => {
        try {
            console.log(email, password);
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate("Home")
        } catch (error) {
            // Aquí puedes establecer el estado de un mensaje de error en tu componente,
            // o mostrar un mensaje de error de alguna otra manera.
            setError('El correo o la contraseña son incorrectos.');
        }
    }

    const handleLoginOrRegister = () => {
        if (validateInput()) {
            // Aquí va el código que se ejecutará cuando el usuario intente iniciar sesión o registrarse
            login(email, password);
        }
    }

    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <LinearGradient
                // Button Linear Gradient
                colors={['rgba(2,0,36,1)', 'rgba(104,5,186,1) 40%', 'rgba(37,3,57,1) 100%']}
                style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.main} >
                    <View style={styles.header}>
                        <Text className=' text-5xl font-black text-white mt-40' >
                            SecureChat
                        </Text>
                    </View>
                    <View style={styles.logincont}>
                        <Text className=' text-white text-4xl font-bold mb-4 sha'>Iniciar Sesión</Text>
                        <View>
                            <Text style={styles.label} className=' text-2xl font-medium mb-0'>Correo</Text>
                            <TextInput style={styles.input} keyboardType='email-address' value={email} onChangeText={(text) => setEmail(text)}   />
                        </View>
                        <View>
                            <Text style={styles.label} className=' text-white text-4xl font-bold mb-4'>Contraseña</Text>
                            <TextInput style={styles.input} secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}  />
                        </View>
                        {error && <Text style={{color: 'red'}} className=' pt-3 text-lg text-center'>{error}</Text>}
                        <TouchableOpacity className=' bg-violet-700 w-40 flex justify-center items-center rounded-lg mt-4' onPress={handleLoginOrRegister} >
                            <Text style={styles.label} className=' text-white text-4xl font-bold mb-4'>Iniciar Sesión</Text>
                        </TouchableOpacity>

                        <View className=' mt-6 font-bold items-center'>
                            <Text className=' text-white'>Otros Metodos</Text>
                            <TouchableOpacity className=' bg-yellow-500 flex flex-row justify-around items-center rounded-lg mt-4 w-56 f' >
                                <FontAwesome name="google" size={24} color="white" className=' mr-4' />
                                <Text style={styles.label} className=' text-white text-4xl font-bold mb-4'>Iniciar con Google</Text>
                            </TouchableOpacity>
                        </View>

                        <View className=' flex flex-row mt-14'>
                            <Text className=' text-white'>Aun no tienes cuenta:  </Text>
                            <TouchableOpacity id='cambiarRegistro' onPress={() => navigation.navigate("Register")} >
                                <Text className=' text-violet-700'>Registrate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(2,0,36)',
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBlockColor: 'white',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'white',
    },
    logincont: {
        flex: 1,
        backgroundColor: 'rgba(2,0,36,1)',
        width: '100%',
        marginTop: -200,
        padding: 20,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30, // Ajusta este valor según tus necesidades
        borderTopRightRadius: 30, // Ajusta este valor según tus necesidades
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: -5, // Ajusta este valor para cambiar la dirección de la sombra
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        color: 'white',
        fontSize: 16,
        alignItems: 'center',
        marginBottom: 0,
    },
    input: {
        height: 50,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginTop: 0,
        color: 'black',
        fontWeight: 'bold',
        width: 350,
        borderRadius: 10,
        marginBottom: 5,
        borderBlockColor: 'white',
        borderStartWidth: 2,
        borderEndWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    Registercont:{
        flex: 1,
        backgroundColor: 'rgba(2,0,36,1)',
        width: '100%',
        marginTop: -200,
        padding: 20,
        display: 'none',
        alignContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30, // Ajusta este valor según tus necesidades
        borderTopRightRadius: 30, // Ajusta este valor según tus necesidades
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: -5, // Ajusta este valor para cambiar la dirección de la sombra
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default LoginPage;