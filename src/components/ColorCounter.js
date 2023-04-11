import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.text}> {color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default ColorCounter;
