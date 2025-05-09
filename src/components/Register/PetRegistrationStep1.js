import React, {useState, useEffect} from 'react';
import Logo from '../assets/petRegisterLogo.svg'
import Next from '../assets/nextbutton.svg'
import {useNavigate} from 'react-router-dom';
import {dogBreeds,catBreeds,reptileBreeds,rodentBreeds,birdBreeds,otherBreeds } from '../../data/petBreeds';

function Dropdown({ label, name, options = [], value, onChange }) {
  return (
    <div>
      <label className="block text-left text-white font-semibold">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full p-2 text-black rounded"
        required
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function PetRegistrationStep1() {
  const [breedOptionsBySpecies, setBreedOptionsBySpecies] = useState({});
  const navigate = useNavigate();

  const handleNext = () => {
      const { webPhoto, ...textData } = formData;

      navigate('/api/pets/register/step2', {state:{...textData, webPhoto}});

  };

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, webPhoto: file });
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    workingClass: '',
    urgency: '',
    eventPhoto: ''
  });

  const [previewImage, setPreviewImage] = useState(null);

  const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);

useEffect(() => {
    async function loadBreeds() {
      try {

  
        // Assuming these are just arrays of names: ['Siamese', 'Persian']
        const groupedDogs = { Dog: dogBreeds };
        const groupedCats = { Cat: catBreeds };
        const groupedReptiles = { Reptile: reptileBreeds};
        const groupedBirds = { Bird: birdBreeds};
        const groupedRodents = { Rodent: rodentBreeds};
        const groupedOthers = { Other: otherBreeds};
  
        const Breeds = {
          ...groupedDogs,
          ...groupedCats,
          ...groupedReptiles,
          ...groupedBirds,
          ...groupedRodents,
          ...groupedOthers
        };
  
        setBreedOptionsBySpecies(Breeds);
      } catch (err) {
        console.error('API error:', err);
      }
    }
  
    loadBreeds();
  }, []);
  

  const species = ['Dog', 'Cat', 'Reptile','Bird','Rodent','Other'];
  const breedOptions = breedOptionsBySpecies[formData.species] || [];
  const workClassOptions = ['Farm', 'Service','None'];
  const urgencyOptions = ['3 weeks', '3 months','6 months+'];

  return(
    <section className= "bg-pink-300 min-h-screen py-12 px-4 text-center text-white font-saira text-xl ">
      <div classname='' >
          {/*Title */}
        <div className='flex flex-col items-center mb-4'>
            <img src={Logo}></img>
            <p className='pt-4'>Let’s get to know your pet! Fill out the following background information.</p>
        </div>

        {/*Form */}
        <div className='flex flex-col '>
          <label className="block text-left text-white">Name*</label>
          <input 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="block w-full mb-2 p-2 text-black" 
                required/>
          
          <Dropdown label="Species *" name="species" options={species} value={formData.species} onChange={handleChange}/>
          {formData.species && (
            <Dropdown label="Breed *" name="breed" options={breedOptions} value={formData.breed} onChange={handleChange}/>
          )}
          <Dropdown label="Working Class *" name="workingClass" options={workClassOptions} value={formData.workingClass} onChange={handleChange} />

          <Dropdown label="How long can you care for your pet?* " name="urgency" options={urgencyOptions} value={formData.urgency} onChange={handleChange} required/>


          <label className="block text-left text-white">Event Photo*</label>
              <input
                name="webPhoto"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full mb-2 p-2 text-black bg-white rounded"
              />
              {previewImage && (
                <div className="flex justify-center mb-4">
                  <img src={previewImage} alt="Preview" className="max-w-xs max-h-40 rounded" />
                </div>
              )}
        </div>

        {/*Buttons */}
        <div className='pt-4 flex justify-center space-x-4'>
          <button 
            onClick={handleNext} 
            className='' 
            disabled={!isFormValid}
          >
              <img src={Next} className={!isFormValid ? 'opacity-50' : ''}></img>
          </button>
        </div>
        
      </div>
      
    </section>
  );
};

export default PetRegistrationStep1;