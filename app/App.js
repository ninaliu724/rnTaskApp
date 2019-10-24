/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import TaskItem from './components/TaskItem';
import {data} from './mockData/mockData';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const tasks = data.tasks;

const App: () => React$Node = () => {
  return (
    <View style={styles.appContainer} >
    <FlatList data={tasks} renderItem={({item}) => <TaskItem task={item}/>}/>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    flex: 1
  }
});

export default App;
