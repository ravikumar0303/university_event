import React, { useState } from 'react';
import axios from 'axios';
import { Button, Box, Typography } from '@mui/material';

const BookEvent = () => {
  const [qrCode, setQrCode] = useState(null);
  const [message, setMessage] = useState('');

  // Function to book the event and get the QR code
  const bookTicket = async () => {
    try {
      const eventId = 17; // Example eventId, replace with actual
      const userId = 1;  // Example userId, replace with actual

      // API call to book the ticket
      const response = await axios.post(`http://localhost:2001/university_event/event/${eventId}/book`, null, {
        params: {
          userId: userId
        }
      });

      // Assuming response contains ticket with QR code in base64 format
      const qrCodeBase64 = response.data.qrCode;

      // Set the QR code in the state to display it
      setQrCode(qrCodeBase64);
      setMessage('Ticket booked successfully! Scan the QR code below:');
    } catch (error) {
      setMessage('Failed to book the ticket: ' + error.response.data);
    }
  };

  return (
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

      {/* Display the QR code image if available */}
      {qrCode && (
        <Box mt={3}>
          <img 
            src={`data:image/png;base64,${qrCode}`} 
            alt="QR Code Ticket" 
            style={{ width: '250px', height: '250px' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default BookEvent;
