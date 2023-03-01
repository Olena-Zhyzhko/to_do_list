import React from "react";
import {ToDoList} from 'components/ToDoList';
import {ToDoForm} from 'components/ToDoForm';

export const App = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <ToDoForm/>
      <ToDoList/>
    </div>
  )
}
