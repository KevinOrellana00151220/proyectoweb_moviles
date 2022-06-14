import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="grid justify-items-center space-y-6">
        <button 
          onClick={() => removeTodo(todo.id)}
          className= "bg-white order-solid border-2 border-black rounded-md shadow-sm -space-y-px"
          >Borrar
        </button>
        <button 
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className=" bg-white order-solid border-2 border-black rounded-md shadow-sm -space-y-px"
        >Editar
        </button>
          
      </div>
    </div>
  ));
};

export default Todo;
