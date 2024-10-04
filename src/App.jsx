import React from 'react'
import './App.css'
import LoginPage from './Pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import Dashboard2 from './Pages/Dashboard2';
import Otp from './Pages/Otp';


import Footer from './Components/footer';
import Navbar from './Components/Navbar';
import Header from './Components/header';
import MoreEvent from './eventlist/eventmore'
import SignUpScreen from './Screens/User/SignUpScreen';
import FCarousel from './Components/FCarousel';
import Event from './Screens/Events/BookEvent';
import Calendar from './Components/Calendar';

function App() {
  

  return (
    <div >

         {/* <div style={{ minHeight: "100px", color: "green" }}>
          <Header />
        </div>   
         <div>
             <Navbar/>
        </div>   */}
        
      

      <Routes>
        <Route path='/' element={<MoreEvent/>}/>
        <Route path='/Home' element={<MoreEvent/>}/>
        {/* <Route path='/' element={<Carousel/>}/> */}
        < Route path='/signup' element={<SignUpScreen/>}/>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/dashboard' element={<Dashboard2/>}></Route>
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App

