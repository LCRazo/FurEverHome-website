import React, {useState,useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import 'jquery/dist/jquery.slim.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Logo from '../assets/img1.jpg'

function Navbar(){
  //State to track if menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Function to toggle menu state
  const handleToggle = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    //Responsive NavBar
    <nav className="navbar navbar-expand-lg fixed-top">

      {/* ToggleButton */}
      <button
        className="navbar-toggler navbar-brand"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className={`navbar-nav ${isMenuOpen ? '' : 'bg-highlight'}`}>
          <li className="nav-item ml-auto">
           <img src={Logo} alt="roofing" width="50" height="50"></img>
          </li>
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
    </nav>
  );
};

export default Navbar;
