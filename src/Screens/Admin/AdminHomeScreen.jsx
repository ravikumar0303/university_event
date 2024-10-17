// // // src/Components/Dashboard.js
// // import React, { useState } from 'react';
// // import { Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
// // import { Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, EventNote as EventNoteIcon, PeopleAlt as PeopleAltIcon, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Brightness4, Brightness7 } from '@mui/icons-material';
// // import { Outlet, Link } from 'react-router-dom';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';

// // const drawerWidth = 240;

// // const AdminHOmeScreen = () => {
// //   const [open, setOpen] = useState(false);
// //   const [darkMode, setDarkMode] = useState(false);

// //   const handleDrawerToggle = () => {
// //     setOpen(!open);
// //   };

// //   const handleThemeToggle = () => {
// //     setDarkMode(!darkMode);
// //   };

// //   const theme = createTheme({
// //     palette: {
// //       mode: darkMode ? 'dark' : 'light',
// //       primary: {
// //         main: '#1976d2',
// //       },
// //     },
// //   });

// //   const navItems = [
// //     { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
// //     { text: 'Users', icon: <PersonIcon />, path: '/dashboard/user' },
// //     { text: 'Create Events', icon: <EventIcon />, path: '/dashboard/create-events' },
// //     { text: 'Events List', icon: <EventNoteIcon />, path: '/dashboard/events-list' },
// //     { text: 'Participants', icon: <PeopleAltIcon />, path: '/dashboard/participants' },
// //   ];

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Box sx={{ display: 'flex' }}>
// //         <CssBaseline />
// //         <AppBar position="fixed" style={{ zIndex: '1201' ,background:'linear-gradient(to right bottom,#134B70 60%,#201E43 40%'}}>
// //           <Toolbar>
// //             <IconButton color="inherit" onClick={handleDrawerToggle}>
// //               <MenuIcon />
// //                </IconButton>

// //             <img style={{width:'6rem'}} src="src/assets/CDAC.png" alt="CDAC" />
            
// //             <Typography variant="h6" sx={{ flexGrow: 2 }}>
// //               Dashboard
// //             </Typography>
// //             <IconButton color="inherit" onClick={handleThemeToggle}>
// //               {darkMode ? <Brightness7 /> : <Brightness4 />}
// //             </IconButton>
// //           </Toolbar>
// //         </AppBar>
// //         <Drawer
// //           sx={{
// //             width: drawerWidth,
// //             flexShrink: 0,
// //             '& .MuiDrawer-paper': {
// //               width: drawerWidth,
// //               backgroundColor: darkMode ? '#333' : '#fff',
// //               color: darkMode ? '#fff' : '#000',
// //               boxSizing: 'border-box',
// //               transition: 'width 0.3s ease',
// //             },
// //           }}
// //           variant="persistent"
// //           anchor="left"
// //           open={open}
// //         >
// //           <Toolbar>
// //             <IconButton onClick={handleDrawerToggle} sx={{ color: darkMode ? '#fff' : '#000' }}>
// //               <ChevronLeftIcon />
// //             </IconButton>
// //           </Toolbar>
// //           {/* <Divider sx={{ backgroundColor: darkMode ? '#fff' : '#000' }} /> */}
// //           <List>
// //             {navItems.map((item, index) => (
// //              <> 
// //              <ListItem button component={Link} to={item.path} key={index}>
// //                 <ListItemIcon sx={{ color: darkMode ? '#fff' : '#666' }}>{item.icon}</ListItemIcon>
// //                 {open && <ListItemText primary={item.text} sx={{ color: darkMode ? '#fff' : '#000' }} />}
                
// //               </ListItem>
// //               <Divider variant='middle' sx={{ backgroundColor: darkMode ? '#aaa0.1' : '#9999990.4' }} />
// //               </>
// //             ))}
            
// //           </List>
          
// //         </Drawer>
// //         <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, transition: 'margin-left 0.3s ease', marginLeft: open ? '10px' : '-10rem' }}>
// //           <Toolbar />
// //           <Outlet />
// //         </Box>
// //       </Box>
// //     </ThemeProvider>
// //   );
// // };

