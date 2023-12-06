import React from "react";
import { StyleSheet, TextInput } from 'react-native';
/* import { TouchableOpacity } from "react-native-gesture-handler"; */

export default function Input({placeholder, value, onChange}){

    return (
    <TextInput 
    placeholder={placeholder} 
    style={styles.container} 
    value={value} 
    onChangeText={(e)=> onChange(e)}
    ></TextInput>
    );
}


const styles = StyleSheet.create({
    container: {
        width:"100%",
        paddingTop: 19,
        paddingBottom: 19,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(60, 60, 67, 0.3);",
        fontSize:17,
        marginBottom:24,
    },

  });