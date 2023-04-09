import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const title = "List Screen";
  const items = [
    {
      name: "Jwala",
      age: 26,
    },
    {
      name: "Seethal",
      age: 26,
    },
    {
      name: "Chandra",
      age: 26,
    },
  ];

  return (
    <View>
      <FlatList
        style={styles.text}
        keyExtractor={(item) => item.name}
        data={items}
        renderItem={({ item }) => (
          <Text>
            {item.name} - Age {item.age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 20,
  },
  text1: {
    fontSize: 45,
  },
});

export default ListScreen;
