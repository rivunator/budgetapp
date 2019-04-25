import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { directive } from "@babel/types";

const BudgetCategoryItem = () => (
  <TouchableOpacity style={styles.item}>
    <Icon name="ios-add-circle" size={30} color="#900" />
    <View style={styles.categoryAmmount}>
      <Text> Housing </Text>
      <Text> 330€ </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    padding: 10,
    width: "40%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#869AC7",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.9,
    shadowRadius: 9.11,
    elevation: 4
  },
  categoryAmmount: {
    flex: 1,
    alignItems: "center"
  }
});

export default BudgetCategoryItem;
