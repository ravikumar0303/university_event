import React from "react";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import Footer from "../Components/footer";
import FCarousel from "../Components/FCarousel";

function ContactUs() {
  return (
    <div>
      <Header />
      <Navbar />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: "75%",
            padding: "1rem .7rem 2rem .4rem",
            mt: 1.5,
            borderRadius: "8px",
            // boxShadow: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "2rem",
                fontWeight: "550",
                textShadow: "0 1px 5px #999",
              }}
            >
              Contact Us
            </Typography>

            <Box sx={{ textAlign: "justify" }}>

              <Typography sx={{ ml: 6, mt: 2, fontSize: "1.1rem" }}>
                Address :
              </Typography>
              <Stack direction="row">
                <IconButton>
                  <LocationOnTwoToneIcon sx={{ fontSize: "2rem", mt: -7 }} />
                </IconButton>
                <Typography sx={{ fontSize: ".95rem" }}>
                  Plot no. 20 FC-33 Institutional Area, Jasola, New Delhi 110025
                </Typography>
              </Stack>

              <Typography sx={{ ml: 6, mt: 1.2, fontSize: "1.1rem" }}>
                Email :
              </Typography>
              <Stack direction="row">
                <IconButton>
                  <EmailTwoToneIcon sx={{ fontSize: "1.8rem", mt: -5 }} />
                </IconButton>
                <Typography sx={{ fontSize: ".95rem" }}>
                  support[at]cdac[dot]com
                </Typography>
              </Stack>

              <Typography sx={{ ml: 6, mt: 1, fontSize: "1.1rem" }}>
                Call :
              </Typography>
              <Stack direction="row">
                <IconButton>
                  <CallTwoToneIcon sx={{ fontSize: "1.8rem", mt: -4 }} />
                </IconButton>
                <Typography sx={{ fontSize: ".95rem" }}>
                  011-2651 0221
                </Typography>
              </Stack>

              <Typography sx={{ ml: 6, mt: 1, fontSize: "1.1rem" }}>
                Open Hours :
              </Typography>
              <Stack direction="row">
                <IconButton>
                  <AccessTimeTwoToneIcon sx={{ fontSize: "1.9rem", mt: -4 }} />
                </IconButton>
                <Typography sx={{ fontSize: ".95rem" }}>
                  Mon - Fri: 9 AM - 5:30 PM
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
      <FCarousel/>
      <Footer/>
    </div>
  );
}

export default ContactUs;
