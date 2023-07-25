import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View>
      <Text style={loginStyle.title}>Hola mundo!</Text>
    </View>
  );
}

export default App;

const loginStyle = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
});
