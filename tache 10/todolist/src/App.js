import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    
    if (editingId) {
      const updatedTodos = todoList.map((item) =>
        item.id === editingId ? { ...item, value: todo } : item
      );
      setTodoList(updatedTodos);
      setEditingId(null);
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        value: todo,
      };
      setTodoList((prev) => [...prev, newTodo]);
    }

    setTodo('');
  };

  const deleteTodo = (todoId) => {
    const newTodos = todoList.filter(todo => todo.id !== todoId);
    setTodoList(newTodos);
  };

  const editTodo = (todoId) => {
    const todoToEdit = todoList.find(item => item.id === todoId);
    setTodo(todoToEdit.value);
    setEditingId(todoId);
  };

  return (
    <div className="w-50 m-auto py-5">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <div className="mb-3">
          <label className="form-label">Todo</label>
          <input
            type="text"
            className="form-control"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {editingId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <h1 className='mt-5'>Liste des tâches à faire</h1>
      <ul className='p-0'>
        {todoList.length ? (
          todoList.map(todo => (
            <div key={todo.id} className='d-flex gap-2 mt-3'>
              <li>{todo.value}</li>
              <button onClick={() => editTodo(todo.id)} className="btn btn-warning">
              <i class="bi bi-pencil-square"></i>
              </button>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
              <i class="bi bi-trash"></i>
              </button>
            </div>
          ))
        ) : (
          <span className='text-danger'>Pas encore de todo</span>
        )}
      </ul>
    </div>
  );
}

export default App;
