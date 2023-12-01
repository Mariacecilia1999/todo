import {Box, Button, TextField } from '@mui/material';

const AddTaskForm = () =>{
   return(
      <>
      <Box sx={{width:'100%', display: 'flex', justifyContent:'center' ,alignContent:'center'}}>
         <TextField id="outlined-basic" label="Agrega una tarea" variant="outlined" error={false} helperText='No se puede agregar una tarea vacía, por favor intentatalo de nuevo'/>
         <Button sx={{height:56, mx:2}} variant='contained'>
               Agregar
         </Button>
      </Box>
      </>
   )
}
export default AddTaskForm