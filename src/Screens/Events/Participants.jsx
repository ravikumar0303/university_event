import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2001/university_event/ticket')
      .then(response => setParticipants(response.data))
      .catch(err => alert('Error fetching participants: ' + err.message));
  }, []);

  return (
    <TableContainer component={Paper} sx={{ margin: 2 }}>
      <h2 style={{ textAlign: 'center' }}>Participants List</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>           
            <TableCell>Email</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Event Date</TableCell>
            <TableCell>Booking Date</TableCell>
            {/* <TableCell>QR Code</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {participants.map((participant) => (
            <TableRow key={participant.id}>
              <TableCell>{participant.id}</TableCell>
              <TableCell>{participant.user.firstName} {participant.user.lastName}</TableCell>
              <TableCell>{participant.user.email}</TableCell>
              <TableCell>{participant.event.name}</TableCell>
              <TableCell>{new Date(participant.event.eventDate).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(participant.bookingDate).toLocaleDateString()}</TableCell>
              {/* <TableCell>
                {participant.qr_code ? (
                  <img src={`data:image/png;base64,${participant.ticket.qrCode}`} alt="QR Code" style={{ width: '50px', height: '50px' }} />
                ) : (
                  'No QR Code'
                )}
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Participants;