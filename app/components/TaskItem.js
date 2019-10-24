import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { tasks } from "../mockData/mockTask";

class TaskItem extends Component {
    render() {
        const item = this.props.task;
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
        flexDirection: "row",
        borderRadius: 0.5,
        borderColor: "grey",
        borderWidth: 1,
        justifyContent: "space-around",
        padding: 10
    }
})
export default TaskItem