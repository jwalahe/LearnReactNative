import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Naruto"
        imageSource={require("../../assets/Madara_200x133.png")}
        imageScore="10"
      />
      <ImageDetail
        title="Bleach"
        imageSource={require("../../assets/Byakuya_200x133.jpg")}
        imageScore="10"
      />
      <ImageDetail
        title="Attack on Titan"
        imageSource={require("../../assets/Eren_Jeager_200x133.jpg")}
        imageScore="10"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
