import { useSelector } from "react-redux";
import { 
            listSelectorAll, 
            listSelectorActives, 
            listSelectorCompleteds, 
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
const todosCompleted = useSelector(listSelectorCompleteds);
const todosActives = useSelector(listSelectorActives);
const currentTab = useSelector(showTabSelector);
const counter = useSelector(counterTodos);
const dispatch = useDispatch();

const todosAllTemplate = todos.map((todoMap) => {
    return <section> 
                <div className={styles.todoList} key={todoMap.id}>
                    <input onClick={() => dispatch(toggleTodo(todoMap.id))} type="checkbox" name="done"></input>
                    <p className={todoMap.done ? styles.todoCompleted : ''} htmlFor="done">{todoMap.content}</p>
                    <button onClick={() => dispatch(deleteTodo(todoMap.id))} type="submit" className={styles.btnDelete}>
                        <img src={iconCross} className={styles.cross} alt="deletar" />
                    </button>
                </div>
            </section> 
});

const todosActiveTemplate = todosActives.map((todoMap) => {
    return <div className={styles.todoList} key={todoMap.id}>
                <input onClick={() => dispatch(toggleTodo(todoMap.id))} type="checkbox" name="done"></input>
                <p className={todoMap.done ? styles.todoCompleted : ''}>{todoMap.content}</p>
                <button onClick={() => dispatch(deleteTodo(todoMap.id))} type="submit" className={styles.btnDelete}>
                    <img src={iconCross} className={styles.cross} alt="deletar" />
                </button>
            </div>
})
const todosCompletedTemplate = todosCompleted.map((todoMap) => {
    return <div className={styles.todoList} key={todoMap.id}>
                <input onClick={() => dispatch(toggleTodo(todoMap.id))} type="checkbox" name="done"></input>
                <p className={todoMap.done ? styles.todoCompleted : ''}>{todoMap.content}</p>
                <button onClick={() => dispatch(deleteTodo(todoMap.id))} type="submit" className={styles.btnDelete}>
                    <img src={iconCross} className={styles.cross} alt="deletar" />
                </button>
            </div>
})

    
        
    if (currentTab === 'all') {
        return(
            <div className={styles.todoListContainer}>       
                {todosAllTemplate}
                <div className={styles.listButtons}>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('all'))}} className={styles.actionButtons} type="submit">All</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('active'))}} className={styles.actionButtons} type="submit">Active</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('completed'))}} className={styles.actionButtons} type="submit">Completed</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(clearCompletedTodos())}} className={styles.actionButtons} type="submit">Clear Completed</button>
                </div>
            </div>
            
        )
    }

    if (currentTab === 'active') {
        return(
            <div>
                {todosActiveTemplate}
                <div className={styles.listButtons}>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('all'))}} className={styles.actionButtons} type="submit">All</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('active'))}} className={styles.actionButtons} type="submit">Active</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('completed'))}} className={styles.actionButtons} type="submit">Completed</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(clearCompletedTodos())}} className={styles.actionButtons} type="submit">Clear Completed</button>
                </div>
            </div>
        )
    }

    if (currentTab === 'completed') {
        return(
            <div>
                {todosCompletedTemplate}
                <div className={styles.listButtons}>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('all'))}} className={styles.actionButtons} type="submit">All</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('active'))}} className={styles.actionButtons} type="submit">Active</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(showTab('completed'))}} className={styles.actionButtons} type="submit">Completed</button>
                    <button onClick={(e) => {e.preventDefault() ;dispatch(clearCompletedTodos())}} className={styles.actionButtons} type="submit">Clear Completed</button>
                </div>
            </div>
        )
    }
}