import React from 'react'
import './RoofSection.css'

function RoofSection(){
    return(
        <div className="roof-section d-flex justify-content-center align-items-center">
           <div className='text-center text-white'>
                <h1 className="roof-title"> ROOF SMART</h1>
                <h3 className="roof-subtitle">Residential & Commercial</h3>
                <h4 className="roof-description">Family-owned roofing experts in the RGV! We deliver reliable, high-quality service with a personal touch, treating your roof like it’s our own.</h4>
                <a type="button" class="btn btn-secondary" href="assets/LizethChavez.pdf" target="_blank" download>Request Free Estimate</a>
           </div>
        </div>
    );
}

export default RoofSection;