import React from 'react';
import { useState } from 'react';
import '../css/eventmore.css';
import { Link } from 'react-router-dom';

import Logo from '../assets/designationpic/CDAC_logo.png';
import Centerpic from '../assets/designationpic/Cdac_delhi.jpg';
import CDAC from '../assets/designationpic/cdac-delhi.png';
import Carousel from '../Components/carousel';
// import Header from '../Components/header';
import Navbar from '../Components/Navbar';

function Eventmore() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <Carousel/>
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">What's New</h2>
              <h2 className="float-right">Date</h2>
            </div>
            <div className="card-body">
              <ul>
              
                <li>
                  <Link to="/login">
                    Allocation of MBBS Seats from Central Pool for spouse and children of Civilian Victims of Terrorism for the academic year 2024-25-reg
                  </Link>
                  <span className="float-right">(March 21-22, 2024)</span>
                </li>
                <li>
                  <a href="#">
                    Appointment of Shri Govind Mohan, IAS(SK:89) as Home Secretary, Ministry of Home Affairs-reg
                  </a>
                  <span className="float-right">(March 21-22, 2024)</span>
                </li>
                <li>
                  <a href="#">
                    Retirement of Shri Ajay Kumar Bhalla, IAS(AM:84) Home Secretary, Ministry of Home Affairs-reg.
                  </a>
                  <span className="float-right">(March 21-22, 2024)</span>
                </li>
                            
              </ul>
              <button className="btn btn-primary" onClick={handleClick}>
                {showMore ? 'Show Less' : 'More'}
              </button>
              {showMore && (
                <ul>
                  <li>
                    <a href="#">
                      Training officer from the Peace operations training centre under the aegis of the European Security and Defence College
                    </a>
                    <span className="float-right">(March 21-22, 2024)</span>
                  </li>
                  
                 
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">CDAC ACT'S PUNE'</h2>
            </div>
            <div className="card-body">
              <img
                src={Logo}
                className="card-img-top"
                alt="CDAC ACTS PUNE"
              />
              <h4 className="card-text">ACT'S PUNE</h4>
              <a href="https://cdac.in/index.aspx" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">ACT'S DELHI</h2>
            </div>
            <div className="card-body">
              <img
                src={Centerpic}
                className="card-img-top"
                alt="Minister of State"
              />
              <h4 className="card-text"> CDAC Acts delhi Center</h4>
              <a href="https://cdac.in/index.aspx?id=DL" className="btn btn-primary">
                 Know More
              </a>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">CDAC ACT'S DELHI</h2>
            </div>
            <div className="card-body">
              <img
                src={CDAC}
                className="card-img-top"
                alt="Minister of State"

              />
              <h4 className="card-text">Center for Development in Advanced Computing</h4>
              <a href="https://cdac.in/index.aspx?id=DL" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Eventmore;