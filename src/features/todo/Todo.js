import styles from './Todo.module.css';
import { addTodo, showTab, clearCompletedTodos } from './todosSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


export function Todo() {
    const dispatch = useDispatch();
    const [todoInput, setTodoInput] = useState('');

  return (
    <section>
        <div className={styles.todoInput}>
        <form onSubmit={(e) => {e.preventDefault(); dispatch(addTodo(todoInput)); setTodoInput('');}}>
            <input className={styles.input} onChange={(e) => setTodoInput(e.target.value)} value={todoInput} type="text" name="todo" placeholder="Create a new Todo"></input>
        </form>
        </div>
        
    </section>
  );
}
