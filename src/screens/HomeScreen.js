import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("ComponentScreen");
        }}
        style={styles.buttonStyle}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => {
          navigation.navigate("ListScreen");
        }}
      />
      <Button
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
        style={styles.buttonStyle}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("CounterScreen");
        }}
        style={styles.buttonStyle}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("ColorScreen");
        }}
        style={styles.buttonStyle}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("SquareScreen");
        }}
        style={styles.buttonStyle}
        title="Go to Square Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("NameScreen");
        }}
        style={styles.buttonStyle}
        title="Go to Name Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("BoxScreen");
        }}
        style={styles.buttonStyle}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 10,
  },
  buttonStyle: {
    paddingTop: 50,
  },
});

export default HomeScreen;
