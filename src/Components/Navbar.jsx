import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/e-gov logo.png';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#636363' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <img src={logo} width="60" height="50" alt="E-Governance" />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        
        <Button component={Link} to="/" color="inherit">HOME</Button>
        <Button component={Link} to="/signup" color="inherit">ABOUT US</Button>
        <Button component={Link} to="/dashboard" color="inherit">CONTACT US</Button>
        <Button component={Link} to="/" color="inherit">FAQ</Button>
        <Button component={Link} to="/event-cal" color="inherit">EVENT</Button>
        </Typography>
        <Button component={Link} to="/login" color="inherit">Sign In</Button>
        <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
