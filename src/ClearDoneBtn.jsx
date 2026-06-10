import MarkAllAsDonebtn from "./MarkAllAsDonebtn";

export default function ClearDoneBtn(setTodos, Todos) {
    return (
    <button onClick={clearDone} className="btn mark-btn">
    clear done
    </button>
    );
}

let clearDone = () => {
    console.log("clear done");

}