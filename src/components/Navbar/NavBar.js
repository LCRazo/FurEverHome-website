import React, {useState,useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import 'jquery/dist/jquery.slim.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function Navbar(){
  //State to track if menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Function to toggle menu state
  const handleToggle = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  
  //State to track if navbar is scrolling 
  const [isScrolled, setIsScrolled] = useState(false)

  //Function to check scroll position 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    //Responsive NavBar
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>

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
