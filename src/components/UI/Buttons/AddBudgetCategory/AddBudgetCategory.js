import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  View,
  Alert
} from "react-native";

const addBudgetCategory = () => {
  return (
    <TouchableOpacity onPress={() => console.log("pressed")}>
      <Text style={styles.addButton}>Add new category</Text>
    </TouchableOpacity>
  );
};

const styles = {
  addButton: {
    color: "#FF9FB4",
    textAlign: "center",
    marginTop: 15
  }
};

export default addBudgetCategory;
