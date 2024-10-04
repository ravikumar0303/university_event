import React from 'react';
import './nav.css';
import logo from '../assets/e-gov logo.png';
import { Link } from 'react-router-dom';

// import logo from '../assets/Digital india.png';

// import Fcss from '../css/header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//               <a className="navbar-brand" href="/">
//                 Dr. Rammanohar Lohia Avadh University
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#mainNav"
//                 aria-controls="mainNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="mainNav">
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item active">
//                     <a className="nav-link" href="/">
//                       The University
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Administration
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Academics
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Campus Life
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Online
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Alumni
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Recruitment
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       RTI
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


function Navbar(){
return (

  <div>
     <div className='nav'>
     <a class="navbar-brand" href="#">
     <img 
        src={logo}
        width="60"
        height="50" 
        alt="E-Governance"
        />
        </a> 
      <nav class="navbar navbar-expand-lg navbar-light">
  
  <div  class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Home"><b><h4>HOME</h4></b></a>
      </li>
       
      <li class="nav-item">
        <a class="nav-link" href="/signup"><b><h4>ABOUT US</h4></b></a>
      </li>
       
       <li class="nav-item">
         <a class="nav-link" href='#'> <b><h4>CONTACT US</h4></b></a>
       </li>


     <li class="nav-item">
         <a class="nav-link" href='/'> <b><h4>FAQ</h4></b></a>
         {/* <Link to='/'> <Button color='primary'><b>LogIn</b> </Button> </Link> */}
       </li>

       <li class="nav-item">
        <Link to="/calendar" class="nav-link" ><b><h4>Event</h4></b></Link>
      </li>

       

     
    </ul>
   

    
        {/* <Box sx={{display:{xs:'flex',md:'flex'}}}>
        <Link to='/'> <Button color='primary'><b>LogIn</b> </Button> </Link>
        </Box> */}
  </div>

  
  <li class="nav-item">
         <a class="log" color='primar' href='/login'> <b><h5>SignIn</h5></b></a>
         {/* <Link to='/'> <Button color='primary'><b>LogIn</b> </Button> </Link> */}
       </li>
       <li class="nav-item">
         <a class="log" color='primar' href='/signup'> <b><h5>SignUp</h5></b></a>
         {/* <Link to='/'> <Button color='primary'><b>LogIn</b> </Button> </Link> */}
       </li>
  
</nav>

     </div>
     

  </div>
   
)

}
export default Navbar;