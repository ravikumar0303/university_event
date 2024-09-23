// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';


// import { Link } from "react-router-dom";
// import { signup } from "../../Actions/userActions";
// // import Header from "../../Components/Header";
// import { USER_SIGNUP_RESET } from "../../Constants/userConstants";

// const SignUpScreen = (props) => {

//     const [firstName,setFirstName] = useState("");
//     const [lastName,setLastName] = useState("");
//     const [email,setEmail] = useState("");
//     const [phone,setPhone] = useState("");   
//     const [role,setRole] = useState("CUSTOMER");
//     const [city,setCity] = useState("");
//     const [zip_code,setZip_code] = useState("");
//     const [password,setPassword] = useState("");
    
//     const [fNameError,setFNameError] = useState("")
//     const [emailError,setEmailError] = useState("")
//     const [phoneError,setPhoneError] = useState("")
//     const [roleError,setRoleError]   = useState("")
//     const [cityError,setCityError]   = useState("")
//     const [zip_codeError,setZip_codeError] = useState("")
//     const [passwordError,setPasswordError] = useState("")
    

//     const {loading,response,error} = useSelector(store => store.userSignUp)
//     const userSignIn = useSelector(store => store.userSignIn)
//     const dispatch = useDispatch()
//     const onSignUp = () => {
//         if((role === "STUDENT" || role === "") && userSignIn.response &&userSignIn.response.data.role === "ADMIN")
//             setRoleError("Select a valid role")
//         else
//             setRoleError("")
        
//         if(firstName.length<1)
//             setFNameError("First Name is mandatory")
//         else
//             setFNameError("")

//         if(!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
//             setEmailError("Enter a valid email")
//         else
//             setEmailError("")

//         if(phone.length<1)
//             setPhoneError("Phone number is mandatory")
//         else
//           setPhoneError("")

//         if(city.length<1)
//             setCityError("city name is mandatory")
//         else
//           setCityError("")

//         if(zip_code.length<1)
//            setZip_codeError("zip_code is mandatory")
//         else
//            setZip_codeError("")

//         if(password.length<1)
//             setPasswordError("Password is required")
//         else
//             setPasswordError("")

//         if(firstName.length>1 && phone.length>1 && city.length>1 && zip_code.length>1 && password.length>1 && email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") && ((role==="STUDENT" && !userSignIn.response) || role==="FACULTY" || role==="EVENT_ORGNIZER" || role==="ALUMNI"))
//             dispatch(signup(firstName,lastName,email,phone,role,city,zip_code,password))
//     }

//     useEffect(()=>{
//             if(response && response.status === "success"){
//                 if(userSignIn.response && userSignIn.response.data.role ==="ADMIN")
//                     props.history.push("/eventorgnizer")
//                 else
//                     props.history.push("/signin")
//                     dispatch({
//                         type : USER_SIGNUP_RESET,
//                     })
//             }
//     },[loading,response,error])

//     return (
//         <div className="Screen">
//                 <div>
//                     <Header title="SignUp"/>
//                     {
//                         error && error.status === "error" && <h5 className="text-danger text-center">{error.message}</h5>
//                     }
//                     <div className="row">
//                         <div className="col-md-3"></div>
//                         <div className="col-md-6">
                            
//                             <div className="row">
//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">First Name</label>
//                                     <input required onChange={(e)=>{setFirstName(e.target.value)}} type="text" className="form-control"  placeholder="First Name"></input>
//                                    <h6 className="text-danger text-center">{fNameError}</h6>
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">Last Name</label>
//                                     <input onChange={(e)=>{setLastName(e.target.value)}} type="text" className="form-control"  placeholder="Last Name" minLength="2"></input>
//                                 </div>
//                             </div>

//                             <div className="mb-3">
//                                 <label className="form-label">Email Address</label>
//                                 <input required onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"  placeholder="name@example.com"></input>
//                                 <h6 className="text-danger text-center">{emailError}</h6>
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Mobile number</label>
//                                 <input required onChange={(e)=>{setPhone(e.target.value)}} type="text" className="form-control"  placeholder="1234567891"></input>
//                                 <h6 className="text-danger text-center">{phoneError}</h6>
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">city</label>
//                                 <input required onChange={(e)=>{setCity(e.target.value)}} type="text" className="form-control"  placeholder="Delhi"></input>
//                                 <h6 className="text-danger text-center">{cityErrorr}</h6>
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Pin code</label>
//                                 <input required onChange={(e)=>{setZip_code(e.target.value)}} type="text" className="form-control"  placeholder="110094"></input>
//                                 <h6 className="text-danger text-center">{zip_codeError}</h6>
//                             </div>

                           

