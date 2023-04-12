import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const VALUE_INCREMENT = 1;

const changeValue = (state, action) => {
  return { ...state, value: state.value + action.payload };
};

const CounterScreen = () => {
  // todo: fix this
  // We need a way to update the state of the counter

  const [state, dispatch] = useReducer(changeValue, { value: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: VALUE_INCREMENT })}
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "increase", payload: -1 * VALUE_INCREMENT })
        }
      />
      <Text style={styles.text}>Current Count: {state.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default CounterScreen;
