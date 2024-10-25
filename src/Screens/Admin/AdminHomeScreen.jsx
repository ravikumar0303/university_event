import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, EventNote as EventNoteIcon, PeopleAlt as PeopleAltIcon, Menu as MenuIcon, Brightness7, Brightness4 } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../Components/header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/footer';

const drawerWidth = 240;
const drawerClosedWidth = 60; // Width when collapsed

const AdminHomeScreen = () => {
  const [open, setOpen] = useState(false); // State for drawer open/close
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle= () =>{
    setDarkMode(!darkMode);
  }

  const handleDrawerToggle = () => {
    setOpen(!open); // Toggle the drawer state
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
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Admin-HomeScreen/event-cal' },
    { text: 'Users', icon: <PersonIcon />, path: '/Admin-HomeScreen/user' },
    { text: 'Create Events', icon: <EventIcon />, path: '/Admin-HomeScreen/create-events' },
    { text: 'Events List', icon: <EventNoteIcon />, path: '/Admin-HomeScreen/events-list' },
    { text: 'Participants', icon: <PeopleAltIcon />, path: '/Admin-HomeScreen/participants' },
  ];

  return (
    <div>
      <Header/>
      <Navbar/>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex',minHeight:'80vh' }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          style={{ background: 'linear-gradient(to right bottom,#134B70 60%,#201E43 40%)',top:'9rem' }}
        >
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle} sx={{mr:2}}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{flexGrow:'2'}} component="div">
              Admin Dashboard
            </Typography>
            <IconButton color='inherit' onClick={handleThemeToggle}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: open ? drawerWidth : drawerClosedWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: open ? drawerWidth : drawerClosedWidth,
              backgroundColor: darkMode? '#333':'#134B70', // Set the same background color
              color:'#000000', // Sidebar text color
              transition: 'width 0.2s ease',
              overflowX: 'hidden',
              boxSizing: 'border-box',
              position:'absolute',
              top:"10rem",
              zIndex:10,
              height:'79vh'
            },
          }}
          open={open}
        >
          <Toolbar />
          <Divider />
          <List>
            {navItems.map((item) => (
              <div>
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: darkMode?'#ddd':'#fff', // Text color for the list items
                  '&:hover': {
                    backgroundColor: '#215f96', // Hover effect
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon> {/* Icon color */}
                {open && <ListItemText primary={item.text} />} {/* Conditionally render text */}
              </ListItem>
              <Divider variant='middle' sx={{backgroundColor:'#dee'}}/>
              </div>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: 'margin-left 0.2s ease-in',
            marginLeft: open ? '25px' : '25px'
          }}
        >
          <Toolbar />
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
    <Footer/>
    </div>
  );
};

export default AdminHomeScreen;
