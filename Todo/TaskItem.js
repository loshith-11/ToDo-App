import React from "react";

import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native'




export default  TaskItem = (props)=>{
    return(
        <View style={StyleSheet.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index} >{props .index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props .task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <Image source={require('../assets/delete.png')} style={styles.image} ></Image>
                    

                    </TouchableOpacity>
            </View>

        </View>

    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
        backgroundColor:'#000'
    },
    indexContainer:{
        backgroundColor:'#355C7D',
        width:50,
        height:50,
        borderRadius:12,
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center'


    },
    index:{
        color:'#fff',
        fontSize:20

    },
    taskContainer:{
        backgroundColor:'#355C7D',
        borderRadius:12,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
         minHeight:50,
         marginLeft:80,
         marginTop:-50
    
    },
    task:{
        width:'90%',
        fontSize:16,
        color:'#fff'

    },
    image:{
        width:30,
        height:30,
        marginStart:255,
        marginVertical:-40

        
    }


})