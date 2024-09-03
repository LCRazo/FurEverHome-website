import React from 'react';
import './Services.css';


function Services(){
    return(    
        // Ensures full width and no background color 
        <div class="container-fluid">
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
                    <img src="path of img" alt="Roof Installment" className="img-fluid"/>
                        <h3 className="service-title text-left">Roof Installment</h3>
                        <p className="service-description text-left">Description/Price</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src="path of img" alt="Roof Repair" className="img-fluid"/>
                        <h3 className="service-title text-left">Roof Repair</h3>
                        <p className="service-description text-left">Description/Price</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src="path of img" alt="Roof Replacement" className="img-fluid"/>
                        <h3 className="service-title text-left">Roof Replacement</h3>
                        <p className="service-description text-left">Description/Price</p>
                    </div>
                </div>

                <div class="col-sm mx-2">
                    <div className="service-item">
                        <img src="path of img" alt="Junk Removal" className="img-fluid"/>
                        <h3 className="service-title text-left">Junk Removal</h3>
                        <p className="service-description text-left">Description/Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;