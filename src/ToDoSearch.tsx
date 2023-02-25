import React from "react";
import './ToDoSearch.css';

interface ToDoSearchProps {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
};

export function ToDoSearch({searchValue, setSearchValue}:ToDoSearchProps ):JSX.Element{
    function onSearchValueChange(event: React.ChangeEvent<HTMLInputElement>){
        // console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return(
        <input 
            type="search" 
            placeholder="Search" 
            className="ToDoSearch" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
};