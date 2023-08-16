import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function InputField({ onAddTask }) {
  const [taskName, setTaskName] = useState('')

  const handleUpdateTaskName = (event) => {
    setTaskName(event.target.value)
  }

  const handleAddTask = (event) => {
    event.preventDefault()
    setTaskName('')
    if (typeof onAddTask === 'function') {
      return onAddTask({ id: nanoid(), name: taskName })
    }
  }

  return (
    <Stack direction="row" spacing={2} component="form" onSubmit={handleAddTask}>
      <TextField
        placeholder="Enter task"
        value={taskName}
        onChange={handleUpdateTaskName}
        sx={{ width: '50%', marginRight: '24px' }}
      />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddTask}>
        Add Task
      </Button>
    </Stack>
  )
}

InputField.propTypes = {
  onAddTask: PropTypes.func,
}

export default InputField
