import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid} from 'uuid';


const initialState = {
    list: [],
    currentTab: 'all'
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                content: action.payload,
                done: false,
                id: uuid()
            }
            state.list.push(todo);
        },
        deleteTodo: (state, action) => {
            const index = state.list.findIndex( e => {
                return e.id === action.payload;
            });

            state.list.splice(index, 1);
        },
        toggleTodo: (state, action) => {
            state.list.map(e => {
                if(e.id === action.payload) {
                    return e.done = !e.done;
                }
              });
        },
        showTab: (state, action) => {
            state.currentTab = action.payload;
        },
        clearCompletedTodos: (state, action) => {
            const activesTodos = state.list.filter((e) => {
                return !e.done;
            });

            state.list = activesTodos;

        },
    }
});

export const listSelectorAll = (state) => { 
    if(state.todos.currentTab == 'all') {
        return state.todos.list
    } if (state.todos.currentTab == 'active') {
        return state.todos.list.filter(e => !e.done)
    } else {
        return state.todos.list.filter(e => e.done)
    }
};
export const showTabSelector = (state) => {return state.todos.currentTab};
export const counterTodos = (state) => {return state.todos.list.filter(e => !e.done).length};


export const { addTodo, deleteTodo, toggleTodo, showTab,clearCompletedTodos,  } = todosSlice.actions;

export default todosSlice.reducer;
