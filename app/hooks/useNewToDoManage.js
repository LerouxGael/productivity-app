import React from "react";

export default function useNewToDoManage(){

    const [title,titleChange]= React.useState("");
    const [description,descriptionChange]= React.useState("");

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

    function handleSubmit(){
        if(title.length === 0){
            return alert ("The task requires a title");
        }
    }

    return {fieldsTab, handleSubmit};
}