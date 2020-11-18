import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Envelope from '../../assets/illustrations/envelope.svg';

const SVG = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>SVG</Text>
      <Envelope width={244} height={125} />
    </View>
  );
};

export default SVG;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
