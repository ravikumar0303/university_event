// src/Screens/User/UserHomeScreen.jsx
import React, { useState } from 'react';
import {
  Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider,
  Typography, Button, Switch
} from '@mui/material';
import {
  Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, EventNote as EventNoteIcon, Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon
} from '@mui/icons-material';
import { Outlet, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../Components/header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/footer';

const drawerWidth = 210;

const UserHomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State to track theme mode

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Switch between dark and light modes
      primary: {
        main: '#1976d2',
      },
    },
  });

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/User-HomeScreen' },
    { text: 'Users', icon: <PersonIcon />, path: '/User-HomeScreen/user' },
    { text: 'New Event', icon: <EventIcon />, path: '/User-HomeScreen/dashboard' },
    { text: 'Events List', icon: <EventNoteIcon />, path: '/User-HomeScreen/events-list' },
  ];

  return (
    <>
    <Header/>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar position="absolute"   sx={{top:'10rem'}}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                User Dashboard
              </Typography>
            </Box>
            {/* Dark/Light Mode Switch */}
            <Box>
              <IconButton color="inherit" onClick={handleThemeToggle}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        
        {/* Drawer for Navigation */}
        <Drawer
          sx={{
           height:10,
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              position:'absolute',
              top:'10.5rem',
              zIndex:10
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
        >
          <Toolbar>
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            {navItems.map((item, index) => (
              <ListItem button component={Link} to={item.path} key={index} onClick={handleDrawerToggle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{ flexGrow: 2, p: 3, pl:-10 ,transition: 'margin 0.3s ease', ml: open ? '5rem' : '-4rem' }}
        >
          <Toolbar />
          <Outlet /> {/* Placeholder for the nested route content */}
        </Box>
      </Box>
    </ThemeProvider>
    <Footer/>
    </>
  );
};

export default UserHomeScreen;
