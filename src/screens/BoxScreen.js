import React from "react";
import { Text, StyleSheet, View } from "react-native";
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const BoxScreen = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 3,
    height: 210,
  },
  text: {
    fontSize: 20,
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: randomRgb(),
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: randomRgb(),
    top: 100,
  },
  box3: {
    height: 100,
    width: 100,
    backgroundColor: randomRgb(),
  },
});

export default BoxScreen;
