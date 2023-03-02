import { useState } from "react";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from '../redux/selectors'
import { addTodos } from "../redux/todoSlice";
import {Input} from './ToDoForm.styled'


export const ToDoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const todos = useSelector(getTodos);

    const titleId = nanoid();
    const descriptionId = nanoid();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'title':
                setTitle(value);
               break;
        
             case 'description':
                setDescription(value);
               break;
                
             default:
               return;
            };
    };

      const handleSubmit = (e) => {
            e.preventDefault();

            const id = todos.length + 1;
            dispatch(addTodos(title, description, id ))
            setTitle('')
            setDescription('')
        
      }
      return (
              <form onSubmit={handleSubmit}>
                  <lable htmlFor={titleId}>Title</lable>
                  <Input
                    id={titleId}
                    type="text"
                    name="title"
                    min='1'
                    title="This field is empty"
                      required
                    value={title}
                    onChange={handleChange}  
                  />
                  <lable htmlFor={descriptionId}>Description</lable>
                  <input
                      id={descriptionId}
                      type="text"
                      name="description"
                      value={description}
                      onChange={handleChange}
                  />
                  <button type="submit">Create</button>
              </form>  )
}
