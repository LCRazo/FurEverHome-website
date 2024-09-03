import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import 'jquery/dist/jquery.slim.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


function Navbar(){
  return (
    //Responsive NavBar
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="your-logo.png" alt="Your Logo" style={{ width: '40px' }} /> {/* Add your logo here */}
      </a>
      {/* ToggleButton */}
      <button
        className="navbar-toggler"
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-auto">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item ml-auto">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item ml-auto">
            <a className="nav-link" href="#work-gallery">Work Gallery</a>
          </li>
          <li className="nav-item ml-auto">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
