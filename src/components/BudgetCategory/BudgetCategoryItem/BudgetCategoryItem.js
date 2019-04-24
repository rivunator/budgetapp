import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { directive } from "@babel/types";

const BudgetCategoryItem = () => (
  <View style={styles.item}>
    <Text>Icon</Text>
    <View style={styles.categoryAmmount}>
      <Text> Housing </Text>
      <Text> 330€ </Text>
    </View>
  </View>
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
