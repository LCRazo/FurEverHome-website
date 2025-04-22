import React from 'react';
import './Footer.css';
import FurEverLogo from '../assets/FurEverlogo.svg'
import Tagline from '../assets/tagline.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer(){
    return(
        <section id="contact" className="bg-c4b2 py-12 px-4 text-center text-white font-saira text-2xl"> 
            <div className="flex justify-center mb-10">
                <div className="flex flex-col md:flex-row justify-center gap 10 items center">

                     <div className="mt-5 flex flex-col text-center text-2xl">
                        <p href="#" className='hover:underline'>Home</p>
                        <p href="#" className='hover:underline'> About</p>
                        <p href="#" className='hover:underline'>Sign Up</p>
                        <p href="#" className='hover:underline'>Contact</p>
                     </div>
                
                     <div className="flex flex-col items-center">
                      <img src={Tagline}></img>
                      <img src={FurEverLogo}></img>
                     </div>

                     <div className="w-full md:w-auto flex justify-center items-center mt-5 space-x-4 text-2xl">
                            <a href="#"><i className="fa-brands text-white fa-instagram hover:shadow-lg hover:shadow-a06EB1"></i></a>
                            <a href="#"><i className="ml-3 fa-brands text-white fa-facebook hover:shadow-lg hover:shadow-a06EB1"></i></a>
                            <a href="#"><i className="ml-3 fa-brands text-white fa-linkedin hover:shadow-lg hover:shadow-a06EB1"></i></a>
                    </div>
               
                </div>
            </div>

            <div className="mt-5 flex flex-col items-center">
                <p>© 2025 <strong>FurEver Home</strong>. All Rights Reserved</p>
            </div>
        </section>
    )
}

export default Footer;
