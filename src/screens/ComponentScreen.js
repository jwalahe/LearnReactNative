import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CheckBox } from "@rneui/themed";

const ComponentScreen = () => {
  const [check1, setCheck1] = useState(false);
  const name = "My Name is Jwala Kompalli";
  const nameJSX = <Text style={styles.text}>{name}</Text>;
  return (
    <View>
      <Text style={styles.text1}>Getting Started with React Native!</Text>
      {nameJSX}
      <Text style={styles.text}>This is a checkbox</Text>
      <CheckBox
        center
        title="Click Here"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />
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
