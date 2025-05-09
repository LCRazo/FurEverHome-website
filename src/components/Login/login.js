import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import submit from '../assets/submitbutton.svg';
import title from '../assets/Login.svg'

function Login(){
    const navigate = useNavigate();
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = () => {
        if(formData.password.length < 8){
            alert('Password must be at least 8 characters long');
            return;
        }

        setShowSuccessPopup(true); // show popup

        setTimeout(() => {
        navigate('/');
        }, 1500); // wait 1.5s before navigating
        
      
    };

    return(
        <section className='bg-C4B2 min-h-screen py-12 px-4 text-center text-white font-saira text-xl object-fill'>
            
            <div className='flex flex-col justify-center items-center pb-5'>
                <img src={title} alt="title" className="w-auto h-auto"></img>
            </div>
            
            <div className='content-justify-center'>

                <label className="block text-left text-white font-semibold">Username*</label>
                <input 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    className="block w-full mb-2 p-2 text-black" 
                    required/>



                <label className="block text-left text-white font-semibold">Password*</label>
                <label className="block text-left text-white ">Password must have 8 character long.</label>
                <input 
                    type="password"
                    id="password"
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    className="block w-full justify-center p-2 text-black" 
                    required/>

            </div>
            
            <div className="pt-4 flex flex-col justify-center items-center">
                <p>SignUp?</p>
                <button type="button" className="block text-left text-white bottom-right"onClick={handleNext}>
                    <img src={submit} alt="nextbutton" ></img>
                </button>
            </div>

            {showSuccessPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
                <p className="text-green-600 font-semibold text-xl">🎉 Profile created successfully!</p>
            </div>
            </div>
            )}
            
        </section>
    )
};

export default Login;
