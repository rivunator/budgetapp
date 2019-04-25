import React from "react";
import { View, StyleSheet } from "react-native";
import BudgetCategoryItem from "../BudgetCategoryItem/BudgetCategoryItem";

const BudgetCategory = () => (
  <React.Fragment>
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
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

export default BudgetCategory;
