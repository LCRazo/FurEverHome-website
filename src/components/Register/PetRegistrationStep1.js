import React, {useState} from 'react';
import Logo from '../assets/petRegisterLogo.svg'
import {useNavigate} from 'react-router-dom';

function PetRegistrationStep1() {

  const navigate = useNavigate();

  const handleNext = () => {
      const { webPhoto, ...textData } = formData;

      navigate('/api/pets/register/step2', {state:{...textData, webPhoto}});

  };

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  }

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    workingClass: '',
    urgency: '',
    webPhoto: ''
  });



  return(
    <section className= "bg-pink-300 min-h-screen py-12 px-4 text-center text-white font-saira text-xl ">
      <div classname='' >
          {/*Title */}
        <div className='flex flex-col items-center mb-4'>
            <img src={Logo}></img>
            <p className='pt-4'>Let’s get to know your pet! Fill out the following background information.</p>
        </div>

        {/*Form */}
        <div className='flex-col items-center'>
          <label className="block text-left text-white">Name*</label>
          <input 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="block w-full mb-2 p-2 text-black" 
                required/>
          
          <label className="block text-left text-white">Species*</label>
          <input 
                name="species" 
                value={formData.species} 
                onChange={handleChange} 
                className="block w-full mb-2 p-2 text-black" 
                required/>
          
          <label className="block text-left text-white">Breed*</label>
          <input 
                name="breed"  
                value={formData.breed} 
                onChange={handleChange} 
                className="block w-full mb-2 p-2 text-black"
                required/>
          
          <label className="block text-left text-white">Is your pet a working class breed?*</label>
          <input 
                name="workingClass"  
                value={formData.workingClass} 
                onChange={handleChange} 
                className="block w-full mb-2 p-2 text-black" 
                required/>

          <label className="block text-left text-white">How long can you care for your pet?*</label>
          <input  
                name="urgency"  
                value={formData.urgency} 
                onChange={handleChange}
                className="block w-full mb-2 p-2 text-black rounded" 
                required/>

          <label className="block text-left text-white">Web Photo*</label>
              <input
                name="webPhoto"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({...formData, webPhoto: e.target.files[0]})}
                className="block w-full mb-2 p-2 text-black bg-white rounded"
              />
        </div>

        {/*Buttons */}
        <div className='pt-4 flex justify-center space-x-4'>
          <button onClick={handleNext} className='bg-white text-pink-600 px-4 py-2 rounded'>Next</button>
        </div>
        
      </div>
      
    </section>
  );
};

export default PetRegistrationStep1;