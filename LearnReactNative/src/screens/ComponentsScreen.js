import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is a Component Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default ComponentScreen;
