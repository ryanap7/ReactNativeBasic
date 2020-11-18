import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Product from '../../components/Product';
import Cart from '../../components/Cart';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Communication</Text>
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
      <Cart quantity={totalProduct} />
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
