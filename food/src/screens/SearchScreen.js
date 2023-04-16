import React from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.background}>
      <SearchBar />
      <Text style={styles.text1}>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default SearchScreen;
