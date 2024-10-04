import React from 'react'
import './App.css'
import LoginPage from './Pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import Dashboard2 from './Pages/Dashboard2';
import Otp from './Pages/Otp';


import Footer from './Components/footer';
// import Navbar from './Components/Navbar';
import Header from './Components/header';
import MoreEvent from './eventlist/eventmore'
import SignUpScreen from './Screens/User/SignUpScreen';
import FCarousel from './Components/FCarousel';
import Event from './Screens/Events/BookEvent';
// import Calendar from './Components/Calendar';
import BookEvent from './Screens/Events/BookEvent';
import QrCodePage from './Screens/Events/QrCodePage';

function App() {
  

  return (
    <div >

         <div style={{ minHeight: "100px", color: "green" }}>
          <Header />
        </div>   
         
        
      

      <Routes>
        <Route path='/' element={<MoreEvent/>}/>
        <Route path='/Home' element={<MoreEvent/>}/>
        {/* <Route path='/' element={<FCarousel/>}/> */}
        < Route path='/signup' element={<SignUpScreen/>}/>
        <Route path='/login' element={<LoginPage/>}></Route>
<<<<<<< HEAD
        <Route path='/calendar' element={<Calendar/>}></Route>
=======
        <Route path='/event' element={<Event/>}></Route>
>>>>>>> 00976ad44193672a1e2e41777fe3bf2811d5ac69
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/dashboard' element={<Dashboard2/>}></Route>
        <Route path="/book-event" element={<BookEvent />} />
        <Route path="/qr-code" element={<QrCodePage />} />
      </Routes>
      <FCarousel/>
      <Footer />
    </div>
  )
}

export default App

