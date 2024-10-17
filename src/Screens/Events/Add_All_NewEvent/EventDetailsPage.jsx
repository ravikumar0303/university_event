// // import React from 'react';
// // import { useParams } from 'react-router-dom';

// // const EventDetails = () => {
// //   const { id } = useParams();

// //   return (
// //     <div>
// //       <h2>Event Details</h2>
// //       <p>Details for event ID: {id}</p>
// //       {/* Fetch and display more event details here using the event ID */}
// //     </div>
// //   );
// // };

// // export default EventDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Typography } from '@mui/material';

// const EventDetailsPage = () => {
//   const { eventId } = useParams();
//   const [eventDetails, setEventDetails] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:2001/university_event/event/${eventId}`)
//       .then(response => {
//         setEventDetails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching event details:', error);
//       });
//   }, [eventId]);

//   return (
//     <Box>
//       {eventDetails ? (
//         <div>
//           <Typography variant="h4">{eventDetails.title}</Typography>
//           <Typography variant="body1">Date: {eventDetails.date}</Typography>
//           <Typography variant="body1">Venue: {eventDetails.venue}</Typography>
//         </div>
//       ) : (
//         <Typography>Loading event details...</Typography>
//       )}
//     </Box>
//   );
// };

// export default EventDetailsPage;
