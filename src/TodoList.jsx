import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";
import Inputbox from "./Inputbox";
import List from "./List";
import BasicDatePicker from "./BasicDatePicker";

export default function TodoList() {
    let [todos, setTodos] = useState([{ id: uuidv4(), task: "sample task", isDone: false }]);
    let [input, setInput] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task: input, isDone: false }];
        });
        setInput("");
    };

    return (<>
        <h1 style={{textAlign: "center", marginBottom: "10px", color: "rgb(98, 1, 98)" }}>My tasks</h1>
       
        <div className="container">
        
        <BasicDatePicker className="datepicker" />
            <Inputbox input={input} setInput={setInput} addNewTask={addNewTask} />
            <List todos={todos} setTodos={setTodos} />
        </div>
    </>
    );
}




