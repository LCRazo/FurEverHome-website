import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer(){
    return(
        <Footer className="footer-container"> 
            <div className='footer-content'>
                <div className="footer-section info">
                    <p><strong>Email:</strong>roofing@gmail.com</p>
                    <p><strong>Phone:</strong>9566623921</p>
                </div>

                <div className='footer-services'>
                    <h3 className='roof-installment'>Roof Installment</h3>
                    <h3 className='roof-repair'>Roof Repair</h3>
                    <h3 className='roof-replacement'>Roof Replacement</h3>
                    <h3 className='junk-removal'>Junk Removal</h3>
                </div>
                <div className='footer-section social-media'>
                    <h4>Follow Us</h4>
                        <h3 className='instagram'>9566623921</h3>
                        <h3 className='facebook'>9566623921</h3>
                </div>

                {/* Add API form here*/}
            </div>
        </Footer>
    )
}
export default Footer;
