import AddIcon from '@mui/icons-material/Add';
export default function AddButton({ addNewTask }) {
    return (
        <button onClick={addNewTask} className="btn">
            <AddIcon />
        </button>
    );
}


