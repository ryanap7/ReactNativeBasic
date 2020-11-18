import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Cart from '../../assets/icons/Vector.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={Cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 12,
    color: '#777',
    fontWeight: '700',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Position;
