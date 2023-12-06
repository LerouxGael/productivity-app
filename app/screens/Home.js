import React from "react";
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import Button from "@components/UI/Button";

import useAsyncStorageCRUD from "@hooks/useAsyncStorageCRUD";

import ToDoCard from "@components/UI/ToDOCard";

import Title from "@components/UI/Title";

export default function Home({navigation}){
    const {toDoList, toDoDelete, toDoUpdate} = useAsyncStorageCRUD();

    function handlePress(){
      navigation.navigate("ToDoCreate");
    }
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>My To-do App</Title>
      {toDoList.map(({title, description, checked}, index)=> {
        function handleDelete(){
          toDoDelete(index);
        }
        function handleCheckedChange(){
          toDoUpdate(index, {title, description, checked : !checked});
        }
        return (
        <ToDoCard 
        key={index} 
        title={title} 
        description= {description} 
        checked={checked} 
        handleDelete={handleDelete}
        handleCheckedChange={handleCheckedChange}
        />          
       )
      })}
      <Button onPress={handlePress}>New task</Button>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding : 16
    },
  });