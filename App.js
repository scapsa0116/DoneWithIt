import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Button,} from 'react-native';

export default function App() {

  console.log(require('./assets/icon.png'))

  return (
    <SafeAreaView>
      <Button title="click me" color="orange"
      onPress={() => alert("button pressed")}/>

    </SafeAreaView>
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
