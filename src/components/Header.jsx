import {Box, Link, Typography} from '@mui/material';
import { useState } from 'react'
import Main from './Main.jsx'

const Header = () =>{
   const [activeContent, setContent] = useState(1)

   const linkAll = () =>{
      setContent(1)
   }

   const linkAdd = () =>{
      setContent(2)
   }


   return(<>
   <Box sx={{py:'17px',px:'40px',fontFamily:'roboto', fontWeight:100, display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:'center', justifyContent: 'space-between', backgroundColor:' #1976d2', color:'white', height:'15vh'}}>
      <Typography  variant='h1' fontWeight= '400'  sx={{fontSize:{xs:'28px', sm:'47px'}}}>Lista de tareas</Typography>
      <Box sx={{display:'flex', fontSize:{xs:'18px', sm:'24px'},justifyContent: 'space-around', width:'370px'}}>
         <Link onClick={() => {linkAll()}} color='inherit' underline='none'>Todas</Link>
         <Link onClick={() => {linkAdd()}} color='inherit' underline='none'>Agregar</Link>
      </Box>
   </Box>
   <Main content={activeContent}/>
   
   </>)
}

export default Header