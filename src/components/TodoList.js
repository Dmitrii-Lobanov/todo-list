import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ items, clearList, handleDelete }) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">Todo list</h3>
      {items.map(item => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
          />
        );

      })}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        Clear list
      </button>
    </ul>
  );
}

export default TodoList;