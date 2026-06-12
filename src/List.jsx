import DeleteBtn from "./DeleteBtn";
import MarkAsDonebtn from "./MarkAsDonebtn";
import MarkAllAsDonebtn from "./MarkAllAsDonebtn";
import ClearDoneBtn from "./ClearDoneBtn";
export default function List({ todos, setTodos }) {
    return (<div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="list">
                    <span style={todo.isDone ?
                        { textDecorationLine: "line-through", color: "green" } : {}} className="list-item">
                        {todo.task}
                    </span>
                    <span>
                        <DeleteBtn id={todo.id} setTodos={setTodos} />
                        <MarkAsDonebtn id={todo.id} setTodos={setTodos} />
                    </span>
                </li>
            ))}
        </ul>
        <br></br>
        <div className="buttons">
        <span> <MarkAllAsDonebtn setTodos={setTodos} /></span>
        <span><ClearDoneBtn setTodos={setTodos} /></span>
        </div>
    </div>);
}
