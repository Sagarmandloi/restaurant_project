import React,{useState} from 'react'
import { Box,AppBar, Typography, Toolbar, IconButton, Divider } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link,NavLink ,activeClassName} from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Label } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  const handlerDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  const drawer=(
    <Box onClick={handlerDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={'goldenrod'} 
          variant='h6'
           component='div'
            sx={{flexGrow :1 , bgcolor:'black',padding:'16px'}}>
         <FastfoodIcon/>
            My resturant
            
            </Typography>
            <Divider/>
              <ul className='mobile-menu' >
                <li>
                  <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact'}>Contact</NavLink>
                </li>
              </ul>              
              
    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor:'black'}}>
        <Toolbar>
          <IconButton
           color='inherit'
            aria-Label='open-drawer' 
            adge='start' 
            sx={{mr:2,display:{ sm: 'none'}}} onClick={handlerDrawerToggle}>
           <MenuIcon/>
          </IconButton>
          <Typography color={'goldenrod'} 
          variant='h6'
           component='div'
            sx={{flexGrow :1}}>
         <FastfoodIcon/>
            My resturant
            
            </Typography>
            <Box 
             sx={{display:{xs:'none',sm:'block'
           }}}>
              <ul className='navigation-menu'>
              <li>
                  <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact'}>Contact</NavLink>
                </li>
              </ul>              
              </Box> 

        </Toolbar>

      </AppBar>
      <Box component={'nav'}>
       <Drawer 
       variant='temporary' 
       open={mobileOpen}
       onClose ={handlerDrawerToggle}
       sx={{display:{xs:'block',sm:'none'},
       '& .MuiDrawer-paper':{
        boxSizing:'border-box',
        width:'240px',
       },
      }}
       >
        {drawer}
       </Drawer>
      </Box>
     <Toolbar/> 
    </Box>
     
    </>
  )
}

export default Header