// // export default AdminHOmeScreen;

// // import React from 'react';
// // import { Link } from 'react-router-dom';


// // const AdminDashboard = () => {
// //   return (
// //     <div className="admin-dashboard">
// //       <h2>Admin Dashboard</h2>
// //       <ul>
// //         <li><Link to="/add-event">Add Event</Link></li>
// //         <li><Link to="/participants">View Participants</Link></li>
// //         <li><Link to="/calendar">Event Calendar</Link></li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// // src/Components/AdminHomeScreen.jsx
// import React, { useState, useEffect } from 'react';
// import { Box, CssBaseline, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
// import { Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, EventNote as EventNoteIcon, PeopleAlt as PeopleAltIcon, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Brightness4, Brightness7 } from '@mui/icons-material';
// import { Outlet, Link } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import axios from 'axios';

// const drawerWidth = 240;

// const AdminHomeScreen = () => {
//   const [open, setOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(true); // Assuming you fetch the admin status somewhere.
//   const [events, setEvents] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [newEvent, setNewEvent] = useState({ title: '', date: '' });

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const handleThemeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleEventClick = (info) => {
//     alert(`Event: ${info.event.title}`);
//   };

//   const handleDateSelect = (selectInfo) => {
//     if (isAdmin) {
//       setNewEvent({ ...newEvent, date: selectInfo.startStr });
//       setOpenDialog(true); // Show dialog to enter event title.
//     } else {
//       alert('Only Admin can create events.');
//     }
//   };

//   const handleCreateEvent = () => {
//     if (newEvent.title && newEvent.date) {
//       const newEventObj = { title: newEvent.title, start: newEvent.date };
//       setEvents([...events, newEventObj]);
//       setOpenDialog(false);
//       // Optionally, post the new event to the backend.
//       axios.post('http://localhost:2001/university_event/event/create', newEventObj)
//         .then(response => {
//           console.log('Event created successfully', response.data);
//         })
//         .catch(error => {
//           console.error('Error creating event:', error);
//         });
//     }
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: {
//         main: '#1976d2',
//       },
//     },
//   });

//   const navItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//     { text: 'Users', icon: <PersonIcon />, path: '/dashboard/user' },
//     { text: 'Create Events', icon: <EventIcon />, path: '/dashboard/create-events' },
//     { text: 'Events List', icon: <EventNoteIcon />, path: '/dashboard/events-list' },
//     { text: 'Participants', icon: <PeopleAltIcon />, path: '/dashboard/participants' },
//   ];

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="fixed" style={{ zIndex: '1201', background: 'linear-gradient(to right bottom,#134B70 60%,#201E43 40%' }}>
//           <Toolbar>
//             <IconButton color="inherit" onClick={handleDrawerToggle}>
//               <MenuIcon />
//             </IconButton>

//             <img style={{ width: '6rem' }} src="src/assets/CDAC.png" alt="CDAC" />

//             <Typography variant="h6" sx={{ flexGrow: 2 }}>
//               Admin Dashboard
//             </Typography>
//             <IconButton color="inherit" onClick={handleThemeToggle}>
//               {darkMode ? <Brightness7 /> : <Brightness4 />}
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//               width: drawerWidth,
//               backgroundColor: darkMode ? '#333' : '#fff',
//               color: darkMode ? '#fff' : '#000',
//               boxSizing: 'border-box',
//               transition: 'width 0.3s ease',
//             },
//           }}
//           variant="persistent"
//           anchor="left"
//           open={open}
//         >
//           <Toolbar>
//             <IconButton onClick={handleDrawerToggle} sx={{ color: darkMode ? '#fff' : '#000' }}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <List>
//             {navItems.map((item, index) => (
//               <>
//                 <ListItem button component={Link} to={item.path} key={index}>
//                   <ListItemIcon sx={{ color: darkMode ? '#fff' : '#666' }}>{item.icon}</ListItemIcon>
//                   {open && <ListItemText primary={item.text} sx={{ color: darkMode ? '#fff' : '#000' }} />}
//                 </ListItem>
//                 <Divider variant='middle' sx={{ backgroundColor: darkMode ? '#aaa0.1' : '#9999990.4' }} />
//               </>
//             ))}
//           </List>
//         </Drawer>
//         <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, transition: 'margin-left 0.3s ease', marginLeft: open ? '10px' : '-10rem' }}>
//           <Toolbar />

//           {/* Calendar and Event Management */}
//           <Typography variant="h4" gutterBottom>
//             Event Calendar
//           </Typography>

//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             initialView="dayGridMonth"
//             editable={isAdmin} // Allow drag/drop/edit only for admin
//             selectable={isAdmin} // Allow selection only for admin
//             events={events} // Pass dynamic events
//             select={handleDateSelect} // Admin can create events
//             eventClick={handleEventClick} // Click to see event details
//           />

//           {/* Dialog for Creating Event */}
//           <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//             <DialogTitle>Create New Event</DialogTitle>
//             <DialogContent>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 label="Event Title"
//                 fullWidth
//                 value={newEvent.title}
//                 onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//               />
//               <Button onClick={handleCreateEvent} variant="contained" sx={{ mt: 2 }}>
//                 Create Event
//               </Button>
//             </DialogContent>
//           </Dialog>

//           <Outlet />
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default AdminHomeScreen;

import React, { useState, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Event as EventIcon,
  EventNote as EventNoteIcon,
  PeopleAlt as PeopleAltIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Brightness4,
  Brightness7
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

const drawerWidth = 240;

const AdminHomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleEventClick = (info) => {
    navigate(`/event-details/${info.event.id}`);
  };

  const handleDateSelect = (selectInfo) => {
    if (isAdmin) {
      setNewEvent({ ...newEvent, date: selectInfo.startStr });
      setOpenDialog(true);
    } else {
      alert('Only Admin can create events.');
    }
  };

  const handleCreateEvent = async () => {
    if (newEvent.title && newEvent.date) {
      try {
        const response = await axios.post('http://localhost:2001/university_event/event/create', {
          title: newEvent.title,
          start: newEvent.date,
        });
        const createdEvent = response.data;
        setEvents([...events, createdEvent]);
        setOpenDialog(false);
      } catch (error) {
        console.error('Error creating event:', error);
      }
    }
  };

  useEffect(() => {
    // Fetch existing events from the server
    axios.get('http://localhost:2001/university_event/event')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Admin-HomeScreen' },
    { text: 'Users', icon: <PersonIcon />, path: '/Admin-HomeScreen/user' },
    { text: 'Create Events', icon: <EventIcon />, path: '/Admin-HomeScreen/create-events' },
    { text: 'Events List', icon: <EventNoteIcon />, path: '/Admin-HomeScreen/events-list' },
    { text: 'Participants', icon: <PeopleAltIcon />, path: '/Admin-HomeScreen/participants' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ zIndex: '1201', background: 'linear-gradient(to right bottom,#134B70 60%,#201E43 40%' }}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>

            <img style={{ width: '6rem' }} src="src/assets/CDAC.png" alt="CDAC" />

            <Typography variant="h6" sx={{ flexGrow: 2 }}>
              Admin Dashboard
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
          <List>
            {navItems.map((item, index) => (
              <ListItem button component={Link} to={item.path} key={index}>
                <ListItemIcon sx={{ color: darkMode ? '#fff' : '#666' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: darkMode ? '#fff' : '#000' }} />
              </ListItem>
            ))}
            <Divider />
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          <Typography variant="h4" gutterBottom>
            Event Calendar
          </Typography>

          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable={isAdmin}
            selectable={isAdmin}
            events={events.map(event => ({
              ...event,
              url: `/event-details/${event.id}` // Makes the event title a clickable link
            }))}
            select={handleDateSelect}
            eventClick={handleEventClick}
          />

          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Create New Event</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Event Title"
                fullWidth
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <Button onClick={handleCreateEvent} variant="contained" sx={{ mt: 2 }}>
                Create Event
              </Button>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminHomeScreen;
