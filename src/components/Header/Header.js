import React from 'react';
import './Header.css';
import Logo from '../assets/logo.jpg'

function Header() {
  return(
    <div className="image-container"> 
        <img src={Logo} alt="roofing"></img>
        <div className="image-overlay"></div>
          <div className='header-content'>
            <h4 className='header-tag'>Setting the standard since year</h4>
            <h1 className='header-title'>Cazares Roofing</h1>
            <h6 className='header-subtitle'>Delivering superior exterior home improvment solutions for the RGV Your local roofing contractor, family owned and trusted for over 15 years</h6>
          </div>
    </div>
    
  )
}

export default Header;
