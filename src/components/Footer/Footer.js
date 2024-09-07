import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer(){
    return(
        <div className="footer-container pt-5"> 
            <div className='text-left footer-content'>
                <div className='d-flex justify-content-center pr-5'>
                       
                <div className="footer-section about-us pr-5 ">
                    <h4>About Us</h4>
                        <p>
                            We're your friendly local and family-owned roofing company 
                            with 15+ years of experience delivering superior exterior home 
                            improvement solutions for the RGV.
                        </p>
                       
                </div>

                <div className="footer-section info pr-5 ">
                    <h4>Contact Info</h4>
                        <p>roofing@gmail.com</p>
                        <p>9566623921</p>
                        <p>Office Hours:</p>
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
            <div className='footer-section copyright d-flex align-items-center flex-column bd-highlight mt-3'>
                    <p>© 2024 <strong>CS&More Roofing Company</strong>. All Rights Reserved</p>
                </div>
        </div>
    )
}

export default Footer;
