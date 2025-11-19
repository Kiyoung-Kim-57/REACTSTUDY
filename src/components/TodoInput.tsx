import { useState } from "react";

type TodoInputProps = {
    onAdd: (text: string) => void;
};

export function TodoInput({ onAdd }: TodoInputProps) {
    console.log("TodoInput 렌더링");
    const [text, setText] = useState("");
    const handleAdd = () => {
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={handleAdd}>추가하기</button>
        </div>
    );
}
