import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { tasks } from "../mockData/mockTask";

class TaskItem extends Component {
    render() {
        const task = this.props.task;
        const single = task.assignees.length == 1 && task.assignees[0].isUser;
        const assignees = task.assignees.map((assignee) => assignee.displayName).join(", ");
        console.log(assignees);
        return (
            <View style={styles.taskContainer} >
                <View style={styles.iconContainer}>
                    {single ?
                        <Image style={styles.icon} source={require('../images/person_blue.png')} /> :
                        <Image style={styles.icon} source={require('../images/people_3_blue.png')} />
                    }
                </View>

                <View style={styles.nameContainer}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{task.displayName}</Text>
                    <View style={styles.assigneesContainer}
                    >
                        <Text  numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 11 }}>{assignees}</Text>
                    </View>
                </View>

                <View style={styles.starDateContainer}>
                    <Image></Image>
                    <Text>fesfewf</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        borderRadius: 0.5,
        borderTopColor: "#e0e0eb",
        borderTopWidth: 1,
        justifyContent: "space-around",
        padding: 10,
        flex: 1
    },
    iconContainer: {
        flex: 1
    },
    icon: {
        width: 50,
        height: 50
    },
    nameContainer: {
        flex: 4
    },
    starDateContainer: {
        flex: 1
    },
    assigneesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})
export default TaskItem