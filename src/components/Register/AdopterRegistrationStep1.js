import React from 'react';
import { useNavigate } from 'react-router-dom';
import title from '../assets/AdopterRegistration.svg';
import desc from '../assets/AdopterRegistrationDesc1.svg';
import next from '../assets/nextbutton.svg';

function AdopterRegistrationStep1(){
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/api/adopter/register/step2');
    };

    return(
        <section className='bg-deaf51 min-h-screen py-12 px-4 text-center object-fill'>
            <img src={title} alt="title" className="w-full"></img>

            <div className="w-full">
                <img src={desc} alt="desc" className="mx-auto"></img>
            </div>
            
            <div className='content-justify-center'>

                <label className="block text-left text-white font-semibold">Username*</label>
                <input 
                    name="name" 
                    // value={formData.name} 
                    // onChange={handleChange} 
                    className="block w-full mb-2 p-2 text-black" 
                    required/>



                <label className="block text-left text-white font-semibold">Password*</label>
                <label className="block text-left text-white ">Password must have 8 character long.</label>
                <input 
                    type="passwprd"
                    id="password"
                    name="password" 
                    // value={formData.name} 
                    // onChange={handleChange} 
                    className="block w-full justify-center p-2 text-black" 
                    required/>

            </div>
            
            <div className="pt-4 flex justify-center">
                <button type="button" className="block text-left text-white bottom-right"onClick={handleNext}>
                    <img src={next} alt="nextbutton" ></img>
                </button>
            </div>
            
        </section>
    )
};

export default AdopterRegistrationStep1;
