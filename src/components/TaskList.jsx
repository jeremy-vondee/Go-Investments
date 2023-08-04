import PropTypes from 'prop-types';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputField from './InputField.jsx';

function Task({ id, name, onRemoveTask }) {
  return (
    <Stack direction="row" alignItems="center">
      <FormControlLabel control={<Checkbox id={id} />} label={name} />
      <IconButton aria-label="delete" taskid={id} onClick={onRemoveTask}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}

Task.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onRemoveTask: PropTypes.func,
};

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (taskid) => {
    console.log(taskid);
    // tasks.filter((t) => t.id !== taskId.id);
  };

  return (
    <Box>
      <InputField onAddTask={addTask} />
      <Stack spacing={1}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} name={task.name} onRemoveTask={removeTask} />
        ))}
      </Stack>
    </Box>
  );
}

export default TaskList;
