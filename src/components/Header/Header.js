import React from 'react';
import './Header.css';
import Logo from '../assets/roof.jpg'

function Header() {
  return(
    <div className="image-container"> 
        <img src={Logo} alt="roofing"></img>
        <div className="image-overlay"></div>
    </div>
    
  )
}

export default Header;
