import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { useKeyboard } from '@react-native-community/hooks';
// screens
import Messages from "./pages/MesssagesPage";
import SettingsPage from "./pages/SettingsPage";
import StackPage from "./pages/StackPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PerfilPage from "./pages/PerfilPage";

const Tab = createBottomTabNavigator();
const homestacknav = createStackNavigator();
const stackperfil = createStackNavigator();
const stack = createStackNavigator();

function MyStackPerfil() {
    return (
        
        <stackperfil.Navigator
            initialRouteName="Perfil"
        >
            <stackperfil.Screen 
                name="Perfil" 
                component={PerfilPage}
                options={{
                    headerBackTitleVisible: false,
                    headerTitle: "Perfil",
                    headerShown: true
                }}
            />
            <stackperfil.Screen
                name="MessagesPerfil" 
                component={SettingsPage} 
                options={{
                    headerBackTitleVisible: false,
                    headerTitle: "Settings",
                    headerShown: true
                }}
            />
        </stackperfil.Navigator>
    );
}


function MyStack() {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.container}
        >
            <homestacknav.Navigator
                initialRouteName="MessagesPage"
            >
                <homestacknav.Screen 
                    name="MessagesPage" 
                    component={Messages}
                    options={{
                        headerBackTitleVisible: false,
                        headerTitle: "Messages",
                        headerShown: false
                    }}
                />
                <homestacknav.Screen 
                    name="Stack" 
                    component={StackPage} 
                    options={{
                        headerBackTitleVisible: false,
                        headerTitle: "Stack Page",
                    }}  
                />
            </homestacknav.Navigator>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(2,0,36,1)',
    },
})

function MyTabs() {
    const keyboard = useKeyboard();
    return (
        <Tab.Navigator 
            initialRouteName="Mensajes"
            screenOptions={{
                tabBarActiveTintColor: "purple",
                headerShadowVisible: false,
            }}
        >
        <Tab.Screen 
            name="Mensajes" 
            component={MyStack}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="message" size={30} color={color} />
                ),
                tabBarBadge: 3,
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="Settings" 
            component={SettingsPage} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="settings" size={30} color={color} />
                ),
                headerShown: false,
            }}
        />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    const keyboard = useKeyboard();

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.container}
        >
            <NavigationContainer>
                <stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}> 
                    <stack.Screen name="Login" component={LoginPage} />
                    <stack.Screen name="Register" component={RegisterPage} />
                    <stack.Screen name="Home" component={MyTabs} />
                    <stack.Screen name="Perfil" component={PerfilPage} />
                </stack.Navigator>
            </NavigationContainer>
        </KeyboardAvoidingView>
    );
}
