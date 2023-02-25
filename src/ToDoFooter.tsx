import React from 'react';
import './ToDoFooter.css';
import { CreateToDoButton } from './CreateToDoButton';

type Props = {
    onAddNewToDo: (newToDoValue: string) => void;
};

export function ToDoFooter({onAddNewToDo}: Props){
    return(
        <footer className='ToDoFooter'>
            <CreateToDoButton onAddNewToDo={onAddNewToDo}/>
        </footer>
    );
};