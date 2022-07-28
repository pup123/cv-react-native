import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Header from './components/Header';
import Info from './components/Info';
import Lang from './components/Lang';
import Skills from './components/Skills';
import Extraaskills from './components/Extraaskills';
import Btn from './components/Btn';

export default function App() {
  return (
    <ScrollView>
      <View>
        <Header />
        <Info />
        <Lang />
        <Skills />
        <Extraaskills />
        <Btn />
      </View>
    </ScrollView>

  );
}

