import React, {useState} from 'react';
import Logo from '../assets/petRegisterLogo.svg'
import Submit from '../assets/submitbutton.svg'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function PetRegistrationStep2() {
  const navigate = useNavigate();
  const location = useLocation();
  const step1Data = location.state || {};

  const [formData, setFormData] = useState({
      gender: '',
      size: '',
      age: '',
      vaccinated: '',
      fixed: ''
    });

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async () => {
      const step1Data = JSON.parse(localStorage.getItem('petStep1'));
      const combinedData = {...step1Data,...formData};

      const formToSend = new FormData();

      //attach text fields
      for(const key in combinedData){
        formToSend.append(key, combinedData[key]);
      }

      //attach the image seperate
      if (step1Data.webPhoto && typeof step1Data.webPhoto === 'object'){
        formToSend.append('webPhoto', step1Data.webPhoto);
      }
      
      try {
        const res = await fetch('/register/pet/step2', {
          method: 'POST',
          body: formToSend
        });
  
        if (res.ok) {
          localStorage.removeItem('petStep1');
          navigate('/'); // or another success page
        } else {
          console.error('Upload failed');
        }
      } catch (err) {
        console.error('Error:', err);
      }
  
    };
  

  return(
    <section className= "bg-pink-300 min-h-screen py-12 px-4 text-center text-white font-saira text-xl ">
          {/*Title */}
        <div className='flex flex-col items-center mb-4'>
            <img src={Logo}></img>
            <p className='pt-4'>Now fill out the information regarding your pet’s health</p>
        </div>
         {/*Form */}
         <div className='flex-col items-center'>
          <label className="block text-left text-white">Gender*</label>
          <input 
              name="gender"
              value= {formData.gender}
              onChange={handleChange} 
              className="block w-full mb-2 p-2 text-black"
              required/>

          <label className="block text-left text-white">Size*</label>
          <input 
              name="size" 
              value={formData.size}
              onChange={handleChange}
              className="block w-full mb-2 p-2 text-black"
              required/>

          <label className="block text-left text-white">Age*</label>
          <input 
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="block w-full mb-2 p-2 text-black"
              required/>

          <label className="block text-left text-white">Is your pet vaccinated?*</label>
          <input 
              name="vaccinated" 
              value={formData.vaccinated}
              onChange={handleChange}
              className="block w-full mb-2 p-2 text-black"
              required/>

          <label className="block text-left text-white">Is your pet spayed or neutered?*</label>
          <input 
              name="fixed" 
              value={formData.fixed}
              onChange={handleChange}
              className="block w-full mb-2 p-2 text-black"
              required/>

        </div>
         {/*Buttons */}
         <div className='pt-4'>
          <button className='' onClick={handleSubmit}>
              <img src={Submit}></img>
          </button>
        </div>
    </section>
  );
};

export default PetRegistrationStep2;