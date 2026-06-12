import AddButton from "./AddButton";
export default function Inputbox({ input, setInput, addNewTask }) {
    return (
        <div>
            <input
                type="text"
                placeholder="add a new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input"
            />
            <br></br> <br></br>
            <AddButton addNewTask={addNewTask} />
        </div>
    );
} 