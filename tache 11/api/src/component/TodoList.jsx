import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
    const { todoList, removeTodo } = useTodoContext();

    return (
        <ul>
            {todoList.map((todo, index) => (
                <li key={index}> {/* Changez ceci en todo.id si possible */}
                    {todo}
                    <button onClick={() => removeTodo(index)}>x</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
