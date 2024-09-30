// import React from 'react'
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css'
// import RegistrationPage from './Pages/RegistrationPage';
// import LoginPage from './Pages/LoginPage';
// import { Routes, Route, Switch } from 'react-router-dom';
// import Dashboard2 from './Pages/Dashboard2';
// // import Dashboard from './Pages/Dashboard';
// import Otp from './Pages/Otp';
// import Footer from './Components/footer';
// import Navbar from './Components/Navbar';
// import Carousel from './Components/carousel';
// import Header from './Components/header';
// // import Eventnews from './component/eventnews';
// import MoreEvent from './Pages/eventmore';
// // import Page  from './component/route';

// function App() {
  

//   return (
    
//     <div >

//     <div
//         style={{
//             minHeight: "100px",
//             color: "green",
//         }}
//     >
//        <Header/>
        
//     </div>
//     <div>

//       <Navbar/>

//       <div 
//          style={{
//               minHeight:"200px"
//          }}
//       >
//         <Carousel/>
//       </div>
      
//     <div>
//         {/* <Eventnews/> */}
//         <MoreEvent/>
//     </div>
//     </div>
   
//       <Routes>
//         <Switch>
//         <Route path='/login' element={<LoginPage/>}></Route>
//         <Route path='/registration' element={<RegistrationPage/>}></Route>
//         <Route path='/otp' element={<Otp/>}></Route>
//         <Route path='/dashboard' element={<Dashboard2/>}></Route>
//         {/* <Route path="/" component={Header} /> */}
//         {/* <Route path="/" component={Navbar} /> */}
//         {/* <Route path="/" component={Carousel} /> */}
//         {/* <Route path="/" component={MoreEvent} /> */}
//         {/* <Route path='/' element={<Header/>}></Route>
//         <Route path='/' element={<Carousel/>}></Route>
//         <Route path='/' element={<MoreEvent/>}></Route> */}
//         </Switch>
//       </Routes>

      
//       <Footer />
//     </div>
//   )
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Routes, Route} from 'react-router-dom';
// import './App.css';
// import RegistrationPage from './Pages/RegistrationPage';
// import LoginPage from './Pages/LoginPage';
// import Dashboard2 from './Pages/Dashboard2';
// import Otp from './Pages/Otp';
// import Footer from './Components/footer';
// import Navbar from './Components/Navbar';
// import Carousel from './Components/carousel';
// import Header from './Components/header';
// import MoreEvent from './Pages/eventmore';

// function App() {
//   return (
    
//       <div>
        
//         <Routes>
//           <Route path='/' element={<LoginPage />} />
//           <Route path='/registration' element={<RegistrationPage />} />
//           <Route path='/otp' element={<Otp />} />
//           <Route path='/dashboard' element={<Dashboard2 />} />
//           {/* <Route path='/' element={<Navigate to="/login" />} /> */}
//         </Routes>
      
//       </div>
  
//   );
// }

// export default App;

///////////////////////////////////////////////////////


import React from 'react'
import './App.css'
import RegistrationPage from './Pages/RegistrationPage';
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

function App() {
  

  return (
    <div >

         <div style={{ minHeight: "100px", color: "green" }}>
          <Header />
        </div>   
         <div>
             <Navbar/>
        </div>  
        
      

      <Routes>
        <Route path='/' element={<MoreEvent/>}/>
        <Route path='/Home' element={<MoreEvent/>}/>
        {/* <Route path='/' element={<Carousel/>}/> */}
        < Route path='/signup' element={<SignUpScreen/>}/>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/registration' element={<RegistrationPage/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/dashboard' element={<Dashboard2/>}></Route>
      </Routes>
      <FCarousel/>
      <Footer />
    </div>
  )
}

export default App

