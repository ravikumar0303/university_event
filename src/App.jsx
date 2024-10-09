import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import AdminHOmeScreen from "./Screens/Admin/AdminHomeScreen";
import Otp from "./Pages/Otp";

import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/header";
import MoreEvent from "./Home_eventlist/eventmore";
import SignUpScreen from "./Screens/User/SignUpScreen";
import SignInScreen from "./Screens/User/SignInScreen";
import Event from "./Screens/Events/BookEvent";
import Calendar from "./Components/Calender/Calendar";
import BookEvent from "./Screens/Events/BookEvent";
import QrCodePage from "./Screens/Events/QrCodePage";
import FCarousel from "./Components/FCarousel";
import EventList from "./Screens/Events/Add_All_NewEvent/EventList";
import Protected from "./Protected_Path/Protected";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<MoreEvent />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<SignInScreen />}></Route>
        <Route path="/event" element={< Protected Component={Event} />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/admin-dashboard" element={<Protected Component={AdminHOmeScreen}/>} />
        <Route path="/book-event" element={<Protected Component={BookEvent} />} />
        <Route path="/qr-code" element={< Protected Component ={QrCodePage} />} />
        <Route path="/event-cal" element={<Protected Component={Calendar} />} />
        <Route path='/event-list' element={<Protected Component={EventList} />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
