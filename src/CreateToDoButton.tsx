import React, { FormEvent} from 'react';
import './Modal.css';
import './CreateToDoButton.css';
import { Modal } from './Modal';


type Props = {
    onAddNewToDo: (newToDoValue: string) => void;
};


export function CreateToDoButton({onAddNewToDo}: Props){
    const [openModal, setOpenModal] = React.useState(false);

    const [newToDoValue, setNewToDoValue] = React.useState('');

    function handleOpenModal(){setOpenModal(true)};

    function handleCloseModal(){
        setOpenModal(false);
        const root = document.getElementById('root');
        if(root){root.style.opacity = '100%';}
    };

    function handleToDoChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        setNewToDoValue(event.target.value);
        console.log(newToDoValue)
    };

    function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(newToDoValue);
        onAddNewToDo(newToDoValue)
        handleCloseModal();
    };
    
    return(
        <div className='CreateToDoButton'>
            <button onClick={handleOpenModal}>
                Create
            </button>
            {openModal && (
                <Modal open={openModal} onClose={handleCloseModal}>
                    {/* <div className='backgroundContainer'>
                    </div> */}
                    <div className='modalContainer'>
                        <button onClick={handleCloseModal}>Close</button>
                        <h2>Create New To-Do</h2>
                        <form onSubmit={onSubmit}>
                            <textarea onChange={handleToDoChange} placeholder="Sing: I'm a shooting star leaping through the sky like a tiger, Defying the laws of gravity, I'm a racing car passing by like Lady Godiva, I'm gonna go, go, go, there's no stopping me, I'm burnin' through the sky, yeah, 200 degrees, that's why they call me Mister Fahrenheit, I'm travelling at the speed of light, I wanna make a supersonic man out of you..."></textarea>
                            <button type="submit">Create</button>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
};