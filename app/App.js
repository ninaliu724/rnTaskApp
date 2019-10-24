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
import {data} from './mockData/mockData';
import {getTasks} from './services/TaskService';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor() {
    super();
    getTasks()
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({data: jsonResponse});
      })
      .catch(error => {
        console.log(`Error while fetching tasks`);
      });
  }
  state = {data: undefined};

  render() {
    if (!this.state.data) {
      return (
        <View style={styles.appContainer}>
          <Text>No items in list</Text>
        </View>
      );
    }
    return (
      <View style={styles.appContainer}>
        <FlatList data={this.state.data.tasks} renderItem={({item}) => <TaskItem task={item}/>}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    flex: 1
  }
});

export default App;
