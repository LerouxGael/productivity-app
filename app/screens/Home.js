import React from "react";
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Home({navigation}){
    function handlePress(){
      navigation.navigate("ToDoCreate");
    }
    return (
    <View style={styles.container}>
      <Text>Home page</Text>
      <Button onPress={handlePress} title="Go to Create page"/>
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