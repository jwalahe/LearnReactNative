import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

// This is a reducer function that takes in the current state and an action object and returns a new state object.
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}

function ListScreen() {
  // useReducer takes in a reducer function and an initial state object and returns a state object and a dispatch function.
  const [state, dispatch] = useReducer(listReducer, { items: [] });

  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", payload: "New item" });
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <View>
      <Button title="Add item" onPress={handleAddItem} />
      {state.items.map((item) => (
        <View key={item}>
          <Text>{item}</Text>
          <Button title="Remove" onPress={() => handleRemoveItem(item)} />
        </View>
      ))}
    </View>
  );
}
