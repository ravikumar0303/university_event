import React from 'react';
import './nav.css';
import logo from '../assets/e-gov logo.png';

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
        <a class="nav-link" href="/book-event"><b><h4>Event</h4></b></a>
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