import React from "react";
import './ToDoList.css';

export function ToDoList(props: any){
    return(
        <section className="ToDoList">
            <ul>
                <li>{props.children}</li>
            </ul>
        </section>
    );
};