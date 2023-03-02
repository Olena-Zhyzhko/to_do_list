import React from 'react'
import { useDispatch,
    useSelector } from "react-redux";
    import { getTodos } from '../redux/selectors'
import ModalToDo from './Modal'
import {isComplited} from '../redux/todoSlice'


export const ToDoList = () => {
const todos = useSelector(getTodos);
const dispatch = useDispatch();

    return (
        <table>
            <thead>
                <tr >
                    <th>Порядковий номер </th>
                    <th>Заголовок</th>
                    <th>Опис</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(({ id, title, description, complited }) => (
                <tr key={id}>
                    <td>{id} <ModalToDo id={id}/></td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>
                        <form>
                            <input type='checkbox' onChange={()=>{dispatch(isComplited(id))}} checked={complited}/>
                        </form>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}