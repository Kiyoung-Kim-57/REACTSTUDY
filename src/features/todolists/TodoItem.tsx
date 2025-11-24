import type { Todo } from "./TodoApp";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
    onClick: (id: number) => void;
};

export function TodoItem({ todo, onToggle, onRemove, onClick }: TodoItemProps) {
    console.log("TodoItem 렌더링:", todo.id);
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span
                style={{
                    cursor: "pointer",
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => onClick(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </li>
    );
}
