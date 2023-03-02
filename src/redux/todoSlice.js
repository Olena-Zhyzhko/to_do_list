import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const todosInitialState = {todos: [{id: '1', title: 'make upload', description: 'jnsvdljdfv dvjkbsdfvjbs dfvjb', complited: true}],};

const todosSlice = createSlice({
    name: 'todos',
    initialState: todosInitialState,
    reducers: {
        addTodos: {
            reducer(state, action) {
                state.todos.push(action.payload);
            },
            prepare(title, description, id) {
                return {
                    payload: {
                        title,
                        description,
                        id,
                        complited: false,
                    }
                }
            }
        },
        isComplited: {
            reducer(state, action) {
                console.log(action)
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                      if (todo.id !== action.payload) {
                        return todo;
                      }
                      return {
                        ...todo,
                        complited: !todo.complited,
                      };
                    }),
                  };
            }
        },
        removeTodo(state, action) {
            // const removedTodos = state.todos.filter(todo => todo.id !== action.payload);
            return {...state, 
                todos: state.todos.filter(todo => todo.id !== action.payload),
            }
        },
    
        }
})

export const { addTodos, isComplited, removeTodo } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;

const persistConfig = {
  key: 'root',
  storage,
}
 
export const todosReducer = persistReducer(persistConfig, todoReducer);
