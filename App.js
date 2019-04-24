import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LandingPage from "./src/components/Containers/LandingPage/LandingPage";
export default class App extends Component {
  render() {
    return (
      <View>
        <LandingPage />
      </View>
    );
  }
}
