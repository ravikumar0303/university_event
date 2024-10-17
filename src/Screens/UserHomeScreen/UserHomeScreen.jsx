// // src/Screens/User/UserHomeScreen.jsx
// import React, { useState } from 'react';
// import { Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Button } from '@mui/material';
// import { Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, EventNote as EventNoteIcon, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
// import { Outlet, Link } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const drawerWidth = 240;

// const UserHomeScreen = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: 'light',
//       primary: {
//         main: '#1976d2',
//       },
//     },
//   });

//   const navItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//     { text: 'Users', icon: <PersonIcon />, path: '/dashboard/user' },
//     { text: 'New Event', icon: <EventIcon />, path: '/dashboard/new-event' },
//     { text: 'Events List', icon: <EventNoteIcon />, path: '/dashboard/events-list' },
//   ];

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="fixed" sx={{ zIndex: 1201 }}>
//           <Toolbar>
//             <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap>
//               User Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>
        
//         {/* Drawer for Navigation */}
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//               width: drawerWidth,
//               boxSizing: 'border-box',
//             },
//           }}
//           variant="temporary"
//           open={open}
//           onClose={handleDrawerToggle}
//         >
//           <Toolbar>
//             <IconButton onClick={handleDrawerToggle}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List>
//             {navItems.map((item, index) => (
//               <ListItem button component={Link} to={item.path} key={index} onClick={handleDrawerToggle}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>

//         {/* Main Content Area */}
//         <Box
//           component="main"
//           sx={{ flexGrow: 1, p: 3, transition: 'margin 0.3s ease', ml: open ? `${drawerWidth}px` : '0px' }}
//         >
//           <Toolbar />
//           <Outlet /> {/* Placeholder for the nested route content */}
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default UserHomeScreen;

// src/Screens/User/UserHomeScreen.jsx
import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Button } from '@mui/material';
import { Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, EventNote as EventNoteIcon, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { Outlet, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const drawerWidth = 240;

const UserHomeScreen = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/User-HomeScreen' },
    { text: 'Users', icon: <PersonIcon />, path: '/User-HomeScreen/user' },
    { text: 'New Event', icon: <EventIcon />, path: '/User-HomeScreen/event-cal' },
    { text: 'Events List', icon: <EventNoteIcon />, path: '/User-HomeScreen/events-list' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: 1201 }}>
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              User Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        
        {/* Drawer for Navigation */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="temporary"
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
          sx={{ flexGrow: 1, p: 3, transition: 'margin 0.3s ease', ml: open ? `${drawerWidth}px` : '0px' }}
        >
          <Toolbar />
          <Outlet /> {/* Placeholder for the nested route content */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default UserHomeScreen;