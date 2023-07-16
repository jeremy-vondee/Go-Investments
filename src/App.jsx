// import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputField from './components/InputField.jsx';
import TaskList from './components/TaskList.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="h3" textAlign="center" mt={6}>
        TODO APP
      </Typography>
      <Box mt={6} ml={20}>
        <InputField />
        <TaskList />
      </Box>
    </>
  );
}

export default App;
