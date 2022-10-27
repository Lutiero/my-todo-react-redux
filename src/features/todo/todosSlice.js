import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid} from 'uuid';


const initialState = {
    list: [
        {
            content: 'fazer compra',
            done: false,
            id: '1'
        },
    ],
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

export const listSelectorAll = (state) => {return state.todos.list};
export const listSelectorActives = (state) => {return state.todos.list.filter(e => !e.done)};
export const listSelectorCompleteds = (state) => {return state.todos.list.filter(e => e.done)};
export const showTabSelector = (state) => {return state.todos.currentTab};
export const counterTodos = (state) => {
    console.log('################ CounterTodos ################');
    let counter = 1;
    let array = state.todos.list.map((e) => {
        return counter++;
    });
    console.log("arr",array);
    console.log("typeof", typeof array);
    return array
    
};


export const { addTodo, deleteTodo, toggleTodo, showTab,clearCompletedTodos,  } = todosSlice.actions;

export default todosSlice.reducer;
