import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ToDoCreate({navigation}){
  function handlePress(){
    navigation.navigate("Home");
  }
    return (
    <View style={styles.container}>
      <Text>ToDoCreate page</Text>
      <Button onPress={handlePress} title="back"/>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });