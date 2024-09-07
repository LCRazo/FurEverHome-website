import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer(){
    return(
        <div className="footer-container"> 
            <div className='text-center footer-content'>
                <div className='d-flex justify-content-center pr-5'>
                <div className="footer-section info pr-5">
                    <h4>Contact Info</h4>
                        <p>Email: roofing@gmail.com</p>
                        <p>Phone: 9566623921</p>
                </div>

                <div className='footer-services pr-5'>
                    <h4>Services</h4>
                        <p>Roof Installment</p>
                        <p>Roof Repair</p>
                        <p>Roof Replacement</p>
                        <p>Junk Removal</p>
                </div>
                
                <div className='footer-section social-media'>
                    <h4>Follow Us</h4>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                </div>

                {/* Add API form here*/}
                </div>
            </div>
        </div>
    )
}

export default Footer;
