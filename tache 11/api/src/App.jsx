import './App.css';
import TodoProvider from './providers/TodoProvider';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

const App = () => {
  return (
    <div className="App">
      <header>
      <h1>TODO List</h1>
      </header>

    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
    </div>
  );
}

export default App;
