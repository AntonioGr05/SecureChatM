import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const SettingsPage = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerTop} onPress={() => {
                    navigation.navigate("MessagesPage") // Aquí va el código que se ejecutará cuando se presione la imagen
                }}>
                    <MaterialIcons name="arrow-back" size={30} color="white" />
                    <Text className='text-white text-xl font-semibold'> Ajustes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.main} >
                <Text style={styles.titleajuste} className='text-white text-2xl font-semibold'>Privacidad</Text>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Privacidad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Privacidad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Privacidad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Privacidad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.separador}>
                </View>
                <Text style={styles.titleajuste} className='text-white text-2xl font-semibold'>Seguridad</Text>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Seguridad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Seguridad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Seguridad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.ajuste}>
                    <Text className='ajusteText text-white text-lg' >Seguridad</Text>
                    <AntDesign name="right" size={24} color="white" />
                </View>
                <View style={styles.separador}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'black',
    },
    titleajuste: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        color: 'gray',
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBlockColor: 'white',
        padding: 20,
        width: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 80,
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
    ajuste: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50,
        paddingRight: 20,
        color: 'white',
        paddingLeft: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#2E2E2E',
        borderRadius: 10,
        shadowColor: "white",
        shadowOffset: {
            width: 100,
            height: -10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    separador: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 0,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
})

export default SettingsPage;
