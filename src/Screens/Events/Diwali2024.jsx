import React from "react";
import { Typography, Button, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";

function EventList2() {
  return (
    <div style={{ 
      minHeight: "50vh", 
      background: "linear-gradient(to bottom right, #f3e5f5, #f48fb1)", // gradient background
      padding: "2rem",
      borderRadius: "12px",
    }}>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Container
        component={Paper}
        elevation={6}
        sx={{
          maxWidth: "700px",
          padding: "2rem",
          textAlign: "center",
        //   marginTop: "3rem",
          backgroundColor: "rgba(255, 255, 255, 0.85)", // translucent white
          borderRadius: "12px",
        }}
      >
        <Typography variant="h4" color="secondary" sx={{ fontWeight: "bold", mb: 2 }}>
          Diwali Celebration
        </Typography>
        
        <Typography variant="h5" color="primary" sx={{ mb: 1 }}>
          Social / Cultural
        </Typography>
        
        <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
          Thu, 31/10/2024 - 09:15 to 18:00
        </Typography>
        
        <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#673ab7" }}>
            Venue
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            CDAC Acts Delhi 
          </Typography>
        </div>

        <Button
          component={Link}
          to="/book-event"
          variant="contained"
          color="secondary"
          sx={{
            padding: "0.6rem 2rem",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px",
            ":hover": { backgroundColor: "#e91e63" }
          }}
        >
          Book Event
        </Button>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default EventList2;
