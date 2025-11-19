import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useState } from "react";

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
    isEditing: boolean;
    cache: string;
};

export function TodoApp() {
    console.log("TodoApp 렌더링");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleClick = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isEditing: true, cache: todo.text }
                    : todo
            )
        );
    };

    const handleAdd = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
            isEditing: false,
            cache: "",
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <TodoInput onAdd={handleAdd} />
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
                onclick={handleClick}
            />
        </div>
    );
}
