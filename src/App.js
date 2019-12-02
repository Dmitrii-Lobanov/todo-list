import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <h1>Hello from the App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
