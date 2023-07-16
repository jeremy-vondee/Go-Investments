import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function InputField() {
  // const addToTask = [];
  // const [pushTaskToArray, setPushTaskToArray] = useState([])
  // setPushTaskToArray = (prev => [...prev, pushTaskToArray])
  const [task, setTask] = useState([]);
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const addTaskToList = () => {
    setTask = (prev) => [...prev, task];
    console.log(setTask);
  };

  return (
    <>
      <Stack alignItems="center" flexDirection="row">
        <TextField
          type="text"
          name="task"
          placeholder="Enter task"
          value={task}
          onChange={handleChange}
          sx={{ width: '50%', marginRight: '24px' }}
        />
        <Button variant="contained" startIcon={<AddIcon />} onClick={addTaskToList}>
          Add Task
        </Button>
      </Stack>
    </>
  );
}

export default InputField;
