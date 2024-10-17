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
      question: "What is full-stack development?",
      answer:
        "Full-stack development refers to the development of both front-end and back-end portions of a web application.",
    },
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library used for building user interfaces, especially single-page applications.",
    },
    {
      question: "How does Node.js work?",
      answer:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing server-side execution of JavaScript code.",
    },
    {
      question: "What is full-stack development?",
      answer:
        "Full-stack development refers to the development of both front-end and back-end portions of a web application.",
    },
    // Add more questions and answers here
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <Container sx={{ height: "fit-content" }}>
        <Paper
          elevation={6}
          sx={{
            my: 4,
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "10px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#333" }}
          >
            Frequently Asked Questions
          </Typography>
          <Divider sx={{ mb: 4, backgroundColor: "#444", height: "2px" }} />
          {faqData.map((faq, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
              sx={{
                backgroundColor: "#fff",
                marginBottom: 2,
                border: "2px solid #3A4664",
                borderRadius: "9px",
                boxShadow:
                  expanded === `panel${index}`
                    ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
                    : "none",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#aaa" }} />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  backgroundColor:
                    expanded === `panel${index}` ? "#3A4664" : "#f5f5f5",
                  color: expanded === `panel${index}` ? "#fff" : "#333",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  borderRadius: "6px",
                  padding: "2px 20px",
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
