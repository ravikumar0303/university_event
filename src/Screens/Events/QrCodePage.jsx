import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Header from '../../Components/header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/footer';

const QrCodePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the QR code, event, and user details from the state passed via navigation
  const qrCode = location.state?.qrCode;
  const event = location.state?.event;
  const user = location.state?.user;

  // Function to download the QR code as a PNG file
  const downloadQrCode = () => {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${qrCode}`;
    link.download = 'ticket-qr-code.png';
    link.click();
  };

  return (
    <div>
    <Header/>
    <Navbar/>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
      <Typography variant="h5">Your Event QR Code</Typography>

      {/* Display event and user details */}
      {event && user && (
        <Box mt={3} textAlign="center">
          <Typography variant="h6">Event: {event.name}</Typography>
          <Typography variant="body1">Venue: {event.venue}</Typography>
          <Typography variant="body1">Date & Time: {event.eventDate}</Typography>
          <Typography variant="h6">Booked by: {user.firstName} {user.lastName}</Typography>
        </Box>
      )}

      {/* Display the QR code image */}
      {qrCode && (
        <Box mt={3}>
          <img 
            src={`data:image/png;base64,${qrCode}`} 
            alt="QR Code Ticket" 
            style={{ width: '250px', height: '250px' }}
          />
        </Box>
      )}

      {/* Button to download the QR code */}
      <Button variant="contained" color="primary" onClick={downloadQrCode} style={{ marginTop: '20px' }}>
        Download QR Code
      </Button>

      {/* Option to go back to the booking page */}
      <Button variant="outlined" color="secondary" onClick={() => navigate('/event-cal')} style={{ marginTop: '20px' }}>
        Back to Event Booking
      </Button>
    </Box>
    <Footer/>
    </div>
  );
};

export default QrCodePage;
