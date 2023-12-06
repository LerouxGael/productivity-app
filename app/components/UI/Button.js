import React from "react";
import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
/* import { TouchableOpacity } from "react-native-gesture-handler"; */

export default function Home({children, onPress}){

    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor : "#007AFF",
        borderRadius : 14,
        width : "100%",
        alignItems : "center",
        marginTop:32,
    },
    title:{
        color : "white",
        margin : 17,
        fontSize : 17,
        fontWeight : "600"
    }
  });