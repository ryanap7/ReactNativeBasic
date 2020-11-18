import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>
        Ryan <Aprianto />
      </Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
    </View>
  );
};

const Aprianto = () => {
  return <Text>Aprianto</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component Class</Text>;
  }
}

export default SampleComponent;
