import React from "react";
import { StyleSheet, Text, View  } from 'react-native';
/* import { TouchableOpacity } from "react-native-gesture-handler"; */

export default function Title({children}){

    return (
        <Text style={styles.title}>{children}</Text>
    );
}


const styles = StyleSheet.create({

    title:{
        fontSize:32,
        fontWeight : "600",
        marginBottom: 42
    }
  });