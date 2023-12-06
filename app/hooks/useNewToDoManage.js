import React from "react";

import useAsyncStorageCRUD from "./useAsyncStorageCRUD";

export default function useNewToDoManage(){

    const [title,titleChange]= React.useState("");
    const [description,descriptionChange]= React.useState("");

    const {toDoCreate} =useAsyncStorageCRUD();

    const fieldsTab =[
        {
            value: title, 
            onChange: (e) => titleChange(e), 
            placeholder: "Name of the Task to do",
        },
        {
            value: description, 
            onChange: (e) => descriptionChange(e), 
            placeholder: "Description (optionnal)",
        },
    ];

    async function handleSubmit(){
        if(title.length === 0){
            return alert ("The task requires a title");
        }
        await toDoCreate({title, description});
        titleChange("");
        descriptionChange("");
    }

    return {fieldsTab, handleSubmit};
}