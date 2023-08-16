import PropTypes from 'prop-types'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import ModeIcon from '@mui/icons-material/Mode'
import InputField from './InputField.jsx'
import EditTask from './EditTask.jsx'

function Task({
  id, name, checked, onCheckTask, onEditTask, onRemoveTask,
}) {
  const handleRemoveTask = () => {
    if (typeof onRemoveTask === 'function') {
      return onRemoveTask(id)
    }
  }
  const handleCheckTask = () => {
    if (typeof onCheckTask === 'function') {
      return onCheckTask(id)
    }
  }
  const handleEditTask = () => {
    if (typeof onEditTask === 'function') {
      return onEditTask(id)
    }
    return <EditTask />
  }

  return (
    <Stack direction="row" alignItems="center">
      <FormControlLabel
        control={<Checkbox id={id} checked={checked} onChange={handleCheckTask} />}
        label={name}
      />
      <IconButton aria-label="edit" onClick={handleEditTask}>
        <ModeIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={handleRemoveTask}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  )
}

Task.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onCheckTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
  onEditTask: PropTypes.func,
}

function TaskList() {
  const [tasks, setTasks] = useState([])
  // const [isEditing, setIsEditing] = useState(false)
  const completedTasks = tasks.filter((task) => task.checked === true)
  const uncompletedTasks = tasks.filter((task) => task.checked === false)

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, checked: false, edit: false }])
  }

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const onCheckTask = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked }
      }
      return task
    }))
  }

  const onEditTask = (id) => {
    setTasks((prevTasks) => prevTasks.map((task) => {
      if (task.id === id) {
        return { ...task, edit: !task.edit }
      }
      return task
    }))
  }
  console.log(tasks)

  return (
    <Box>
      <InputField onAddTask={addTask} />
      <Stack spacing={1}>
        {uncompletedTasks.length > 0 ? (
          <Typography variant="h6" mt={2}>
            {uncompletedTasks.length} Uncompleted Task
          </Typography>
        ) : null}

        {uncompletedTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            checked={task.checked}
            onCheckTask={onCheckTask}
            onEditTask={onEditTask}
            onRemoveTask={removeTask}
          />
        ))}
      </Stack>
      <Stack mt={2}>
        {completedTasks.length > 0 ? (
          <Typography variant="h6" mt={2}>
            {completedTasks.length} Completed Task
          </Typography>
        ) : null}

        {completedTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            checked={task.checked}
            onCheckTask={onCheckTask}
            onRemoveTask={removeTask}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default TaskList
