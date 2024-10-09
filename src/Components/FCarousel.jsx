// export default FCarousel;
import React, { useState, useEffect } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Pause, PlayArrow } from "@mui/icons-material";

const logos = [
  {
    src: "src/assets/FCarouselpic/g20.jpg",
   
    link: "https://www.g20.org/en/",
  },
  {
    src: "src/assets/FCarouselpic/digital_india.jpg",
    
    link: "https://www.digitalindia.gov.in/",
  },
  {
    src: "src/assets/FCarouselpic/My Gov.jpg",
    
    link: "https://www.mygov.in/",
  },
  {
    src: "src/assets/FCarouselpic/Meity.jpg",
   
    link: "https://www.meity.gov.in/",
  },
  {
    src: "src/assets/FCarouselpic/india-gov-img.png",
    
    link: "https://www.india.gov.in/",
  },
  {
    src: "src/assets/FCarouselpic/data_gov-in.png",
    
    link: "https://www.data.gov.in/",
  },
  {
    src: "src/assets/FCarouselpic/egreetings.png",
 
    link: "https://egreetings.gov.in/",
  },
  {
    src: "src/assets/FCarouselpic/india-gov-img.png",
    
    link: "https://www.india.gov.in/",
  },
  {
    src: "src/assets/FCarouselpic/data_gov-in.png",
    
    link: "https://www.data.gov.in/",
  },
  {
    src: "src/assets/FCarouselpic/egreetings.png",
 
    link: "https://egreetings.gov.in/",
  },
];

const FCarousel = () => {
  const [start, setStart] = useState(0);
  const maxDisplay = 7; // Number of logos visible at a time
  const intervalTime = 3000; // Time interval for automatic change
  const [isPlaying, setIsPlaying] = useState(true); // Play/Pause state

  // Handle next slide
  const handleNext = () => {
    if (start >= logos.length - maxDisplay) {
      setStart(0); // Restart carousel when end is reached
    } else {
      setStart((prevStart) => prevStart + 1);
    }
  };

  // Handle previous slide
  const handlePrevious = () => {
    if (start <= 0) {
      setStart(logos.length - maxDisplay); // Go to the end when reaching the first logo
    } else {
      setStart((prevStart) => prevStart - 1);
    }
  };

  // Automatic slide change every `intervalTime` if playing
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(handleNext, intervalTime);
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isPlaying, start]);

  // Toggle Play/Pause
  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#A9F4D8", // Qua green color
        p: 1,
        borderRadius: "5px",
        // mt: 4,
        position: "relative",
        overflow: "hidden", // Ensure grid doesn't overflow
      }}
    >
      {/* Previous Button */}
      <IconButton onClick={handlePrevious} sx={{ zIndex: 1 }}>
        <ArrowBackIos sx={{ color: "#fff" }} />
      </IconButton>

      {/* Logos Grid */}
      <Grid
        container
        spacing={1}
        justifyContent="center"
        // sx={{
        //   transition: "transform 0.5s ease-in-out", // Smooth scroll effect
        //   transform: `translateX(-${start * (100 / maxDisplay)}%)`, // Dynamically calculate based on position
        // }}
      >
        {logos.concat(logos).slice(start, start + maxDisplay).map((logo, index) => (
          <Grid
            item
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "170px",
              height: "100px", // Ensure grid is uniform in size
            
            }}
          >
            <Box
              component="a"
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                justifyContent:'center',
                alignItems:'center',
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                backgroundColor: "#E5FCF3",
                p: 2,
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  marginBottom: "8px",
                  objectFit: "contain" // Keep all images same size
                
                }}
              />
              <Typography variant="subtitle1" align="center" color="textPrimary">
                {logo.alt}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Next Button */}
      <IconButton onClick={handleNext} sx={{ zIndex: 1 }}>
        <ArrowForwardIos sx={{ color: "#fff" }} />
      </IconButton>

      {/* Play/Pause Button */}
      {/* <IconButton
        onClick={togglePlayPause}
        sx={{ position: "absolute", bottom: 10, right: 10, color: "#fff" }}
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton> */}
    </Box>
  );
};

export default FCarousel;
