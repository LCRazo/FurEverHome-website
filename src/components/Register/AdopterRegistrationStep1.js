import React from 'react';
import { useNavigate } from 'react-router-dom';
import title from '../assets/AdopterRegistration.svg';
import next from '../assets/nextbutton.svg';

function AdopterRegistrationStep1(){
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/api/adopter/register/step2');
    };

    return(
        <section className='bg-deaf51 min-h-screen py-12 px-4 text-center text-white font-saira text-xl '>
            {/* <img src={title} alt="title" className="w-full"></img> */}
            <div className='flex flex-col items-center mb-4'>
                    <img src={title} alt='title'></img>
                    <p className='pt-4 text-2xl font-bold '>Create a username and password.</p>
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
