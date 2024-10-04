import React, { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/header";

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    // dob: "",
    gender: "",
    email: "",
    zip_code: "",
    phone: "",
    password: "",
    // confirmPassword: "",
    role: 'ALUMNI',
  });

  const [formData2, setFormData2] = useState({
    firstName: "",
    lastName: "",    
    city: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    city: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (["firstName", "lastName", "city"].includes(name)) {
      if (/^[A-Za-z ]*$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
        setFormData2((prevFormData2) => ({
          ...prevFormData2,
          [name]: value,
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Only letters are allowed",
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prev) => !prev);
  };
  
  const handlePasswordVisibilityToggle2 = () => {
    setShowPassword2((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const dataToSubmit = { ...formData, ...formData2 };
    
    try {
      const response = await axios.post("http://localhost:2001/university_event/user/register", dataToSubmit);
      console.log("Response:", response.data);
      
      // Handle successful response, e.g., navigate based on role
      if (formData.role === 'ADMIN' || formData.role === 'FACULTY') {
        navigate("/dashboard");
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error response
    }
  };

  return (
    <div>
      <Header/>
    <div style={{ position: 'relative', marginTop:'2.5rem' }}>
     
      <Container component="main" maxWidth="xs" sx={{ position: "relative", mt: 2, mb: 7 }}>
        <Paper elevation={3} style={{ padding: "8px 16px 10px" }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Registration
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <TextField
                  size="small"
                  label="First Name"
                  name="firstName"
                  value={formData2.firstName}
                  onChange={handleChange}
                  helperText={errors.firstName}
                  error={Boolean(errors.firstName)}
                  fullWidth
                  required
                />
                <TextField
                  size="small"
                  label="Last Name"
                  name="lastName"
                  value={formData2.lastName}
                  onChange={handleChange}
                  helperText={errors.lastName}
                  error={Boolean(errors.lastName)}
                  fullWidth
                  required
                />
              </Stack>
              {/* <Stack direction={"row"} spacing={2}>
                <TextField
                  size="small"
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  required
                /> */}
                {/* <TextField
                  select
                  size="small"
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField> */}
              {/* </Stack> */}
              <TextField
                size="small"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                size="small"
                label="Phone"
                name="phone"
                type="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />

              <TextField
                size="small"
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibilityToggle} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {/* <TextField
                size="small"
                label="Confirm Password"
                name="confirmPassword"
                type={showPassword2 ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibilityToggle2} edge="end">
                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /> */}
              <Stack direction={'row'} spacing={2}>
              <TextField
                size="small"
                label="zip_code"
                name="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                fullWidth
                required
              />
                
                <TextField
                  size="small"
                  label="City"
                  name="city"
                  value={formData2.city}
                  onChange={handleChange}
                  helperText={errors.city}
                  error={Boolean(errors.city)}
                  fullWidth
                  required
                />
              </Stack>
              <TextField
                select
                size="small"
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                fullWidth
                required
              >
                 
                <MenuItem value="EVENT_ORGNIZER">Event Organizer</MenuItem>
                <MenuItem value="FACULTY">Faculty</MenuItem>
                <MenuItem value="ALUMNI">Alumni</MenuItem>
              </TextField>
              <Button type="submit" variant="contained" color="primary">
                <b>Register</b>
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
      {/* <Footer /> */}
    </div>
    </div>
  );
};

export default SignUpScreen;
