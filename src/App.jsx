import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import AdminHOmeScreen from "./Screens/Admin/AdminHomeScreen";

import HomePage from "./Home_Page/HomePage";
import SignUpScreen from "./Screens/User/SignUpScreen";
import SignInScreen from "./Screens/User/SignInScreen";
import Event from "./Screens/Events/BookEvent";
import Calendar from "./Screens/Events/Calender/Calendar";
import BookEvent from "./Screens/Events/BookEvent";
import QrCodePage from "./Screens/Events/QrCodePage";
// import FCarousel from "./Components/FCarousel";
import EventList from "./Screens/Events/Add_All_NewEvent/EventList";
import Protected from "./Protected_Path/Protected";
import ContactUs from "./Pages/ContactUs";
import Faq from "./Pages/FAQ";
import About from "./Pages/About";


function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<SignInScreen />}></Route>
        <Route path="/event" element={<Protected Component={Event} />}></Route>
        {/* <Route path="/otp" element={<Otp />}></Route> */}
        <Route path="/admin-dashboard" element={<Protected Component={AdminHOmeScreen} />}/>
        <Route path="/book-event" element={<Protected Component={BookEvent} />}/>
        <Route path="/qr-code" element={<Protected Component={QrCodePage} />} />
        <Route path="/event-cal" element={<Protected Component={Calendar} />} />
        <Route path="/event-list" element={<Protected Component={EventList} />}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
