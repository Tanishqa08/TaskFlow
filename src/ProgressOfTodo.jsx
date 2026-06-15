import LinearWithValueLabel from "./LinearWithValueLabel";
export default function ProgressOfTodo({ todos }) {

    const totalTasks = todos.length;
    const completedTasks = todos.filter((todos) => todos.isDone).length;
    const progress = todos.length === 0
        ? 0
        : (completedTasks / totalTasks) * 100;

    return (<div>

        <div className="progress-container">
            <span className="card">
                <h3 className="count">{todos.length}</h3>
                <p className="progress">total</p>
            </span>
            <span className="card">
                <h3 className="count">{doneCount(todos)}</h3>
                <p className="progress">done</p>
            </span>
            <span className="card">
                <h3 className="count">{todos.length - doneCount(todos)}</h3>
                <p className="progress">remaining</p>
            </span>
        </div>
        <div>
            <LinearWithValueLabel progress={progress} />
        </div>
    </div>);
}

let doneCount = (todos) => {
    if (todos.length == 0) {
        return 0;
    }
    else if (todos.filter(todo => todo.isDone == true).length == 0) {
        return 0;
    } else {
        return todos.filter(todo => todo.isDone == true).length;
    }
}

