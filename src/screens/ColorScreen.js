import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { AsyncStorage } from "react-native";
// AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app.
// It should be used instead of LocalStorage.

const ColorScreen = () => {
  useEffect(() => {
    loadColors();
  }, []);

  const addColor = () => {
    const newColors = [...colors, randomRgb()];
    setColors(newColors);
    AsyncStorage.setItem("colors", JSON.stringify(newColors));
  };
  const loadColors = async () => {
    const savedColors = await AsyncStorage.getItem("colors");
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
  };

  const clearColors = async () => {
    await AsyncStorage.removeItem("colors");
    setColors([]);
  };

  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          addColor();
        }}
      />
      <Button
        title="Clear Colors"
        onPress={() => {
          clearColors();
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ColorScreen;
