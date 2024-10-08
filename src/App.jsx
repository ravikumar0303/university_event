import React from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import Dashboard2 from "./Pages/Dashboard2";
import Otp from "./Pages/Otp";

import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/header";
import MoreEvent from "./eventlist/eventmore";
import SignUpScreen from "./Screens/User/SignUpScreen";
import Event from "./Screens/Events/BookEvent";
import Calendar from "./Components/Calendar";
import BookEvent from "./Screens/Events/BookEvent";
import QrCodePage from "./Screens/Events/QrCodePage";
import FCarousel from "./Components/FCarousel";
import EventList from "./Components/EventList";
import Protected from "./Protected_Path/Protected";

function App() {
  return (
    <div>
       <Header />
       <Navbar />

      <Routes>
        <Route path="/" element={<Protected Component={MoreEvent} />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/dashboard"  exact element={<Dashboard2 />}></Route>
        <Route path="/book-event" element={<Protected Component={BookEvent} />} />
        <Route path="/qr-code" element={<QrCodePage />} />
        <Route path="/event-cal" element={<Protected Component={Calendar} />} />
        <Route path='/event-list' element={<EventList/>}></Route>
      </Routes>
      <FCarousel />
      <Footer />
    </div>
  );
}

export default App;
