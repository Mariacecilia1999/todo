import {Box} from '@mui/material'
import AddTaskForm from './AddTaskForm'
import AllTask from './AllTask'

const Main = ({content}) =>{
   return(<>
   <Box height='52.7vh' display='flex' alignItems='center' justifyContent='center'>
   {content === 1 ? <AllTask/> : <AddTaskForm/>}
   </Box>
   
   </>)
}

export default Main