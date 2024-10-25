// src/Components/CreateEvent.js
import React, { useState } from 'react';
import { TextField, Button, Container, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [venue, setVenue] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [eventDate, setEventDate]= useState('');
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { name, venue, availableSeats, eventDate};

    axios.post('http://localhost:2001/university_event/event/create', event)
      .then(() => {
        alert('Event created successfully!');
        navigate('/dashboard/events-list');
      })
      .catch(err => alert('Error creating event: ' + err.message));
  };

  return (
    
    <Container maxWidth="md" sx={{display:'flex',justifyContent: "center",
      alignItems: "center",py:2,px:2}}>
      <Paper elevation={10} sx={{display:'flex',flexDirection:'column',alignItems:'center',pt:2 ,pb:2.7,px:4}}>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          size='small'
          label="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
        <TextField
        size='small'
          label="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          fullWidth
          required
          style={{ marginTop: '1rem' }}
        />
        <TextField
        size='small'
          label="Available Seats"
          value={availableSeats}
          type="number"
          onChange={(e) => setAvailableSeats(e.target.value)}
          fullWidth
          required
          style={{ marginTop: '1rem' }}
        />
         <TextField
         size='small'
          // label="Event Date"
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          fullWidth
          required
          style={{ marginTop: '1rem' }}
        />
        <Button type="submit" variant="contained" color="primary" style={{ display: 'block',         // Makes it take the full width of its parent div
    margin:'1.5rem auto 0'}}>
          Create Event
        </Button>
      </form>
      </Paper>
    </Container>
  );
};

export default CreateEvent;



