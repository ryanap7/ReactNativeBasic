import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const StylingComponent = () => {
  return (
    <View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={require('../../assets/images/image.jpg')}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{marginTop: 16, fontWeight: 'bold', fontSize: 14}}>
          New Macbook Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#F2994A',
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
