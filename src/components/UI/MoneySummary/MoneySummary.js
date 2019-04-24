import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MoneySummary = () => (
  <View>
    <Text style={styles.moneySpent}>144.36€</Text>
  </View>
);

const styles = StyleSheet.create({
  moneySpent: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 72,
    fontWeight: "100",
    alignItems: "center"
  }
});

export default MoneySummary;
