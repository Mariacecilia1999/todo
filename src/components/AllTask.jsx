import {Box, Typography} from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const AllTask = () =>{
   const [allTask, setTask] = useState([
      {
      id:Date.now(),
      name:'Programar'
      }
      ,
      {
         id:Date.now(),
         name:'Estudiar'
      },
      {
         id:Date.now(),
         name:'Leer'
      }

   ])
   return(<>
   <Box width='25vw'>
      {allTask.map((task)=>{
         return <Box borderBottom='1px solid black' key={task.id} my='30px' display='flex' justifyContent={'space-around'}>
            <Typography width='14vw' variant='h5'>{task.name}</Typography>
            <Box width='5vw'  display='flex' justifyContent='space-between' alignItems='center'>
               <DeleteIcon/>
               <CheckIcon/>
            </Box>
         </Box>
      })}
   </Box>
   </>)
}

export default AllTask