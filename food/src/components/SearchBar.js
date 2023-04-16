import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput style={styles.textInput} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  backgroundStyle: {
    marginTop: 10,
    backgroundStyleColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
