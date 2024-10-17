import React, { useState } from 'react';
import Axios from 'axios';

const AddEvent = () => {
  const [event, setEvent] = useState({
    name: '',
    venue: '',
    availableSeats: '',
    eventDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API call to create event
    Axios.post('http://localhost:2001/university_event/event/create', event)
      .then(response => {
        alert('Event created successfully!');
      })
      .catch(error => {
        alert('Error creating event.');
      });
  };

  return (
    <div className="add-event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={event.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Venue:</label>
          <input type="text" name="venue" value={event.venue} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Available Seats:</label>
          <input type="number" name="availableSeats" value={event.availableSeats} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="eventDate" value={event.eventDate} onChange={handleInputChange} required />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
