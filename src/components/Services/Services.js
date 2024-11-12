import React from 'react';
import Junk from '../assets/junk-removal.jpg'
import Repair from '../assets/roof-repair.jpg'
import Replace from '../assets/roof-replacement.jpg'
import Install from '../assets/roof-installation.jpg'
import './Services.css';


function Services(){
    return(    
        // Ensures full width and no background color 
        <div id="services" class="container-fluid">
            <div class="row">
                <div className="col-12 text-center">
                    <div className="title-container">
                        <hr className="title-line" />
                            <h3 className="title-header mx-3">Our Services</h3>
                        <hr className="title-line" />
                    </div>
                </div>
                <div class="col-sm mx-2">
                    <div className="service-item">
                    <img src={Install} alt="Roof Installment" className="img-fluid"/>
                        <h3 className="service-title text-left">Roof Installment</h3>
                        <p className="service-description text-left">From selecting the best materials to completing a flawless installation, we prioritize quality and customer satisfaction every step of the way.</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src={Repair} alt="Roof Repair" className="img-fluid"/>
                        <h3 className="service-title text-left">Roof Repair</h3>
                        <p className="service-description text-left">Our team quickly addresses leaks, damage, and wear to restore your roof’s strength and keep your home safe.</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src={Replace} alt="Roof Replacement" className="img-fluid"/>
                        <h3 className="service-title text-left">Roof Replacement</h3>
                        <p className="service-description text-left">Our team carefully removes your old roof and installs a new, high-quality one designed to enhance durability and boost your home’s value</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src={Junk} alt="Junk Removal" className="img-fluid"/>
                        <h3 className="service-title text-left">Junk Removal</h3>
                        <p className="service-description text-left">Whether it’s old furniture, yard waste, or unwanted items, our team handles it all. We offer quick, reliable pickup and disposal to clear out your space with ease.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;