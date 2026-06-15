import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';


export default function BasicDatePicker() {
  return (
    <div className="basic-date-picker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          slotProps={{ textField: { size: 'small' } }}
          renderInput={(params) => <TextField {...params} size="small" />}
          sx={{
            width: '190px',
            minWidth: 0,
            '& .MuiInputBase-root': {
              height: 38,
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: 10,
            },
            '& .MuiInputBase-input': {
              padding: '8px 10px',
              fontSize: '0.95rem',
            },
            '& .MuiInputLabel-root': {
              fontSize: '0.9rem',
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}