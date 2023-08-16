import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TaskList from './components/TaskList.jsx'

function App() {
  return (
    <Box>
      <Typography variant="h3" textAlign="center" mt={6}>
        TODO APP
      </Typography>
      <Box mt={6} ml={20}>
        <TaskList />
      </Box>
    </Box>
  )
}

export default App
