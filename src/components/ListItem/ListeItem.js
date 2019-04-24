import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

class ListItem extends Component {
  state = {
    taskItem: "",
    tasks: []
  };

  taskNameChangedHandler = val => {
    this.setState({ taskItem: val });
  };

  taskSubmitHandler = () => {
    if (this.state.taskItem.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.concat(prevState.taskItem),
        taskItem: ""
      };
    });
  };

  render() {
    const taskList = this.state.tasks.map((item, i) => {
      return <Text key={i}> {item} </Text>;
    });
    return (
      <View style={styles.container}>
        <View style={styles.taskItem}>{taskList}</View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add new task"
            value={this.state.taskItem}
            onChangeText={this.taskNameChangedHandler}
            style={styles.input}
          />
          <Button
            title="Add"
            style={styles.button}
            onPress={this.taskSubmitHandler}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    justifyContent: "flex-end",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    //flex: 1,
  },
  taskItem: {
    backgroundColor: "#999",
    width: "100%",
    padding: 10,
    marginTop: 10,
    justifyContent: "space-between"
  },
  input: {
    width: "70%"
  },
  button: {
    width: "30%"
  }
});
export default ListItem;
