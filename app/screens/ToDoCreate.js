import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Input from "@components/UI/Input";
import Button from "@components/UI/Button";

import useNewToDoManage from "@hooks/useNewToDoManage";

import Title from "@components/UI/Title";


export default function ToDoCreate({navigation}){
  const {fieldsTab, handleSubmit} = useNewToDoManage();

  function handlePress(){
    navigation.navigate("Home");
  }
    return (
    <View style={styles.container}>
      <Title>Add a new Task</Title>
      {fieldsTab.map(({value, onChange, placeholder}) => {
        return <Input key={placeholder} placeholder={placeholder} value={value} onChange= {onChange} />
      })}
      <Button onPress={handleSubmit} title="back">+ add task to list</Button>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f3e9',
      alignItems: 'center',
      justifyContent: 'center',
      padding : 16,

    },
  });