import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const PasswordScreen = () => {
  const checkLength = (value) => {
    return value.length < 5 ? (
      <Text style={styles.text}>Password must be longer than 5 characters</Text>
    ) : null;
  };
  const [Password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={Password}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />
      {checkLength(Password)}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default PasswordScreen;
