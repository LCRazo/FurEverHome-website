import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import 'jquery/dist/jquery.slim.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


function Navbar(){
  return (
    //Responsive NavBar
    <nav className="navbar navbar-expand-lg ">

      {/* ToggleButton */}
      <button
        className="navbar-toggler navbar-brand"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        {/* ml-auto aligns to right */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work-gallery">Work Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* <div className='nav-container container-fluid pt-5'>
          <div className='text-left footer-content'>
            <div className='d-flex justify-content-center pr-5'>
                  <p>Roof Savy</p>
                  <p>Residential & Commercial</p>
                  <p>Your local RGV roofing contractor, family-owned and trusted for over 15 years</p>

            </div>     
          </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
