import { useState } from 'react';
import { ModalStyled } from './Modal.styled';
import { useSelector } from "react-redux";
import { getTodos } from '../redux/selectors'


const ModalToDo = ({id}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const todos = useSelector(getTodos);

    const todo = todos.find(todo => todo.id === id)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open</button>
            <ModalStyled
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(17, 17, 17, 0.6)',
                    },
                }}
            >
                <button type='button' onClick={closeModal}>
                    Close
                </button>
                <p>Title: {todo.title}</p>
                <p>Description: {todo.description}</p>
                {todo.complited && <p>Complited</p>}

            </ModalStyled>
        </div>
    );
};

export default ModalToDo;