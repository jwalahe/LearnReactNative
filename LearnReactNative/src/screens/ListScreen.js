import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const animeList = [
    { name: "Naruto" },
    { name: "HxH 2011" },
    { name: "Attack on Titan" },
    { name: "One Piece" },
    { name: "Monster" },
    { name: "Dragonball Z" },
    { name: "Steins Gate" },
    { name: "JoJo" },
    { name: "Haikyu" },
    { name: "Full Metal Alchemist Brotherhood" },
    { name: "Gintama" },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(anime) => anime.name}
        data={animeList}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 30,
    textAlign: "center",
  },
});

export default ListScreen;
