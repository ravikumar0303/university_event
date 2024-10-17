// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Box, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const BookEvent = () => {
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   // Function to book the event and get the QR code
//   const bookTicket = async () => {
//     try {
//       const eventId = 17; // Example eventId, replace with actual
//       const userId = 1;   // Example userId, replace with actual

//       // API call to book the ticket
//       const response = await axios.post(`http://localhost:2001/university_event/event/${eventId}/book`, null, {
//         params: {
//           userId: userId
//         }
//       });
//        if(confirm('IF You want to book a ticket Then Click "Ok"')){
//       // Assuming response contains ticket with QR code in base64 format
//       const qrCodeBase64 = response.data.qrCode;

//       // Redirect to the QR Code page with the QR code as a state
//       navigate('/qr-code', { state: { qrCode: qrCodeBase64 } });}
//     } catch (error) {
//       setMessage('Failed to book the ticket: ' + error.response.data);
//     }
//   };

//   return (
//    <>
   
//     <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
//       <Typography variant="h4">Book Your Event Ticket</Typography>

//       {/* Button to book the event */}
//       <Button variant="contained" color="primary" onClick={bookTicket} style={{ marginTop: '20px' }}>
//         Book Ticket
//       </Button>

//       {/* Display message after booking */}
//       {message && (
//         <Typography variant="body1" color="textPrimary" style={{ marginTop: '20px' }}>
//           {message}
//         </Typography>
//       )}
//     </Box>
//     </>
//   );
// };

// export default BookEvent;

// src/Screens/User/BookEvent.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Box, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const BookEvent = () => {
//   const [message, setMessage] = useState('');
//   const [event, setEvent] = useState(null);
//   const [user, setUser] = useState(null);
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [qrCode, setQrCode] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Replace with actual eventId and userId from your application state
//     const eventId = 17; 
//     const userId = 1;

//     // Fetch event details
//     axios.get(`http://localhost:2001/university_event/event/${eventId}`)
//       .then(response => {
//         setEvent(response.data);
//       })
//       .catch(error => {
//         console.error('Failed to fetch event details:', error);
//       });

//     // Fetch user detailsx
//     axios.get(`http://localhost:2001/university_event/user/${userId}`)
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(error => {
//         console.error('Failed to fetch user details:', error);
//       });
//   }, []);

//   // Function to book the event and get the QR code
//   const bookTicket = async () => {
//     try {
//       const eventId = 17; // Example eventId, replace with actual
//       const userId = 1;   // Example userId, replace with actual

//       // API call to book the ticket
//       const response = await axios.post(
//         `http://localhost:2001/university_event/event/${eventId}/book`,
//         null,
//         { params: { userId: userId } }
//       );

//       if (window.confirm('If you want to book a ticket then click "OK"')) {
//         // Assuming response contains ticket with QR code in base64 format
//         const qrCodeBase64 = response.data.qrCode;
//         setQrCode(qrCodeBase64);
//         setBookingSuccess(true);
//         setMessage('Successfully booked your event!');
//       }
//     } catch (error) {
//       setMessage('Failed to book the ticket: ' + error.response.data);
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
//       <Typography variant="h4">Book Your Event Ticket</Typography>

//       {event && user && (
//         <Box mt={3} textAlign="center">
//           <Typography variant="h6">Event: {event.name}</Typography>
//           <Typography variant="body1">Venue: {event.venue}</Typography>
//           {/* <Typography variant="body1">Date & Time: {event.date} at {event.time}</Typography>
//           <Typography variant="h6">User: {user.full_name}</Typography> */}
//         </Box>
//       )}

//       {/* Button to book the event */}
//       {!bookingSuccess && (
//         <Button variant="contained" color="primary" onClick={bookTicket} style={{ marginTop: '20px' }}>
//           Book Ticket
//         </Button>
//       )}

//       {/* Display success message and QR code */}
//       {bookingSuccess && (
//         <Box mt={3} textAlign="center">
//           <Typography variant="body1" color="green">
//             {message}
//           </Typography>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             onClick={() => navigate('/qr-code', { state: { qrCode, event, user } })}
//             style={{ marginTop: '20px' }}
//           >
//             View Your QR Code
//           </Button>
//         </Box>
//       )}

//       {/* Display message after booking */}
//       {message && !bookingSuccess && (
//         <Typography variant="body1" color="error" style={{ marginTop: '20px' }}>
//           {message}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default BookEvent;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../Components/Navbar';
import Header from '../../Components/header';
import Footer from '../../Components/footer';


const BookEvent = () => {
  const [message, setMessage] = useState('');
  const [event, setEvent] = useState('');
  const [user, setUser] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Replace with actual eventId and userId from your application state
    const eventId = 17; 
    const userId = 1;

    // Fetch event details
    axios.get(`http://localhost:2001/university_event/event/${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch event details:', error);
      });

    // Fetch user details
    axios.get(`http://localhost:2001/university_event/user/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch user details:', error);
      });
  }, []);

  // Function to book the event and get the QR code
  const bookTicket = async () => {
    try {
      const eventId = 17; // Example eventId, replace with actual
      const userId = 1;   // Example userId, replace with actual

      // API call to book the ticket
      const response = await axios.post(
        `http://localhost:2001/university_event/event/${eventId}/book`,
        null,
        { params: { userId: userId } }
      );

      if (window.confirm('If you want to book a ticket then click "OK"')) {
        // Assuming response contains ticket with QR code in base64 format
        const qrCodeBase64 = response.data.qrCode;
        setQrCode(qrCodeBase64);
        setBookingSuccess(true);
        setMessage('Successfully booked your event!');
      }
    } catch (error) {
      setMessage('Failed to book the ticket: ' + error.response.data);
    }
  };

  return (
   <>
   <Header/>
   <Navbar/>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
      <Typography variant="h4">Book Your Event Ticket</Typography>

      {/* Display event and user details */}
      {event && user && (
        <Box mt={3} textAlign="center">
          <Typography variant="h6">Event: {event.name}</Typography>
          <Typography variant="body1">Venue: {event.venue}</Typography>
          <Typography variant="body1">Date & Time: {event.eventDate}</Typography>
          <Typography variant="h6">User: {user.name}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
          <Typography variant="body1">Mobile: {user.phone}</Typography>
        </Box>
      )}

      {/* Button to book the event */}
      {!bookingSuccess && (
        <Button variant="contained" color="primary" onClick={bookTicket} style={{ marginTop: '20px' }}>
          Book Ticket
        </Button>
      )}

      {/* Display success message, user, event details, and QR code after successful booking */}
      {bookingSuccess && (
        <Box mt={3} textAlign="center">
          <Typography variant="h6" color="green">
            {message}
          </Typography>
          <Typography variant="body1" mt={2}>
            Event: {event.name} - Venue: {event.venue} - Date: {event.eventDate}
          </Typography>
          <Typography variant="body1" mt={1}>
            User: {user.firstName} {user.lastName} - Email: {user.email} - Mobile: {user.phone}
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/qr-code', { state: { qrCode, event, user } })}
            style={{ marginTop: '20px' }}
          >
            View Your QR Code
          </Button>
        </Box>
      )}

      {/* Display error message if any */}
      {message && !bookingSuccess && (
        <Typography variant="body1" color="error" style={{ marginTop: '20px' }}>
          {message}
        </Typography>
      )}
    </Box>
    <Footer/>
    </>

  );
};

export default BookEvent;