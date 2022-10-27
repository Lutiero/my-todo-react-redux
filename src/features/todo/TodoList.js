import { useSelector } from "react-redux";
import { 
            listSelectorAll, 
            deleteTodo, 
            toggleTodo, 
            showTabSelector, 
            showTab, 
            clearCompletedTodos, 
            counterTodos
        } from "./todosSlice";
import styles from './Todo.module.css';
import { useDispatch } from "react-redux";
import iconCross from '../../static/images/icon-cross.svg';

export function TodoList() {

const todos = useSelector(listSelectorAll);
const currentTab = useSelector(showTabSelector);
const counter = useSelector(counterTodos);
const dispatch = useDispatch();

const todosAllTemplate = todos.map((todoMap) => {
    return <div className={styles.todoList} key={todoMap.id}>
                    <input onClick={() => dispatch(toggleTodo(todoMap.id))} defaultChecked={todoMap.done}  type="checkbox" name="done"></input>
                    <p className={todoMap.done ? styles.todoCompleted : ''} htmlFor="done">{todoMap.content}</p>
                    <button onClick={() => dispatch(deleteTodo(todoMap.id))} type="submit" className={styles.btnDelete}>
                        <img src={iconCross} className={styles.cross} alt="deletar" />
                    </button>
                </div>
});
    
        
        return(
            <div className={styles.todoListContainer}>       
                {todosAllTemplate}
                <p>Itens que faltam: {counter}</p>
                <div className={styles.listButtons}>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('all'))}} className={styles.actionButtons} type="submit">All</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('active'))}} className={styles.actionButtons} type="submit">Active</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('completed'))}} className={styles.actionButtons} type="submit">Completed</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(clearCompletedTodos())}} className={styles.actionButtons} type="submit">Clear Completed</button>
                </div>
            </div>
            
        )
}