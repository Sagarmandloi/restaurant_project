import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
<Box sx={{my:5,'& h4':{fontWeight:'bold',mb:2}}}>
<Typography variant='h4'sx={{justifyContent:'center', alignItems:'center'}} >

  Contact My Resturant
</Typography>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop</p>

</Box>
<Box sx={{m:'3',width:'600px' ,ml:10,'@media (max-width:600px)':{
  width:'300px',
  pr:'20px',
  pb:'10px'


}}}>
  <TableContainer component={Paper}>
<Table aria-aria-label='contact table'>
<TableHead>
<TableRow>
  <TableCell sx={{bgcolor:'black',color:'white'}} align='center'> Contact Detail</TableCell>
</TableRow>

</TableHead>
<TableBody>
  <TableRow>
    <TableCell>
    <SupportAgentIcon sx={{color:'red',pt:1}}/> 1800-000-00 (tollfree)  
    </TableCell>
   
  </TableRow>
  <TableRow>
  <TableCell>
    <MarkunreadIcon sx={{color:'skyblue',pt:1}}/> Myrest@123.gmail.com   
    </TableCell>
    
  </TableRow>
  <TableRow>
  <TableCell>
    <CallIcon sx={{color:'green',pt:1}}/> 123456789   
    </TableCell>
    
  </TableRow>

</TableBody>
</Table>

  </TableContainer>
</Box>
    </Layout>
  )
}

export default Contact
