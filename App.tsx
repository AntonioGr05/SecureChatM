import React from 'react';
import Navigation from './app/navigation';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './app/pages/LoginPage';


export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
