import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "My Name is Jwala Kompalli";
  const nameJSX = <Text style={styles.text}>{name}</Text>;
  return (
    <View>
      <Text style={styles.text1}>Getting Started with React Native!</Text>
      {nameJSX}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  text1: {
    fontSize: 45,
  },
});

export default ComponentScreen;
