import type { Todo } from "./TodoApp";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
    onclick: (id: number) => void;
};

export function TodoList({
    todos,
    onToggle,
    onRemove,
    onclick,
}: TodoListProps) {
    console.log("TodoList 렌더링");
    return (
        <div>
            <ol>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        onClick={onclick}
                    ></TodoItem>
                ))}
            </ol>
        </div>
    );
}
