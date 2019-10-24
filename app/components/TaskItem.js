import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
class TaskItem extends Component {
    render() {
        const task = this.props.task;
        const single = task.assignees.length == 1 && task.assignees[0].isUser;
        const assignees = task.assignees.map((assignee) => assignee.displayName).join(", ");
        const receivedTime = moment(task.assignedTime).fromNow();
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
                        <Icon name="arrow-forward" size={15}/>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>{assignees}</Text>
                    </View>
                </View>

                <View style={styles.starDateContainer}>
                    <Icon name="star-border" size={27} color="grey" />
                    <Text style={{ fontSize: 10 }}>{receivedTime}</Text>
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
        borderWidth: 0.25,
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
        marginTop: 15,
        flex: 1,
        alignItems: "flex-end"
    },
    assigneesContainer: {
        flexDirection: "row",
        marginTop: 5
    }
})
export default TaskItem