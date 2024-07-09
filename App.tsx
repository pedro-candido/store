import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';

import { PaperProvider } from 'react-native-paper';



export default function App() {
  return (
    <PaperProvider>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
