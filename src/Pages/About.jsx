import React from "react";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import AboutUs from "../assets/AboutUs.jpg";
import { Box, Typography } from "@mui/material";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <Box
        sx={{ width: "80vw", display: "flex",flexDirection:'column',alignItems:'center',margin:'1rem auto 1rem' }}
      >
        <img
          src={AboutUs}
          alt="AboutUs"
          style={{ height: "11rem",width:'20rem'}}
        />
          <Typography sx={{ mb: 9, textAlign: "justify" }}>
            <h4 >Welcome to CDAC Delhi Events!</h4>
            <p>At CDAC, we believe that university life is a vibrant mix of
            academic excellence, cultural diversity, and social engagement. Our
            University Events Platform is your one-stop destination to explore
            and book a wide range of events happening on campus. From
            intellectual discussions and academic workshops to cultural
            celebrations and exciting social gatherings, we’ve got something for
            everyone. </p>
            <br />
            <h5>What We Offer :-</h5>
            <p>Our platform is designed to keep you
            connected with everything happening at CDAC. Whether
            you’re interested in expanding your knowledge, meeting new people,
            or experiencing different cultures, our events bring the university
            community together. With just a few clicks, you can:</p> 
            <ul>
            <li><p><strong> Explore Academic Events: </strong>Attend lectures, seminars, and workshops that will
            enrich your academic journey, hosted by renowned professors and
            guest speakers.</p></li>
            <li><p><strong> Celebrate Cultural Diversity: </strong>Participate in
            cultural festivals, performances, and art exhibits that showcase the
            talents and traditions from around the world. </p></li>
            <li><p><strong>Engage in Social Events: </strong>Join social events like parties, mixers, and student
            organization activities that help build friendships and create
            lasting memories. </p></li>
            </ul>
            <br />
            <h5> Why Choose Us? </h5>
            <ul>
            <li>
            <p><strong>Academic Excellence: </strong>Our platform features a wide range of academic events that allow students and
            faculty to engage with cutting-edge research, innovative ideas, and
            intellectual discussions. </p>
            </li>
            <li>
            <p><strong>Cultural Experiences:</strong> Discover and celebrate the diverse cultures within our university through events
            that highlight music, dance, cuisine, and traditions from different
            communities.</p>
            </li>
            <li>
            <p><strong>Social Connections:</strong> We make it easy for you to find and
            attend social events where you can meet new people, relax, and make
            the most of your university experience.</p>
            </li>
            <li>
            <p><strong>Simple Booking: </strong>Easily browse and book events, with instant confirmations and real-time
            updates about upcoming activities.</p>
            </li>
            </ul>
            <br />
            <h5>Our Mission :-</h5>
            <p>We are dedicated to fostering a vibrant and inclusive campus culture that supports
            academic growth, celebrates cultural diversity, and enhances social
            interaction. Through our events, we aim to: </p>
            <ul>
            <li>
            <p><strong>Enhance Academic Engagement: </strong>Provide opportunities for students to deepen their
            learning and explore new fields of knowledge. </p></li>
            <li>
            <p><strong>Promote Cultural Understanding: </strong>Offer a platform for students to experience and
            appreciate the rich diversity of our university community. </p></li>
            <li>
            <p><strong>Build Social Connections: </strong>Create spaces where students, faculty, and staff
            can connect, collaborate, and enjoy university life together. </p></li>
            </ul>
            <br />
            <h5>Join the Experience :-</h5> We invite you to be part of this dynamic university
            community. Whether you’re looking to gain knowledge, celebrate
            diversity, or meet new friends, [University Name] Events has
            something for you. Explore our academic, cultural, and social
            events, and make the most of your university experience. Let’s
            learn, celebrate, and connect together!
          </Typography>
      </Box>
      <Footer />
    </div>
  );
}

export default About;

