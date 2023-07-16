import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskList() {
  return (
    <>
      <Stack flexDirection="row" alignItems="center" justifyContent="space-around">
        <TextField type="radio" name="task" />
        <Typography variant="body1">somff</Typography>
        <DeleteIcon />
      </Stack>
    </>
  );
}

export default TaskList;
