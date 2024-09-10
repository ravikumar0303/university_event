import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import MuiNavbar from "../Components/MuiNavbar";

// Function to generate a random 6-digit OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

function Otp() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [step, setStep] = useState("send"); // 'send' or 'verify'

  const navigate = useNavigate();

  const sendOtp = () => {
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setStep("verify");
    alert(`OTP for ${emailOrMobile}: ${otp}`);
  
  };

  const verifyOtp = () => {
    
    if (otp === generatedOtp) {
      navigate("/dashboard");
    } else {
      alert("OTP is incorrect");
    }
  };

  return (
    <div >
        <MuiNavbar/>
        <Box 
         maxWidth="xs"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          padding: "2rem",
          marginTop: "-5rem",
        }}>
        <Paper
        elevation={6}
        sx={{
          width: "35%",
          padding: ".4rem 1rem 1rem 1rem",
          borderRadius: "12px",
          boxShadow: 10,
        }}>
    <div style={{ margin: "1rem auto", textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Enter Otp
      </Typography>
      {step === "send" ? (
        <div>
          
            <TextField
              
              onChange={(e) => setEmailOrMobile(e.target.value)}
              size="small"
              id="outlined-basic"
              label="Enter your Mobile No."
              variant="outlined"
              sx={{ mb:4,mt:.5}}
            />
          <div>
          <Button variant="contained" onClick={sendOtp}>
            Send Otp
          </Button>
          </div>
        </div>
      ) : (
        <div>
          <TextField
            onChange={(e) => setOtp(e.target.value)}
            size="small"
            id="outlined-basic"
            label="Enter Otp"
            variant="outlined"
            sx={{ mb:4,mt:.5}}
          />
          <div>
          <Button variant="contained" onClick={verifyOtp}>
            Verify Otp
          </Button>
          </div>
        </div>
      )}
    </div>
    </Paper>
    </Box>
    <Footer style={{position:'absolute',bottom:'10px'}}/>
    </div>
  );
}

export default Otp;
