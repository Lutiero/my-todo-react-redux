import React from 'react';
import { Todo } from './features/todo/Todo';
import { TodoList } from './features/todo/TodoList';
import sun from './static/images/icon-sun.svg';
import banner from './static/images/bg-desktop-dark.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={banner} alt="banner" />
      <header className="App-header">
      </header>
        <section className="todo-container">
        <div className="title">
        <h1>T O D O</h1>
        <span><img src={sun} alt="sun" /></span>
        </div>
        <Todo />
        <TodoList />
      </section>
    </div>
  );
}

export default App;
