import './App.css';
import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch'; 
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoFooter } from './ToDoFooter';

type ToDoType = {
  id: number,
  text: string,
  completed: boolean
};

export let ToDos: ToDoType[] = [
  {
    id: 1,
    text: 'Check source code at: https://github.com/santiagredo/ToDoList',
    completed: false
  },
  {
    id: 2,
    text: "Eat some chicken sweat",
    completed: false
  },
  {
    id: 3,
    text: 'React course from Platzi',
    completed: false
  }
];


// localStorage.clear()

function useLocalStorage(itemName: string, initialValue: ToDoType[]){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem)
  };

  const [Item, setItem] = React.useState(parsedItem);

  function saveItem(newItem: ToDoType[]){
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    Item,
    saveItem
  ];
}


export function App(){
  const [ToDo, saveToDos] = useLocalStorage('ToDos_v1', ToDos);
  const [searchValue, setSearchValue] = React.useState('');

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const completedToDos = ToDo ? ToDo.filter((ele: ToDoType) => ele.completed).length : 0;
  const totalToDos = ToDo.length;

  let filteredToDos = searchValue.length < 3 ? ToDo : 
    ToDo.filter((ele: ToDoType) => ele.text.toLowerCase().includes(searchValue.toLowerCase()));


  function doneToDos(completed: boolean, id: number){
    const index = ToDo.findIndex((ele: ToDoType) => ele.id === id);

    const newToDos = [...ToDo];
    newToDos[index].completed = !newToDos[index].completed;;
    saveToDos(newToDos);
  };

  function deleteToDos(id: number){
    saveToDos(ToDo.filter((ele: ToDoType) => ele.id !== id));
  };

  function handleAddNewToDo(newToDoValue: string) {
    
    const newToDo: ToDoType = {
      id: ToDo.length + 1,
      text: newToDoValue,
      completed: false,
    };
    saveToDos([...ToDo, newToDo]);
  };


  React.useEffect(() => {
    setLoading(true);
    const localStorageToDos = localStorage.getItem('ToDos_v1');
    try{
      if (localStorageToDos) {
        const parsedToDos = JSON.parse(localStorageToDos);
        saveToDos(parsedToDos);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }catch{
      setLoading(false);
      setError(true);
    }
  }, []);



  return (
    <React.Fragment>
      <div className='container'>
        <ToDoCounter
          total={totalToDos}
          completed={completedToDos}
        />
        
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        
        <ToDoList>
          {loading && <p>Loading, please wait...</p>}
          {error && <p>There was an error, please try again...</p>}
          {(!loading && !filteredToDos.length && !searchValue ) && <p>Create your first To Do!</p>}

          {filteredToDos.map((todo: ToDoType) => (
            <ToDoItem 
              id={todo.id}
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onChange={(completed) => doneToDos(completed, todo.id)}
              onDelete={() => deleteToDos(todo.id)}
              />
          ))}
        </ToDoList>

        <ToDoFooter onAddNewToDo={handleAddNewToDo}/>
      </div>
    </React.Fragment>
  );
}

export default App;
