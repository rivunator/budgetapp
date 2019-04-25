import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentSlider: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "5%"
  },
  contentItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    color: "#499BED"
  },
  sliderWrapper: {
    shadowColor: "#869AC7",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.9,
    shadowRadius: 9.11,
    elevation: 4
  }
});

const monthPicker = () => (
  <View>
    <ScrollView
      contentContainerStyle={styles.contentSlider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Text style={styles.contentItem}> January</Text>
      <Text style={styles.contentItem}> February</Text>
      <Text style={styles.contentItem}> March</Text>
      <Text style={styles.contentItem}> April</Text>
      <Text style={styles.contentItem}> May</Text>
      <Text style={styles.contentItem}> June</Text>
    </ScrollView>
  </View>
);

export default monthPicker;
