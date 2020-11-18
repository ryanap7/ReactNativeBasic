import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Add" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Add"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const State = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Dinamis dengan State</Text>
      <Counter />
      <CounterClass />
    </View>
  );
};

export default State;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
