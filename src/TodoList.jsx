import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";
import Inputbox from "./Inputbox";
import List from "./List";
import BasicDatePicker from "./BasicDatePicker";
import ProgressOfTodo from "./ProgressOfTodo";
import dayjs from "dayjs";

export default function TodoList() {
    let [todos, setTodos] = useState(() => {
        let savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            return JSON.parse(savedTodos);
        }

        return [
            {
                id: uuidv4(),
                task: "sample task",
                isDone: false
            }
        ];
    });

    let [input, setInput] = useState("");

    const [selectedDate, setSelectedDate] = useState(() => {
        const savedDate = localStorage.getItem("selectedDate");
        return savedDate ? dayjs(JSON.parse(savedDate)) : null;
    });

    useEffect(() => {
        localStorage.setItem(
            "selectedDate",
            JSON.stringify(selectedDate)
        );
    }, [selectedDate]);


    let addNewTask = () => {
        if (input.trim() === "") {
            return;
        }
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task: input, isDone: false }];

        });
        setInput("");
    };

    return (<>
        <h1 style={{ textAlign: "center", marginBottom: "10px", color: "rgb(98, 1, 98)" }}>My tasks</h1>

        <div className="container">

            <BasicDatePicker selectedDate={selectedDate}
                setSelectedDate={setSelectedDate} />
            <ProgressOfTodo todos={todos} />
            <Inputbox input={input} setInput={setInput} addNewTask={addNewTask} />
            <List todos={todos} setTodos={setTodos} />
        </div>
    </>
    );
}




