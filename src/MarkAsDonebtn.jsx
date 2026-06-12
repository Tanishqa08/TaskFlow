import CheckIcon from '@mui/icons-material/Check';
export default function MarkAsDonebtn({  setTodos, id }) {
    return (
        <button onClick={() => markAsDone(id, setTodos)} className="btn">
            <CheckIcon />
        </button>
    );
}

let markAsDone = (id, setTodos) => {
    setTodos((prevtodos) =>
        prevtodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: true };
            } else {
                return todo;
            }
        })
    );
};