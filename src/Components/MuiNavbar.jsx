import React from 'react';
import {AppBar, Toolbar , IconButton, Typography, Box, Button} from '@mui/material';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

function MuiNavbar() {
  return (
    <div >
        <AppBar position='relative' sx={{height:'4rem',backgroundColor:'#ddd'}}>
            <Toolbar>
            <IconButton size="large" edge="start" aria-label="logo" sx={{display:{xs:'flex',md:'flex'}}}>
          <img style={{width:'6rem'}} src="src/assets/CDAC.png" alt="Logo1"/>
          <img style={{width:'6.5rem'}}  src="src/assets/logo.png" alt="Logo2"/>
        </IconButton>

        <Typography variant="h6" sx={{flexGrow:1}}></Typography>
        
        <Box sx={{display:{xs:'flex',md:'flex'}}}>
        <Link to='/'> <Button color='primary'><b>LogIn</b> </Button> </Link>
        </Box>

        {/* <Box sx={{display:{xs:'flex',md:'none'}}}>
              <IconButton color='primary'>
              <MenuRoundedIcon  />
              </IconButton>
            </Box> */}

            
            </Toolbar>
        </AppBar>

    </div>
  )
}

export default MuiNavbar;