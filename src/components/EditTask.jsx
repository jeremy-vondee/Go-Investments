import PropTypes from 'prop-types'
// import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const EditTask = ({ taskName }) => {
  // const handleEditTask = (event) => {
  //   event.preventDefault()
  // }

  // return (
  //   <Stack>
  //     <TextField placeholder="Edit Task" value={taskName} onChange={handleEditTask} />
  //     <Button variant="contained">Edit Task</Button>
  //   </Stack>
  // )
  console.log('edit')
}

EditTask.propTypes = {
  taskName: PropTypes.string,
}
export default EditTask
