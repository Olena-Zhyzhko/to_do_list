import React from 'react'
import { 
    useSelector } from "react-redux";
    import { getTodos } from '../redux/selectors'
import ModalToDo from './Modal'

export const ToDoList = () => {
const todos = useSelector(getTodos);

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
                            {complited ?
                                <input type='checkbox' checked readOnly></input> :
                                <input type='checkbox'></input>
                            }
                        </form>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}