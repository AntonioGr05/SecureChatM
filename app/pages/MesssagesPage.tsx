import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from '../firebase'
import { User } from 'firebase/auth';
import { signOut} from 'firebase/auth';
import { useEffect, useState } from 'react';

const Messages = () => {

    const conversations = [
        {
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
          name: 'Usuario 1',
          lastMessage: 'Hola, ¿cómo estás?',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/1.jpg',
          name: 'Usuario 2',
          lastMessage: '¡Hola! Todo bien, ¿y tú?',
        },
        {
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
          name: 'Usuario 3',
          lastMessage: '¿Nos vemos mañana  va va ?',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
          name: 'Usuario 4',
          lastMessage: '¡Claro! Nos vemos mañanaaaaa.',
        },
        {
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
          name: 'Usuario 1',
          lastMessage: 'Hola, ¿cómo estás?',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/1.jpg',
          name: 'Usuario 2',
          lastMessage: '¡Hola! Todo bien, ¿y tú?',
        },
        {
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
          name: 'Usuario 3',
          lastMessage: '¿Nos vemos mañana  va va ?',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
          name: 'Usuario 4',
          lastMessage: '¡Claro! Nos vemos mañanaaaaa.',
        },
        {
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
          name: 'Usuario 1',
          lastMessage: 'Hola, ¿cómo estás?',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/1.jpg',
          name: 'Usuario 2',
          lastMessage: '¡Hola! Todo bien, ¿y tú?',
        },
        {
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
          name: 'Usuario 3',
          lastMessage: '¿Nos vemos mañana  va va ?',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
          name: 'Usuario 4',
          lastMessage: '¡Claro! Nos vemos mañanaaaaa.',
        },
        // Más conversaciones aquí...
      ];

    const stories = [
        'https://randomuser.me/api/portraits/men/3.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/women/3.jpg',
        'https://randomuser.me/api/portraits/men/4.jpg',
        // Más URLs de imágenes aquí...
    ];



    const navigation = useNavigation();

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const logout = async () => {
        const response = await signOut(auth)
        console.log(response);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
    });

        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.contianer}className=' mx-auto h-max'>
            <View style={styles.header}>
                <View style={styles.headerM} className=' h-36 px-4 flex justify-center flex-row'>
                    <View style={styles.ftcont} className='flex flex-row'>
                        <TouchableOpacity className=' mr-4' onPress={() => {
                            navigation.navigate("Perfil") // Aquí va el código que se ejecutará cuando se presione la imagen
                        }}>
                            <Image 
                                source={{uri: currentUser?.photoURL || 'https://randomuser.me/api/portraits/lego/6.jpg'}}
                                style={styles.roundImage} 
                            />
                        </TouchableOpacity>
                        <Text className=' text-2xl font-semibold text-white'>Chats</Text>
                    </View>
                    <View style={styles.settinsnav}>
                        <TouchableOpacity onPress={() => {
                            // Aquí va el código que se ejecutará cuando se presione el botón
                        }}>
                            <MaterialIcons name="logout" size={30} color="#c0c0c0" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer} className=' mx-auto'>
                    <TextInput 
                        style={styles.searchInput} 
                        className=' w-11/12 text-xl'
                        placeholder="Buscar mensajes" 
                    />
                    <MaterialIcons name="search" size={24} color="white" style={styles.searchIcon} />
                </View>
            </View>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.containerchats}
            >
            <View style={styles.SVHHis}>
                <ScrollView  horizontal={true}>
                    <View className='' style={styles.historias}>
                        {
                            stories.map((story, index) => (
                                <TouchableOpacity style={styles.hist} key={index} onPress={() => {
                                    // Aquí va el código que se ejecutará cuando se presione una historia
                                }}>
                                    <Image 
                                        source={{uri: story}} 
                                        style={styles.roundImagehist} 
                                    />
                                    <View style={styles.greenCircle} />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </View> 
            <Text className=' text-gray-400 text-xl ml-3 mb-3'>Nuevos</Text>
            <ScrollView style={styles.chats}>
                {
                    conversations.map((conversation, index) => (
                        <TouchableOpacity key={index} onPress={() => {
                            // Aquí va el código que se ejecutará cuando se presione una conversación
                        }}>
                            <View className='flex flex-row items-center justify-start mb-4' style={{width: '100%', height: 70, borderBottomColor: '#f0f0f0'}}>
                                <Image 
                                    source={{uri: conversation.image}} 
                                    style={{width: 70, height: 70, borderRadius: 50, marginHorizontal: 10}} 
                                />
                                <View className='flex flex-col'>
                                    <Text className='text-xl font-semibold text-white'>{conversation.name}</Text>
                                    <Text className='text-lg font-normal text-gray-400'>{conversation.lastMessage}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerchats : {
        flex: 1,
        width: '100%',
    },
    SVHHis: {
        width: '100%',
        height: 115,
    },
    historias: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    hist: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginHorizontal: 10,

    },
    roundImagehist: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 3,
    },
    greenCircle: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#00C220',
        position: 'absolute',
        bottom: -5,
        right: -8,
    },
    chats: {
    },
    contianer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'black',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#2E2E2E',
        height: 170,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerM: {
        height: 100,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    roundImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    ftcont: {
        justifyContent: 'flex-start',
        borderColor: 'white',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 60,
    },
    settinsnav: {
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 60,
        marginRight: -200,
    },
    searchContainer: {
        flexDirection: 'row',
        width: '95%',
        alignItems: 'center',
        backgroundColor: '#545454',
        borderRadius: 25,
        padding: 10,
        height: 45,
        marginTop: 0,
        color: 'white',
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        paddingLeft: 35,
        color: 'white' // Añade un padding a la izquierda para evitar que el texto se superponga con el icono
    },
    searchIcon: {
        position: 'absolute',
        left: 15, // Ajusta este valor según sea necesario para posicionar el icono correctamente
    },
})

export default Messages;
