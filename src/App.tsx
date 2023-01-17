import { useState } from "react";
import { Todo, Todos } from "./allTypes";
import "./App.css";

export default function App(): JSX.Element {
    const UID = (): string =>
        `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;

    const [todos, setTodos] = useState<Todos>([
        { id: "1", text: "Drive", isDone: false },
        { id: "2", text: "Run", isDone: true },
    ]);
    const [text, setText] = useState<string>("");

    const addTodo = (): void => {
        const newTodo: Todo = {
            id: UID(),
            text: text,
            isDone: false,
        };
        const arr: Todos = [...todos];
        arr.push(newTodo);
        setTodos(arr);
        setText("");
    };

    const deleteTodo = (id: string): void => {
        const todoIndex: number = todos.findIndex(
            (item: Todo) => item.id === id
        );
        const arr: Todos = [...todos];
        arr.splice(todoIndex, 1);
        setTodos(arr);
    };

    const setIsDone = (id: string): void => {
        const todoIndex: number = todos.findIndex(
            (item: Todo) => item.id === id
        );
        if (todos[todoIndex].isDone === false) {
            todos[todoIndex].isDone = true;
        } else {
            todos[todoIndex].isDone = false;
        }
        const arr = [...todos];
        setTodos(arr);
    };

    return (
        <div className="App">
            <div>
                {todos.length <= 0 ? (
                    <p>"Nothing to show!!!"</p>
                ) : (
                    <ul>
                        {todos.map((item: Todo, i: number) => (
                            <div className="li">
                                <li onClick={() => setIsDone(item.id)} key={i}>
                                    {item.text}
                                </li>
                                <button
                                    className={item.isDone ? "done" : ""}
                                    onClick={() => deleteTodo(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
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
