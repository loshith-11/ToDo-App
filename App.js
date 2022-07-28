import React, { useState } from "react";

import{ View, StyleSheet,Text,ScrollView,Keyboard}from 'react-native'


import TaskinputField from "./Todo/TaskinputFeild";
import TaskItem from "./Todo/TaskItem";

export default function App(){
    const [tasks,setTasks]=useState([])

    const addTask =(task) =>{
        if(task == null) return
        setTasks([... tasks,task])
        Keyboard.dismiss()
    }

    const deleteTask =(deleteIndex) => {
        setTasks(tasks.filter((value,index)=>index !=deleteIndex))
    }
   

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>ToDo List</Text>
            <ScrollView style={styles.scrollVeiw}>{
              tasks.map((task,index)=>{
                return(
                    <View key={index} style={styles.taskContainer}>
                        <TaskItem index={index+1} task={task} deleteTask={()=> deleteTask(index)}/>

                    </View>
                )
              })  
            }


            </ScrollView>
            <TaskinputField addTask={addTask}/>

        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6C5B7B'
    },
    txt:{
        fontSize:25,
        fontWeight:'700',
        color:'#fff',
        padding:35
    },
    scrollVeiw:{
        marginBottom:70
    },
    taskContainer:{
        marginTop:20
    }
})