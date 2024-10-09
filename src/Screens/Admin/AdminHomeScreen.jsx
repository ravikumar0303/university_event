// src/Components/Dashboard.js
import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, EventNote as EventNoteIcon, PeopleAlt as PeopleAltIcon, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import { Outlet, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;

const AdminHOmeScreen = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Users', icon: <PersonIcon />, path: '/dashboard/user' },
    { text: 'Create Events', icon: <EventIcon />, path: '/dashboard/create-events' },
    { text: 'Events List', icon: <EventNoteIcon />, path: '/dashboard/events-list' },
    { text: 'Participants', icon: <PeopleAltIcon />, path: '/dashboard/participants' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ zIndex: '1201' ,background:'linear-gradient(to right bottom,#134B70 60%,#201E43 40%'}}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
               </IconButton>

            <img style={{width:'6rem'}} src="src/assets/CDAC.png" alt="CDAC" />
            
            <Typography variant="h6" sx={{ flexGrow: 2 }}>
              Dashboard
            </Typography>
            <IconButton color="inherit" onClick={handleThemeToggle}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#000',
              boxSizing: 'border-box',
              transition: 'width 0.3s ease',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Toolbar>
            <IconButton onClick={handleDrawerToggle} sx={{ color: darkMode ? '#fff' : '#000' }}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          {/* <Divider sx={{ backgroundColor: darkMode ? '#fff' : '#000' }} /> */}
          <List>
            {navItems.map((item, index) => (
             <> 
             <ListItem button component={Link} to={item.path} key={index}>
                <ListItemIcon sx={{ color: darkMode ? '#fff' : '#666' }}>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} sx={{ color: darkMode ? '#fff' : '#000' }} />}
                
              </ListItem>
              <Divider variant='middle' sx={{ backgroundColor: darkMode ? '#aaa0.1' : '#9999990.4' }} />
              </>
            ))}
            
          </List>
          
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, transition: 'margin-left 0.3s ease', marginLeft: open ? '10px' : '-10rem' }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminHOmeScreen;
