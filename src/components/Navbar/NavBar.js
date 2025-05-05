import React, {useState,useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FurEverLogo from '../assets/FurEverlogo.svg';
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


  
 
  // return (

  //   <section id="contact" className="bg-c4b2 py-4 px-8 text-white font-saira text-2xl">
  //     <div className="flex justify-between items-center mx-auto">
    
  //       {/* Logo Left */}
  //       <div className="">
  //         <img src={FurEverLogo} alt="FurEver Logo" className="top-0 left-0 " />
  //       </div>

  //       {/* Nav Links Right */}
  //       <div className="flex gap-8">
  //         <p className="hover:underline cursor-pointer">Home</p>
  //         <p className="hover:underline cursor-pointer">About</p>
  //         <p className="hover:underline cursor-pointer">Sign Up</p>
  //         <p className="hover:underline cursor-pointer">Contact</p>
  //       </div>
        
  //     </div>
  // </section>

  //   //Responsive NavBar
  //   // <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>

  //   //   {/* ToggleButton */}
  //   //   <button
  //   //     className="navbar-toggler navbar-brand"
  //   //     type="button"
  //   //     data-toggle="collapse"
  //   //     data-target="#navbarNav"
  //   //     aria-controls="navbarNav"
  //   //     aria-expanded={isMenuOpen ? 'true' : 'false'}
  //   //     aria-label="Toggle navigation"
  //   //     onClick={handleToggle}
  //   //   >
  //   //     <span className="navbar-toggler-icon"></span>
  //   //   </button>
    
  //     // <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
  //     //   <ul className={`navbar-nav ${isMenuOpen ? '' : 'bg-highlight'}`}>
  //     //     <li className="nav-item ml-auto">
          
  //     //     </li>
  //     //     <li className="nav-item">
  //     //       <a className="nav-link" href="#about">About</a>
  //     //     </li>
  //     //     <li className="nav-item">
  //     //       <a className="nav-link" href="#services">Services</a>
  //     //     </li>
  //     //     <li className="nav-item">
  //     //       <a className="nav-link" href="#work-gallery">Work Gallery</a>
  //     //     </li>
  //     //     <li className="nav-item">
  //     //       <a className="nav-link" href="#contact">Contact</a>
  //     //     </li>
  //     //   </ul>
  //     // </div>
  //   // </nav>
  // );
  return (
    <nav className={`bg-c4b2 shadow-md w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <div className=" mx-auto px-6 py-4 flex items-center justify-between">
      
        <img src={FurEverLogo} alt="FurEver Logo" className="top-0 left-0 h-12" />

        <button className="md:hidden focus:outline-none" onClick={handleToggle} aria-label="Toggle Menu">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-white text-xl font-saira">
          <a href="#home" className="text-white no-underline hover:underline cursor-pointer">Home</a>
          <a href="#about" className="text-white no-underline hover:underline">About</a>
          <a href="#events" className="text-white no-underline hover:underline">Services</a>
          <a href="#pets" className="text-white no-underline hover:underline">Work Gallery</a>
          <a href="#contact" className="text-white no-underline hover:underline">Contact</a>
          <a href="#signUp" className="text-white no-underline hover:underline">Login</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-c4b2 px-6 pb-4 text-white text-lg font-saira space-y-4">
          <a href="#home" onClick={handleToggle} className="text-white no-underline block hover:underline">Home</a>
          <a href="#about" onClick={handleToggle} className="text-white no-underline block hover:underline">About</a>
          <a href="#services" onClick={handleToggle} className="text-white no-underline block hover:underline">Services</a>
          <a href="#work-gallery" onClick={handleToggle} className="text-white no-underline block hover:underline">Work Gallery</a>
          <a href="#contact" onClick={handleToggle} className="text-white no-underline block hover:underline">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
