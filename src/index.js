import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#7159c1'/>
      <View style={style.container}>
        <Text style={style.title}>Hello GoStack!</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
	container:{
		backgroundColor: '#7159c1',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: "bold",
  },
})