//                             <div className="mb-3">
//                                 <label className="form-label">Password</label>
//                                 <input required onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="********"></input>
//                                 <h6 className="text-danger text-center">{passwordError}</h6>
//                             </div>


//                             {
//                                 userSignIn.response && userSignIn.response.data.role === "ADMIN" &&
//                                 <div className="mb-3 col-md-3">
//                                     <h5 className="form-label">Role</h5>
//                                     <select className="form-select" onChange={(e)=>{setRole(e.target.value.toUpperCase())}}>
//                                         <option disabled selected>-- Select </option>
//                                         <option >EVENT_ORGNIZER</option>
//                                         <opction>FACULTY</opction>
//                                         <option >ALUMNI</option>
//                                     </select>
//                                     <h6 className="text-danger text-center">{roleError}</h6>
//                                 </div>
                                
//                             }
//                             { 
//                             !userSignIn.response && 
//                             <div className="float-end">
//                                 <br/> Already a User? <Link to="/signin">SignIn</Link>
//                             </div>
//                             }
//                             <div className="mb-3 float-start">
//                                 <button onClick={onSignUp} type="button" className="btn btn-outline-primary">Register</button>
//                             </div>
              
//                         </div>
//                         <div className="col-md-3"></div>
//                     </div>
//                 </div>
//             </div>
//     )
// };

// export default SignUpScreen;
//////////////////////////////////////////////////////////////
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../Actions/userActions";
import { USER_SIGNUP_RESET } from "../../Constants/userConstants";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert
} from "@mui/material";

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");

  const [fNameError, setFNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { loading, response, error } = useSelector((store) => store.userSignUp);
  const userSignIn = useSelector((store) => store.userSignIn);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const onSignUp = () => {
    if (
      (role === "STUDENT" || role === "") &&
      userSignIn.response &&
      userSignIn.response.data.role === "ADMIN"
    )
      setRoleError("Select a valid role");
    else setRoleError("");

    if (firstName.length < 1) setFNameError("First Name is mandatory");
    else setFNameError("");

    if (!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      setEmailError("Enter a valid email");
    else setEmailError("");

    if (phone.length < 1) setPhoneError("Phone number is mandatory");
    else setPhoneError("");

    if (city.length < 1) setCityError("City name is mandatory");
    else setCityError("");

    if (zipCode.length < 1) setZipCodeError("Zip Code is mandatory");
    else setZipCodeError("");

    if (password.length < 1) setPasswordError("Password is required");
    else setPasswordError("");

    if (
      firstName.length > 1 &&
      phone.length > 1 &&
      city.length > 1 &&
      zipCode.length > 1 &&
      password.length > 1 &&
      email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") &&
      ((role === "STUDENT" && !userSignIn.response) ||
        role === "FACULTY" ||
        role === "EVENT_ORGANIZER" ||
        role === "ALUMNI")
    ) {
      dispatch(
        signup(firstName, lastName, email, phone, role, city, zipCode, password)
      );
    }
  };

  useEffect(() => {
    if (response && response.status === "success") {
      if (userSignIn.response && userSignIn.response.data.role === "ADMIN")
        navigate("/eventorgnizer"); // Using navigate instead of history.push
      else navigate("/signin");
      dispatch({
        type: USER_SIGNUP_RESET,
      });
    }
  }, [loading, response, error, navigate, userSignIn.response, dispatch]);

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        {error && error.status === "error" && (
          <Alert severity="error">{error.message}</Alert>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!fNameError}
              helperText={fNameError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={!!phoneError}
              helperText={phoneError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={!!cityError}
              helperText={cityError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              error={!!zipCodeError}
              helperText={zipCodeError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
            />
          </Grid>
          {userSignIn.response && userSignIn.response.data.role === "ADMIN" && (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value.toUpperCase())}
                >
                  <MenuItem value="EVENT_ORGANIZER">Event Organizer</MenuItem>
                  <MenuItem value="FACULTY">Faculty</MenuItem>
                  <MenuItem value="ALUMNI">Alumni</MenuItem>
                </Select>
              </FormControl>
              {roleError && (
                <Typography color="error" variant="body2">
                  {roleError}
                </Typography>
              )}
            </Grid>
          )}
          {!userSignIn.response && (
            <Grid item xs={12}>
              <Typography variant="body2">
                Already a User? <Link to="/signin">Sign In</Link>
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSignUp}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUpScreen;
