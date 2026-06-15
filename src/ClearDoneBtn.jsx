export default function ClearDoneBtn({ setTodos }) {
    return (
        <button onClick={() => clearDone(setTodos)} className="btn mark-btn">
            clear done
        </button>
    );

}

let clearDone = (setTodos) => {
    console.log("clear done");
    setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.isDone == false);
    });
};
