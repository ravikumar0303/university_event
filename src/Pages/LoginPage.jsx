// import React, { useState, useEffect, useRef } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   Box,
//   Typography,
//   Paper,
//   Stack,
//   IconButton,
//   InputAdornment
// } from "@mui/material";
// import ReplayIcon from "@mui/icons-material/Replay";
// import { Link, useNavigate } from 'react-router-dom';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import "./LoginPage.css";
// // import MuiNavbar from "../Components/Navbar";
// // import Footer from "../Components/Footer";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [captchaText, setCaptchaText] = useState("");
//   const [userInput, setUserInput] = useState("");
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     initializeCaptcha(ctx);
//   }, []);

//   const handlePasswordVisibilityToggle = () => {
//     setShowPassword((prev) => !prev);
    
//   };

//   const generateRandomChar = (min, max) =>
//     String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

//   const generateCaptchaText = () => {
//     let captcha = "";
//     for (let i = 0; i < 3; i++) {
//       captcha += generateRandomChar(65, 90);
//       captcha += generateRandomChar(97, 122);
//       // captcha += generateRandomChar(48, 57);
//     }
//     return captcha
//       .split("")
//       .sort(() => Math.random() - 0.5)
//       .join("");
//   };

//   const drawCaptchaOnCanvas = (ctx, captcha) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     const textColors = ["rgb(0,0,0)", "rgb(5, 78, 165)"];
//     const letterSpace = 120 / captcha.length;
//     for (let i = 0; i < captcha.length; i++) {
//       const xInitialSpace = 10;
//       ctx.font = "16px Roboto Mono";
//       ctx.fillStyle = textColors[Math.floor(Math.random() * 2)];
//       ctx.fillText(
//         captcha[i],
//         xInitialSpace + i * letterSpace,

//         // Randomize Y position slightly
//         Math.floor(Math.random() * 5 + 14),
//         100
//       );
//     }
//   };

//   const initializeCaptcha = (ctx) => {
//     setUserInput("");
//     const newCaptcha = generateCaptchaText();
//     setCaptchaText(newCaptcha);
//     drawCaptchaOnCanvas(ctx, newCaptcha);
//   };

//   const handleUserInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login submission
//     if(formData.email === 'abhishekmishra101120@gmail.com' & formData.password ==='Abhi' ){
//     if (userInput === captchaText) {
//       navigate('/otp'); // Redirect to a dashboard or another page
//     } else {
//       alert('Invalid Captcha');
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");
//       initializeCaptcha(ctx);
//     }}
//     else
//     {alert('Invalid UserName or Paasword');
//     }
    
//   };

//   return (
//     <div>
   
//     <Container
//       component="main"
//       maxWidth="xs"
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         padding: "2rem",
//         marginTop: "-4rem",
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           width: "80%",
//           padding: "1rem 0rem 1rem",
//           borderRadius: "12px",
//           boxShadow: 10,
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography
//             component="h1"
//             variant="h4"
//             sx={{
//               marginBottom: "1rem",
//               fontWeight: "bold",
//               color: "primary.main",
//             }}
//           >
//             Sign In
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0 }}>
//             <Stack spacing={2} >
//               <TextField
//               size="small"
//                 margin="dense"
//                 required
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 sx={{ height: "40px"}}
//               />
//               <TextField
//               size="small"
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={handleChange}
//                 sx={{ height: "50px" }}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={handlePasswordVisibilityToggle}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <div className="wrapper">
//                 <canvas ref={canvasRef} width="132" height="20"></canvas>

//                 <IconButton
//                   onClick={() =>
//                     initializeCaptcha(canvasRef.current.getContext("2d"))
//                   }
//                 >
//                   <ReplayIcon id="reload-button" />
//                 </IconButton>
//               </div>
//               {/* <input
//                 type="text"
//                 id="user-input"
                
