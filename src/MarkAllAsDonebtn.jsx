export default function MarkAllAsDonebtn({ setTodos}) {
    return (
        <button onClick={() => markAllAsDone(setTodos)} className="mark-btn btn">
            mark all done
        </button>
    );
}

let markAllAsDone = (setTodos) => {
    setTodos((prevtodos) =>
        prevtodos.map((todo) => {
            return { ...todo, isDone: true };
        })
    );
};
