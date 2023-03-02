import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
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
                // const toDoToggle = state.todos.find(todo => todo.id === action.payload);
                // console.log(toDoToggle)
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
                // toDoToggle.complited = 
                // const toDoToggle = state.todos.filter(todo => {
                //     if(todo.id ===action.payload) {
                //         todo.complited = !todo.complited;
                //         return todo;
                //     }
                //     return todo;
                // });
                // console.log(toDoToggle)
                // return {...state, todos: toDoToggle,}
        //         const removedContacts = state.contacts.filter(contact => contact.id !== action.payload);
        // return {...state, 
        //     contacts: removedContacts,
        // }
            }
        }
        }
})

export const { addTodos, isComplited } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;

const persistConfig = {
  key: 'root',
  storage,
}
 
export const todosReducer = persistReducer(persistConfig, todoReducer);


// const contactsInitialState = {contacts: [],};

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.contacts.push(action.payload);
//           },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     removeContact(state, action) {
//         const removedContacts = state.contacts.filter(contact => contact.id !== action.payload);
//         return {...state, 
//             contacts: removedContacts,
//         }
//     },
//   },
// });

// // Експортуємо генератори екшенів та редюсер
// export const { addContact, removeContact } = contactsSlice.actions;
// export const contactReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// export const contactsReducer = persistReducer(persistConfig, contactReducer)
