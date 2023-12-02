import {Box, Typography} from '@mui/material';

const Footer = () =>{
   return(<>
   <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',height:'12vh', backgroundColor:'#1976d2', color:'white'}}>
      <Typography variant='h6' fontWeight='100'>Aplicación realizada por Maria Cecilia</Typography>
   </Box>
   
   </>)
}

export default Footer