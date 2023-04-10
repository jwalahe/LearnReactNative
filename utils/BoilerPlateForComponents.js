import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.text1}>Image Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ImageScreen;
