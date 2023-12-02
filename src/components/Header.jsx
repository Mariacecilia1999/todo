import {Box, Link, Typography} from '@mui/material';

const Header = () =>{
   return(<>
   <Box sx={{py:'17px',px:'40px',fontFamily:'roboto', fontWeight:100, display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:'center', justifyContent: 'space-between', backgroundColor:' #1976d2', color:'white', height:'15vh'}}>
      <Typography  variant='h1' fontWeight= '400'  sx={{fontSize:{xs:'28px', sm:'47px'}}}>Lista de tareas</Typography>
      <Box sx={{display:'flex', fontSize:{xs:'18px', sm:'24px'},justifyContent: 'space-around', width:'370px'}}>
         <Link color='inherit' underline='none'>Todas</Link>
         <Link color='inherit' underline='none'>Agregar</Link>
      </Box>
   </Box>
   
   </>)
}

export default Header