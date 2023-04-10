import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  //   console.log(props);
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.scoreStyle}>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
  scoreStyle: {
    color: "red",
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default ImageDetail;
