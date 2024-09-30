import React from 'react';
import Org from '../assets/Digital_India.png';
import logo from '../assets/logo_ceg.png';
import GOI from '../assets/GOI_King.png';

function Header(){
    return (
    
      <div style={{
         display:'flex',
         alignItems:'center',
         justifyContent:'space-between',
          backgroundColor:'#dafef9',
          // RgbaColor : rgba(161,255,242,1.00),
         paddingBottom:'2rem',
         paddingTop:'1rem' ,
      }}>

            
<img 
            src={logo}
            style={{
                height:"60px",
                marginLeft:'1rem'
            }}
/>
<div>
<img 
            src={GOI}
            style={{
                height:"60px",
                // width:'25px',
                paddingLeft:'7rem'

            }}
/>


              
             {/* <h2>CDAC ACT'S</h2> */}
             <h5>Center For E-Governance New Delhi</h5>
             </div>
       <img 
            src={Org}
            style={{
                height:"60px",
                marginRight:'1rem'}}
       />
    
      </div>
       
    )
    
    }
    export default Header;