<<<<<<< HEAD

=======
>>>>>>> d6528508e0051fe5d5591fa029feff1e479beab9
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

const BookEvent = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Function to book the event and get the QR code
  const bookTicket = async () => {
    try {
      const eventId = 17; // Example eventId, replace with actual
      const userId = 1;   // Example userId, replace with actual

      // API call to book the ticket
      const response = await axios.post(`http://localhost:2001/university_event/event/${eventId}/book`, null, {
        params: {
          userId: userId
        }
      });

      // Assuming response contains ticket with QR code in base64 format
      const qrCodeBase64 = response.data.qrCode;

      // Redirect to the QR Code page with the QR code as a state
      navigate('/qr-code', { state: { qrCode: qrCodeBase64 } });
    } catch (error) {
      setMessage('Failed to book the ticket: ' + error.response.data);
    }
  };

  return (
   <>
    <Navbar/>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
      <Typography variant="h4">Book Your Event Ticket</Typography>

      {/* Button to book the event */}
      <Button variant="contained" color="primary" onClick={bookTicket} style={{ marginTop: '20px' }}>
        Book Ticket
      </Button>

      {/* Display message after booking */}
      {message && (
        <Typography variant="body1" color="textPrimary" style={{ marginTop: '20px' }}>
          {message}
        </Typography>
      )}
    </Box>
    </>
  );
};

export default BookEvent;