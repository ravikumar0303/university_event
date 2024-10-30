import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../Components/header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "How can I register for an event ?",
      answer:
        "You can register for an event by logging into your student account, going to the Events section, and selecting 'Register' for the desired event.",
    },
    {
      question: "Where can I find details of upcoming events ?",
      answer:
        "All upcoming university events are listed in the Events section of the university website, including dates, venues, and registration details.",
    },
    {
      question: "Are university events open to non-students ?",
      answer:
        "Most university events are open to students and staff only. However, some events allow for guest registration. Check the event details to confirm.",
    },
    {
      question: "Can I cancel my event registration ?",
      answer:
        "Yes, you can cancel your registration up to 24 hours before the event by navigating to 'My Events' in your student account and selecting 'Cancel Registration'.",
    },
    {
      question: "Do I need to bring an ID for event entry ?",
      answer:
        "Yes, please bring your student ID or a government-issued ID for entry to university events. Check the specific event instructions for additional details.",
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <Container sx={{ height: "fit-content" }}>
        <Paper
          elevation={6}
          sx={{
            mt: 4,mb:8,
            backgroundColor: "#fff",
            padding: "15px 35px 25px",
            borderRadius: "8px",
          }}
        >
          
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#3A4664",textShadow:'0 1.4px 1px #777' }}
          >
            Frequently Asked Questions
          </Typography>
          <Divider variant="middle" sx={{ mb: 4, backgroundColor: "#333", height: "2px"}} />
        
          {faqData.map((faq, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
              sx={{
                backgroundColor: "#fff",
                marginBottom: 2,
                border: "2.2px solid #3A4664",
                borderRadius: "9px",
                boxShadow:
                  expanded === `panel${index}`
                    ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
                    : "none",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#aaa",zIndex:'10' }} />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  backgroundColor:
                    expanded === `panel${index}` ? "#3A4664" : "none",
                  backgroundImage:
                    expanded === `panel${index}` ? "none" : "linear-gradient(to bottom, #fff, #d8e5f2)",
                  color: expanded === `panel${index}` ? "#fff" : "#222",
                  transition: "background-color 0.2s ease, color 0.2s ease,background-image 0.2s ease",
                  borderRadius: "6px",
                  overFlow:'hidden',
                  padding: "1px 20px ",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  color: "#222",
                  borderRadius: "8px",
                }}
              >
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default Faq;


