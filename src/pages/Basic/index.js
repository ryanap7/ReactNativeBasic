import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Basic = () => {
  // Tipe Data Primitive
  const name = 'Ryan'; // String
  let age = 22; // int
  const isMan = true; // Bool

  //   Tipe Data Complex
  const animal = {
    name: 'Miaw',
    jenis: 'Kucing',
    age: 2,
    isLocal: true,
    color: 'yellow',
    parent: {
      jantan: 'Kaisar',
      betina: 'Quinn',
    },
  }; // Object

  const sayHello = (nama, usia) => {
    return console.log(`Hello ${nama}, usia anda ${usia}`);
  }; // Func

  sayHello('Ryan', 22);

  const namaOrang = ['A', 'B']; //Array

  //   if (animal.name === 'Miaw') {
  //     console.log('Hallo Miaw');
  //   } else {
  //     console.log('Hewan Siapa ini?');
  //   }

  const sapaHewan = (objectHewan) => {
    return objectHewan.name === 'Miaw' ? 'Hallo Miaw' : 'Hewan Siapa ini?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Basic</Text>
      <Text>{sapaHewan(animal)}</Text>
      <Text>{namaOrang[0]}</Text>
      {/* Looping */}
      {namaOrang.map((x) => (
        <Text>{x}</Text>
      ))}
    </View>
  );
};

export default Basic;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
