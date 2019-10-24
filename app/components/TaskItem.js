import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { tasks } from "../mockData/mockTask";

class TaskItem extends Component {

    render() {
        const item = tasks[0];
        return (
            <View style={styles.taskContainer} >
                <Text>{item.displayName}</Text>
                <View>
                    <Text>{item.assignees[0].displayName}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    taskContainer: {
        
    }
})
export default TaskItem