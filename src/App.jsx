// import React from "react";
// import "./App.css";

// import { Routes, Route } from "react-router-dom";
// import AdminHOmeScreen from "./Screens/Admin/AdminHomeScreen";

// import Footer from "./Components/footer";
// import Navbar from "./Components/Navbar";
// import Header from "./Components/header";
// import MoreEvent from "./Home_eventlist/eventmore";
// import SignUpScreen from "./Screens/User/SignUpScreen";
// import SignInScreen from "./Screens/User/SignInScreen";
// import Event from "./Screens/Events/BookEvent";
// import Calendar from "./Screens/Events/Calender/Calendar";
// import BookEvent from "./Screens/Events/BookEvent";
// import QrCodePage from "./Screens/Events/QrCodePage";
// import FCarousel from "./Components/FCarousel";
// import EventList from "./Screens/Events/Add_All_NewEvent/EventList";
// import Protected from "./Protected_Path/Protected";
// import AddEvent from "./Screens/Events/Add_All_NewEvent/AddEvent";
// // import AdminDashboard from "./Screens/Admin/AdminHomeScreen";
// // import AddEvent from "./Screens/Events/Add_All_NewEvent/AddEvent";

// function App() {
//   return (
//     <div>
//        <Header />
//        <Navbar />

//       <Routes>
//         <Route path="/" element={<MoreEvent />} />
//         <Route path="/signup" element={<SignUpScreen />} />
//         <Route path="/login" element={<SignInScreen />}></Route>
//         <Route path="/event" element={< Protected Component={Event} />}></Route>
       
//         {/* <Route path="/admin-dashboard" element={<Protected Component={AdminHOmeScreen}/>} /> */}
//         <Route path="/book-event" element={<Protected Component={BookEvent} />} />
//         <Route path="/qr-code" element={< Protected Component ={QrCodePage} />} />
//         <Route path="/event-cal" element={<Protected Component={Calendar} />} />
//         <Route path='/event-list' element={<Protected Component={EventList} />}></Route>
//         <Route path='/add-event' element={<AddEvent/>}></Route>


//           <Route path="/dashboard" element={<AdminHOmeScreen />}> 
//           <Route path="create-events" element={<CreateEvent />} />
//           <Route path="participants" element={<Participants />} />
//           <Route path="calendar" element={<EventCalendar />} />
//           <Route path="events-list" element={<EventsList />} />
//           </Route>
//       </Routes>
//       <FCarousel />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import AdminHomeScreen from "./Screens/Admin/AdminHomeScreen";
import UserHomeScreen from "./Screens/UserHomeScreen/UserHomeScreen";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import MoreEvent from "./Home_eventlist/EventMore";
=======
import AdminHOmeScreen from "./Screens/Admin/AdminHomeScreen";

import HomePage from "./Home_Page/HomePage";
>>>>>>> 3a225f2649738286c7ed6d48be41ce5dd32feb8d
import SignUpScreen from "./Screens/User/SignUpScreen";
import SignInScreen from "./Screens/User/SignInScreen";
import Event from "./Screens/Events/BookEvent";
import Calendar from "./Screens/Events/Calender/Calendar";
import BookEvent from "./Screens/Events/BookEvent";
import QrCodePage from "./Screens/Events/QrCodePage";
// import FCarousel from "./Components/FCarousel";
import EventList from "./Screens/Events/Add_All_NewEvent/EventList";
import Protected from "./Protected_Path/Protected";
<<<<<<< HEAD
import AddEvent from "./Screens/Events/Add_All_NewEvent/AddEvent";

import CreateEvent from "./Screens/Events/Add_All_NewEvent/CreateEvent";  // Correct import
import Participants from "./Screens/Events/Participants";  // Correct import
import EventCalendar from "./Screens/Events/Calender/EventCalendar";  // Correct import
import EventsList from "./Screens/Events/Add_All_NewEvent/EventList";  // Correct import
=======
import ContactUs from "./Pages/ContactUs";
import Faq from "./Pages/FAQ";
import About from "./Pages/About";
>>>>>>> 3a225f2649738286c7ed6d48be41ce5dd32feb8d

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Header />
      <Navbar />

=======
>>>>>>> 3a225f2649738286c7ed6d48be41ce5dd32feb8d
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpScreen />} />
<<<<<<< HEAD
        <Route path="/login" element={<SignInScreen />} />

        <Route path="/event" element={<Protected Component={Event} />} />
        <Route path="/book-event" element={<Protected Component={BookEvent} />} />
        <Route path="/qr-code" element={<Protected Component={QrCodePage} />} />
        <Route path="/event-cal" element={<Protected Component={Calendar} />} />
        <Route path="/event-list" element={<Protected Component={EventList} />} />
        <Route path="/add-event" element={<AddEvent />} />
        

        {/* Admin Dashboard and related routes */}
        <Route path="/Admin-HomeScreen" element={<Protected Component={AdminHomeScreen} />} />
        <Route path="/Admin-HomeScreen/create-events" element={<Protected Component={CreateEvent} />} />
        <Route path="/Admin-HomeScreen/participants" element={<Protected Component={Participants} />} />
        <Route path="/Admin-HomeScreen/calendar" element={<Protected Component={EventCalendar} />} />
        <Route path="/Admin-HomeScreen/events-list" element={<Protected Component={EventsList} />} />

       {/* User Dashbord and related routes */}
       <Route path="/User-HomeScreen" element={<UserHomeScreen/>}></Route>
       <Route path="/User-HomeScreen/event-cal" element={<Calendar/>}></Route>
       <Route path="/User-HomeScreen" element={<UserHomeScreen/>}></Route>
       
      </Routes>
      
      <FCarousel />
      <Footer />
=======
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
>>>>>>> 3a225f2649738286c7ed6d48be41ce5dd32feb8d
    </div>
  );
}

export default App;
