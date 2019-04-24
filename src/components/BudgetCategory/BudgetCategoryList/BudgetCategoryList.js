import React from "react";
import { View, StyleSheet } from "react-native";
import BudgetCategoryItem from "../BudgetCategoryItem/BudgetCategoryItem";

const BudgetCategory = () => (
  <View style={styles.container}>
    <BudgetCategoryItem />
    <BudgetCategoryItem />
    <BudgetCategoryItem />
    <BudgetCategoryItem />
    <BudgetCategoryItem />
    <BudgetCategoryItem />
    <BudgetCategoryItem />
    <BudgetCategoryItem />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

export default BudgetCategory;
