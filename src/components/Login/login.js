import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import submit from '../assets/submitbutton.svg';
import title from '../assets/Login.svg';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useContext(AuthContext);

    //extract query
    const queryParams = new URLSearchParams(location.search);
    const redirect = queryParams.get('choice');
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

    const handleNext = async () => {
        if (formData.password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.profile_id); // Update global state
                setShowSuccessPopup(true);

                setTimeout(() => {
                    if (redirect === 'login') {
                        navigate(`/`);
                    } else if (redirect === 'event') {
                        navigate(`/api/event/schedule`);
                    } else {
                        alert('Unable to redirect');
                    }
                }, 1500);
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (err) {
            console.error('Error during login:', err);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
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
                <button type="button" className="block text-left text-white bottom-right" onClick={handleNext}>
                    <img src={submit} alt="nextbutton" ></img>
                </button>
            </div>

            {showSuccessPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
                <p className="text-green-600 font-semibold text-xl">🎉 Logged in successfully!</p>
            </div>
            </div>
            )}
            
        </section>
    );
};

export default Login;
