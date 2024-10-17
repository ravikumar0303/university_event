import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CDAC from '../assets/CDAC.png';
import './nav.css';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3A4664' }}>
      <Toolbar>
        <IconButton edge="start" aria-label="logo" sx={{ mr: 2 }}>
          <img src={CDAC} width="100px" height="50px" alt="" />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
        
<<<<<<< HEAD
        <Button component={Link} to="/" color="inherit">HOME</Button>
        <Button component={Link} to="/event" color="inherit">ABOUT US</Button>
        <Button component={Link} to="/dashboard" color="inherit">CONTACT US</Button>
        <Button component={Link} to="/add-event" color="inherit">FAQ</Button>
        <Button component={Link} to="/event-cal" color="inherit">EVENT</Button>
=======
        <Button component={Link} to="/" color="inherit" className='nav'>HOME</Button>
        <Button component={Link} to="/about" color="inherit" className='nav'>ABOUT US</Button>
        <Button component={Link} to="/contactus" color="inherit" className='nav'>CONTACT US</Button>
        <Button component={Link} to="/faq" color="inherit" className='nav'>FAQ</Button>
        <Button component={Link} to="/event-cal" color="inherit" className='nav'>EVENT</Button>
>>>>>>> 3a225f2649738286c7ed6d48be41ce5dd32feb8d
        </Typography>
        <div style={{width:'180px',display:'flex',justifyContent:'space-between'}}>
        <Button component={Link} to="/login" className='btn' >Sign In</Button>
        <Button component={Link} to="/signup" className='btn'>Sign Up</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
