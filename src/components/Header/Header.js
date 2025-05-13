import React, { useState } from 'react';
import './Header.css';
import './Popup.css'; // Import a CSS file for styling the popup
import AdoptPet from '../assets/Adopt_A_Pet.svg';
import GotLove from '../assets/Got Love_ Give Love..svg';
import Text from '../assets/homepage-desc.svg';
import pet from '../assets/homepage-dog.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Cookies from 'js-cookie';

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    logout(); // Use the logout function from AuthContext
    setShowLogoutPopup(false); // Close the popup
    setTimeout(() => {
      window.location.reload(); // Refresh the page to update UI
    }, 100); // Add a slight delay to ensure logout completes
  };

  const confirmLogout = () => {
    setShowLogoutPopup(true);
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <section id="home" className="bg-[#FFF29C] min-h-screen flex flex-col md:flex-row">
      
      {/* Left Column with Full-Height Pet Image */}
      <div className="flex-1 flex items-stretch justify-self-start">
        <img src={pet} alt='petSVG' className="w-full object-cover" ></img>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-8 py-12">
        <img src={GotLove} alt="GotLoveSVG" className="h-20 md:h-auto" />
        <img src={AdoptPet} alt="AdoptAPetSVG" />
        <img src={Text} alt="textSVG" />
        {isLoggedIn ? (
          <>
            <button onClick={confirmLogout} className="mt-4 bg-white text-a06EB1 font-saira text-2xl px-5 py-2 rounded-md transition no-underline hover:text-a06EB1">Logout</button>
            {showLogoutPopup && (
              <div className="popup">
                <div className="popup-content">
                  <p>Are you sure you want to logout?</p>
                  <div className="popup-buttons">
                    <button onClick={handleLogout} className="yes-button">Yes</button>
                    <button onClick={cancelLogout} className="no-button">No</button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <Link to='/api/login?choice=login' className="mt-4 bg-white text-a06EB1 font-saira text-2xl px-5 py-2 rounded-md transition no-underline hover:text-a06EB1">Login</Link>
        )}
      </div>
      
    </section>
  );
}

export default Header;
