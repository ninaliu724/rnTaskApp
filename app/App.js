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
  FlatList,
  Image
} from 'react-native';
import TaskItem from './components/TaskItem';
import { getTasks } from './services/TaskService';
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
            <Image source={require('./images/view_carousel.png')} style={{ marginLeft: 10, marginRight: 10 }}></Image>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>All Tasks</Text>
          </View>
          <Image source={require('./images/arrow_down.png')} style={{ marginRight: 10 }}></Image>
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
