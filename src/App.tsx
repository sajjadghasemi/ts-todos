import { useState } from "react";
import { Todo, Todos } from "./allTypes";
import "./App.css";

export default function App() {
    const UID = () =>
        `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;

    const [todos, setTodos] = useState<Todos>([
        { id: "1", text: "Drive" },
        { id: "2", text: "Run" },
    ]);
    const [text, setText] = useState<string>("");

    const addTodo = (): void => {
        const newTodo: Todo = {
            id: UID(),
            text: text,
        };
        const arr: Todos = [...todos];
        arr.push(newTodo);
        setTodos(arr);
        setText("");
    };

    const deleteTodo = (id: string): void => {
        const todoIndex: number = todos.findIndex((item) => item.id === id);
        const arr: Todos = [...todos];
        arr.splice(todoIndex, 1);
        setTodos(arr);
    };

    return (
        <div className="App">
            <div>
                {todos.length <= 0 ? (
                    <p>"Nothing to show!!!"</p>
                ) : (
                    <ul>
                        {todos.map((item, i) => (
                            <li key={i}>
                                {item.text}
                                <button onClick={() => deleteTodo(item.id)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                />
                <button onClick={addTodo} type="submit">
                    Add Todo
                </button>
            </div>
        </div>
    );
}
