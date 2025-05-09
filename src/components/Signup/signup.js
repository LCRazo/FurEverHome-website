import React from 'react';
import { Link } from 'react-router-dom';
import title from '../assets/signupSlang.svg'
import pawsprint from '../assets/pawprint.svg'
import pawsprint2 from '../assets/pawprint2.svg'

function signUp(){
    return(
        <section id="signUp" className='bg-fff29c py-12 px-4 text-center font-saira'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='flex flex-col items-center'>
                    <img src={title} alt='title' className='h-auto w-auto'></img>
                    <h3 className='text-2xl mb-2'>Sign Up!</h3>
                    <h4 className='text-md md:text-lg max-w-md'>Ready to make a difference in a pet's life? Sign up as an owner 
                    to rehome your pet with care, or join as an adopter to find your next furry friend. 
                    It’s quick, easy, and full of heart.</h4>
                </div>

                <div className='mt-20 flex flex-col items-center relative w-[300px] md:w-[400px]'>
                    <img src={pawsprint} alt='pawprint' className='ml-40 shadow-outline animate-bounce'></img>
                    <img src={pawsprint2} alt='pawprint2' className='mt-3 mr-40 shadow-outline animate-bounce'></img>     
                           
                    {/*Owner Buttons */}
                    <div className='absolute top-[16%] left-[70%]'>
                        <h2 className=' text-white'>OWNER</h2>
                        <Link to='/api/owner/register/step1' className='hover:underline text-white text-2xl transition no-underline'>Sign Up</Link>
                    </div>
                   
                    {/*Adopter Button */}
                    <div className='absolute top-[67%] left-[25%]'>
                    <h2 className=' text-white'>ADOPTER</h2>
                    <Link to= '/api/adopter/register/step1' className='hover:underline text-white text-2xl transition no-underline'> Sign Up</Link>
                    </div>
                   
  
                </div>
            </div>

         
        </section>
    );
}

export default signUp;
