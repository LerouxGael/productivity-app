import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Input from "@components/UI/Input";
import Button from "@components/UI/Button";

import useNewToDoManage from "@hooks/useNewToDoManage";

export default function ToDoCreate({navigation}){
  const {fieldsTab, handleSubmit} = useNewToDoManage();

  function handlePress(){
    navigation.navigate("Home");
  }
    return (
    <View style={styles.container}>
      {fieldsTab.map(({value, onChange, placeholder}) => {
        return <Input key={placeholder} placeholder={placeholder} value={value} onChange= {onChange} />
      })}
      <Button onPress={handleSubmit} title="back">To-do Add</Button>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding : 16,
      backgroundColor: "rgba(0,0,0, 0.1)"
    },
  });