// src/Components/CreateEvent.js
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
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
    <Container>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          fullWidth
          required
          style={{ marginTop: '1rem' }}
        />
        <TextField
          label="Available Seats"
          value={availableSeats}
          type="number"
          onChange={(e) => setAvailableSeats(e.target.value)}
          fullWidth
          required
          style={{ marginTop: '1rem' }}
        />
         <TextField
          // label="Event Date"
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          fullWidth
          required
          style={{ marginTop: '1rem' }}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Create Event
        </Button>
      </form>
    </Container>
  );
};

export default CreateEvent;

