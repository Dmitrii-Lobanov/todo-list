import React from 'react';

const TodoItem = ({ title, handleDelete }) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <i className="fas fa-pen"></i>
        </span>
        <span className="mx-2 text-danger">
          <i
            className="fas fa-trash"
            onClick={handleDelete}
          ></i>
        </span>
      </div>
    </li>
  );
}

export default TodoItem;