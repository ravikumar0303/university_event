// src/Components/EventCalendar.js
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const role = localStorage.getItem('role');

  useEffect(() => {
    // Fetch events from the server
    axios.get('http://localhost:2001/university_event/event/allEvent')
      .then(response => setEvents(response.data))
      .catch(err => alert('Error fetching events: ' + err.message));
  }, []);

  const handleDateClick = (info) => {
    if (role === 'ADMIN' || role === 'EVENT_ORGANIZER') {
      // const title = prompt('Enter event title:');
      navigate('/add-event');
    //  else {
      navigate('/User-HomeScreen');
    }
      

      // Post new event to the backend
      //   axios.post('http://localhost:2001/university_event/event/create', newEvent)
      //     .then(() => {
      //       setEvents([...events, newEvent]);
      //       alert('Event created successfully!');
      //     })
      //     .catch(err => alert('Error creating event: ' + err.message));
      // }
    // } else {
    //   alert('Only Admin or Event Organizer can create events.');
    // }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
    />
  );
};

export default EventCalendar;
