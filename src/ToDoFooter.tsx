import './ToDoFooter.css';
// import { CreateToDoButton } from './CreateToDoButton';

// type Props = {
//     onAddNewToDo: (newToDoValue: string) => void;
// };

// export function ToDoFooter({onAddNewToDo}: Props){
//     return(
//         <footer className='ToDoFooter'>
//             <CreateToDoButton onAddNewToDo={onAddNewToDo}/>
//         </footer>
//     );
// };

export function ToDoFooter({children}: any){
    return(
        <footer className='ToDoFooter'>
            {children}
        </footer>
    );
};