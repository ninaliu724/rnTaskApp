/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import TaskItem from './components/TaskItem';
import { getTasks } from './services/TaskService';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgressCircle from 'react-native-progress-circle';

class App extends Component {
  constructor() {
    super();
    getTasks()
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({ data: jsonResponse });
      })
      .catch(error => {
        console.log(`Error while fetching tasks`);
      });
  }
  state = { data: undefined };

  render() {
    if (!this.state.data) {
      return (
        <View style={{alignItems:"center", marginTop: 170}}>
          <ProgressCircle
            percent={90}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text style={{ fontSize: 18 }}>{'90%'}</Text>
          </ProgressCircle>
        </View>
      );
    }
    return (
      <View style={styles.appContainer}>
        <View style={styles.filterContainer}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="view-carousel" size={25} coloe="grey" style={{ marginLeft: 10, marginRight: 10 }} />
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>All Tasks</Text>
          </View>
          <Icon name="keyboard-arrow-down" size={20} style={{ marginRight: 10 }} />
        </View>
        <View style={styles.tasksContainer}>
          <FlatList data={this.state.data.tasks} renderItem={({ item }) => <TaskItem task={item} />} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    flex: 1
  },
  filterContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 0.5,
  },
  tasksContainer: {
    flex: 15
  }
});

export default App;
