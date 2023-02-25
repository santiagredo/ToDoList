import React from 'react';
import './ToDoList.css';

interface ToDo {
    id: number,
    text: string,
    completed: boolean,
    onChange: (completed: boolean, id: number) => void,
    onDelete: (id: number) => void
};  

export function ToDoItem(props: ToDo){
    function onCheckboxChange(){
        props.onChange(props.completed ? !props.completed : props.completed, props.id);
        // console.log(localStorage.getItem('ToDos_v1'))
    };

    function deleted(){
        props.onDelete(props.id)
    };

    return(
            <label>
                <input type="checkbox" checked={props.completed} onChange={onCheckboxChange}/>
                <span className={`${props.completed && 'checked'}`}>
                    {props.text}
                </span>
                <button onClick={deleted}>
                    🗑️
                </button>
            </label>
    );
};