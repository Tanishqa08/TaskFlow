import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
let onDelete = (id, setTodos) => {
  setTodos((prevTodos) => {
    return prevTodos.filter((todo) => todo.id !== id);
  });
};

export default function IconButtons({ id, setTodos }) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon onClick={() => onDelete(id, setTodos)} className="btn" />
      </IconButton>
    </Stack>
  );
} 
