import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('./img/1.png')} style={styles.image} />
        <Text style={styles.paragraph}>Fisioterapia</Text>
        <Text style={styles.power}>Power by LADS</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'flex',
    color: '#FFFFFF',
    marginTop: -100,
  },
  power: {
    margin: 24,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 550,
    position: 'absolute',
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 0,
    marginTop: 0,
    position: 'center',
  },
});