//                 placeholder="Enter Captcha"
//                 value={userInput}
//                 onChange={handleUserInputChange}
//               /> */}
//               <TextField
//               size="small"
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Enter Captcha"
//                 name="captcha"
//                 type="text"
//                 value={userInput}
//                 onChange={handleUserInputChange}
//                 sx={{ height: "50px" }}
//               />


//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{
//                   mt: 2,
//                   padding: "0.2.5rem",
//                   fontSize: "1rem",
//                   fontWeight: "bold",
//                   borderRadius: "8px",
//                 }}
//               >
//                 Login
//               </Button>
//             </Stack>
//             <Typography sx={{mt:1.5}}>Don't have an account <span style={{color:'#2196f3',fontWeight:'550'}}><Link to='/registration'>Register</Link></span></Typography>
//           </Box>
//         </Box>
//       </Paper>
//     </Container>

//     </div>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Paper,
  Stack,
  IconButton,
  InputAdornment
} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Axios from 'axios'; // Axios for API calls
import "./LoginPage.css";
import Header from "../Components/header";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    initializeCaptcha(ctx);
  }, []);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const generateRandomChar = (min, max) =>
    String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

  const generateCaptchaText = () => {
    let captcha = "";
    for (let i = 0; i < 3; i++) {
      captcha += generateRandomChar(65, 90);
      captcha += generateRandomChar(97, 122);
    }
    return captcha
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  const drawCaptchaOnCanvas = (ctx, captcha) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const textColors = ["rgb(0,0,0)", "rgb(5, 78, 165)"];
    const letterSpace = 120 / captcha.length;
    for (let i = 0; i < captcha.length; i++) {
      const xInitialSpace = 10;
      ctx.font = "16px Roboto Mono";
      ctx.fillStyle = textColors[Math.floor(Math.random() * 2)];
      ctx.fillText(
        captcha[i],
        xInitialSpace + i * letterSpace,
        Math.floor(Math.random() * 5 + 14),
        100
      );
    }
  };

  const initializeCaptcha = (ctx) => {
    setUserInput("");
    const newCaptcha = generateCaptchaText();
    setCaptchaText(newCaptcha);
    drawCaptchaOnCanvas(ctx, newCaptcha);
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure the Captcha is valid
    if (userInput === captchaText) {
      try {
        // Send the login request to the backend
        const response = await Axios.post("http://localhost:2001/university_event/user/login", {
          email: formData.email,
          password: formData.password
        });

        // Handle successful login
        const userRole = response.data.role; // Assuming the role is returned in the response
        if (userRole === 'ADMIN') {
          navigate('/dashboard'); // Redirect to the admin dashboard
        } else {
          navigate('/dashboard'); // Redirect to user dashboard
        }
      } catch (error) {
        alert('Login failed. Please check your credentials.');
      }
    } else {
      alert('Invalid Captcha');
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      initializeCaptcha(ctx);
    }
  };

  return (
    <div>
      <Header/>
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        marginTop: "-4rem",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "80%",
          padding: "1rem 0rem 1rem",
          borderRadius: "12px",
          boxShadow: 10,
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
            component="h1"
            variant="h4"
            sx={{
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0 }}>
            <Stack spacing={2} >
              <TextField
                size="small"
                margin="dense"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ height: "40px" }}
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                sx={{ height: "50px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handlePasswordVisibilityToggle}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <div className="wrapper">
                <canvas ref={canvasRef} width="132" height="20"></canvas>
                <IconButton
                  onClick={() =>
                    initializeCaptcha(canvasRef.current.getContext("2d"))
                  }
                >
                  <ReplayIcon id="reload-button" />
                </IconButton>
              </div>

              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                label="Enter Captcha"
                name="captcha"
                type="text"
                value={userInput}
                onChange={handleUserInputChange}
                sx={{ height: "50px" }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  padding: "0.2.5rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "8px",
                }}
              >
                Login
              </Button>
            </Stack>
            <Typography sx={{ mt: 1.5 }}>
              Don't have an account? <span style={{ color: '#2196f3', fontWeight: '550' }}><Link to='/signup'>Register</Link></span>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
    </div>
  );
};

export default LoginPage;
