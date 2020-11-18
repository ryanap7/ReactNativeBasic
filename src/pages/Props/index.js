import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.image}}
        style={{width: 50, height: 50, borderRadius: 25}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const Props = () => {
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        <Story title="React" image="http://placeimg.com/640/480/tech" />
        <Story title="Vue" image="http://placeimg.com/640/480/nature" />
        <Story title="Vue" image="http://placeimg.com/640/480/nature" />
        <Story title="Vue" image="http://placeimg.com/640/480/nature" />
        <Story title="Vue" image="http://placeimg.com/640/480/nature" />
        <Story title="Vue" image="http://placeimg.com/640/480/nature" />
        <Story title="Vue" image="http://placeimg.com/640/480/nature" />
        <Story title="PHP" image="http://placeimg.com/640/480/nature" />
        <Story title="Angular" image="http://placeimg.com/640/480/nature" />
      </View>
    </ScrollView>
  );
};

export default Props;

const styles = StyleSheet.create({});
