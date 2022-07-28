import React, { useState } from "react";

import{View,StyleSheet,TextInput,KeyboardAvoidingView, Platform, TouchableOpacity,Image} from 'react-native'

export default  TaskinputField =(props)=>{
    const [task ,setTask] = useState();

    const handleAddTask =(value)=>{
        props.addTask(value)
        setTask(null)
    }
    return(
        <KeyboardAvoidingView behavior={Platform.OS==='android'?'padding':'height'} style={styles.Conatiner}>
            <TextInput style={styles.inputfield}value={task} onChangeText={text => setTask(text)} placeholder='Write a task' placeholderTextColor={'#fff'}/>
                <TouchableOpacity onPress={()=>handleAddTask(task)}>
                    <View style={styles.button}>
                        <Image source={require('../assets/up.png')}style={styles.image}></Image>

                    </View>

                </TouchableOpacity>

            

        </KeyboardAvoidingView>


        

    )
}
const styles=StyleSheet.create({
    Conatiner:{
        borderColor:'#fff',
        backgroundColor:'#355C7D',
        borderWidth:1,
        borderRadius:12,
        flexDirection:'row',
        paddingHorizontal:10,
        position:'absolute',
        bottom:20
 },
 inputfield:{
    color:'#fff',
    height:50,
    flex:1
 },
 button:{
    height:30,
    width:30,
    borderRadius:5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
 },
 image:{
    width:20,
    height:20,

 }

})