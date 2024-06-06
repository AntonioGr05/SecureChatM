import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../firebase'
import { User } from 'firebase/auth';
import { signOut} from 'firebase/auth';
import { useEffect, useState } from 'react';

const PerfilPage = () => {

    const navigation = useNavigation();

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const logout = async () => {
        const response = await signOut(auth)
        navigation.navigate("Login")
        console.log(response);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
    });

        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerTop} onPress={() => {
                    navigation.navigate("Home") // Aquí va el código que se ejecutará cuando se presione la imagen
                }}>
                    <MaterialIcons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                <View style={styles.headerImage}>
                    <Image 
                        source={{uri: currentUser?.photoURL || 'https://randomuser.me/api/portraits/lego/6.jpg'}}
                        style={styles.roundImage} 
                    />
                </View>
                <Text style={styles.username} className=' text-white text-2xl font-semibold'>
                    {currentUser?.displayName || currentUser?.email || 'Usuario desconocido'}
                </Text>
            </View>
            <View style={styles.textDescripcion}>
                <Text className='text-white ml-2 text-xl font-semibold'>Descripción</Text>
            </View>
            <View style={styles.descripcion}>
                <Text className='text-white text-lg'>Hola me gustan los videojuegos</Text>
            </View>
            <View style={styles.textDescripcion}>
                <Text className='text-white ml-2 text-xl font-semibold'>Fotos Publicas</Text>
            </View>
            <View style={styles.publicImages}>
                <Image 
                    source={{uri: 'https://randomuser.me/api/portraits/lego/0.jpg'}} 
                    style={styles.ImagenPublica} 
                />
                <Image 
                    source={{uri: 'https://randomuser.me/api/portraits/lego/2.jpg'}} 
                    style={styles.ImagenPublica} 
                />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={() => {
                // Aquí va el código que se ejecutará cuando se presione el botón de logout
            }}>
                <Text className='text-xl font-semibold' style={styles.logoutText} onPress={logout}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'black',
    },
    publicImages:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '95%',
        marginTop: 20,
    },
    ImagenPublica:{
        width: 200,
        height: 260,
        borderRadius: 20,
    },
    username:{
        top: -40,
    },
    textDescripcion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '95%',
        marginTop: 20,
    },
    descripcion:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: 200,
        marginTop: 10,
        backgroundColor: '#2E2E2E',
        borderRadius: 20,
        shadowColor: "white",
        shadowOffset: {
            width: 100,
            height: -10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 260,
        backgroundColor: '#2E2E2E',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        shadowColor: "white",
        shadowOffset: {
            width: 100,
            height: -10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerTop:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 100,
        top: -10,
        padding: 10,
    },
    headerImage:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 100,
        top: -50,
    },
    roundImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    logoutButton: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        width: 100,
        marginTop: 20,
        borderRadius: 10,
    },
    logoutText: {
        color: 'white',
    },
})

export default PerfilPage;
