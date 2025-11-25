import { useRef, useState } from "react";
import { flushSync } from "react-dom";

type TodoItemProps = {
  id: string;
  title: string;
};
export function TodoItem({ id, title }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div data-id={id}>
      <input type="checkbox" />
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsEditing(false);
              setCurrentTitle(title);
            }
          }}
        />
      ) : (
        <span
          onClick={() => {
            flushSync(() => {
              setIsEditing(true);
            });
            inputRef.current?.focus();
          }}
        >
          {title}
        </span>
      )}
      <button>삭제</button>
    </div>
  );
}
