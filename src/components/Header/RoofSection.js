import React from 'react';
import './RoofSection.css';

function RoofSection(){
    return(
        <div className="roof-container container-fluid d-flex align-items-center justify-content-center text-center text-white">
            <div className="roof-section col-10 col-lg-8 col-xl-6 ">
                <h1 className="roof-title font-weight-bold pb-3">Your Dream Roof</h1>
                <h3 className="roof-subtitle pb-3">Residential & Commercial</h3>
                <h4 className="roof-description font-italic pb-3">
                    Family-owned roofing experts in the RGV! We deliver reliable, high-quality service with a personal touch, treating your roof like it’s our own.
                </h4>
                <a type="button" className="btn btn-secondary" href="assets/LizethChavez.pdf" target="_blank" download>
                    Request Free Estimate
                </a>
            </div>
        </div>
    );
}

export default RoofSection;
