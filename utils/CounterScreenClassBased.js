import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

class CounterScreenClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <View>
        <Button title="Increase" onPress={this.increaseCounter} />
        <Button title="Decrease" onPress={this.decreaseCounter} />
        <Text style={styles.text}>Current Count: {this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default CounterScreenClassBased;
