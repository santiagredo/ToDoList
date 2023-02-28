import ReactDOM from 'react-dom';

export function Modal(props: any){
    window.scrollTo({
        top: 0,
    });

    const root = document.getElementById('root');
    if(root){root.style.opacity = '10%';}

    const modalRoot = document.getElementById('modal');
    return !modalRoot ? null : ReactDOM.createPortal(
        props.children,
        modalRoot
    );
};