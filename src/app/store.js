import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosSlice from '../features/todo/todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosSlice
  },
});
