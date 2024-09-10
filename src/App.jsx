import React from 'react'
import './App.css'
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import Dashboard2 from './Pages/Dashboard2';
// import Dashboard from './Pages/Dashboard';
import Otp from './Pages/Otp';

function App() {
  

  return (
    <div >

      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/registration' element={<RegistrationPage/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/dashboard' element={<Dashboard2/>}></Route>
      </Routes>


    
    </div>
  )
}

export default App
