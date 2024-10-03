import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";

const TodoForm = () => {
    const { getNumberOfTodoItems, addTodo } = useTodoContext();
    const [todoItem, setTodoItem] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!todoItem) {
            return;
        }

        addTodo(todoItem);
        setTodoItem("");
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Number of todo items: {getNumberOfTodoItems()}</h3>
            <label htmlFor="todo-input">New Todo:</label>
            <input
                id="todo-input"
                type="text"
                value={todoItem}
                onChange={e => setTodoItem(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
