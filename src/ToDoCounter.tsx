import React from "react";
import './ToDoCounter.css';


export function ToDoCounter({total, completed}: any):JSX.Element{
    return (
        <div className="ToDoCounter">
            <h2>
                To Do List
            </h2>
            <h3>
                {completed}/{total}
            </h3>
        </div>
    );
};